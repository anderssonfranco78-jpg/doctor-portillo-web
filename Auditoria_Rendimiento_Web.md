# Auditoría de Rendimiento y Dispositivos de Gama Baja — Sitio Web Quiroprácticos Portillo

**Fecha de evaluación:** 15 de Agosto de 2026  
**Objetivo:** Verificar el cumplimiento de la directriz de diseño del proyecto: *óptimo rendimiento en teléfonos económicos y conexiones móviles lentas/inestables (3G/4G).*  
**Archivos auditados:** `index.html`, `styles-segundo.css`, `animations.js`, `style.css`, `app.js`, y suite de imágenes WebP.  
**Carácter:** Diagnóstico y consultivo (sin modificaciones de código aplicadas).

---

## Resumen Ejecutivo y Veredicto

- **Peso total de la página:** **~937 KB sin comprimir** (**~637 KB de transferencia comprimida**). Cumple el objetivo de mantenerse **por debajo de 1-2 MB**.
- **Puntuación de Rendimiento Estimada:**
  - ✅ **Formato de imágenes:** 100% en WebP moderno.
  - ✅ **Bypass móvil de animaciones:** Existe un modo ligero en `animations.js` que apaga GSAP/Lenis en pantallas móviles.
  - ⚠️ **Imágenes bajo el pliegue sin lazy loading:** `doctor-profile.webp` no tiene el atributo `loading="lazy"`.
  - ⚠️ **Dependencia de 5 librerías CDN externas:** Sin bloques `try/catch` ni comprobación de disponibilidad; si una CDN falla en 3G, la ejecución de JavaScript se interrumpe.
  - ⚠️ **Cuello de botella en CSS (@import):** `styles-segundo.css` duplica la petición de Google Fonts mediante `@import`, bloqueando la construcción del CSSOM.

---

## 1. Auditoría Detallada por Áreas

### 1.1 Imágenes y Carga Diferida (Lazy Loading)

| Imagen | Tamaño en Disco | Dimensiones | Lazy Loading | Evaluación de Optimización |
| :--- | :--- | :--- | :--- | :--- |
| **`hero-bg.webp`** | 266.3 KB | 1920×1080 | N/A (Background CSS) | **Aceptable / Mejorable:** Al ser fondo del Hero, se descarga de inmediato. Para móviles podría servirse una variante recortada/comprimida de ~80 KB. |
| **`columna-lateral.webp`** | 89.5 KB | 900×1200 | `loading="lazy"` (Línea 84) | ⚠️ **Contraproducente:** Está en el Hero (Above-The-Fold / LCP). Tener `loading="lazy"` en la imagen principal retrasa el Largest Contentful Paint. Debe ser `loading="eager"` con `fetchpriority="high"`. |
| **`mapa-dolor.webp`** | 45.0 KB | 800×1100 | `loading="lazy"` (Línea 309) | ✅ **Excelente:** Peso muy ligero y carga diferida correctamente implementada. |
| **`doctor-profile.webp`** | 78.0 KB | 960×1280 | ❌ **Falta `loading="lazy"`** (Línea 440) | ⚠️ **Fallo de regla:** Se encuentra en la 5ª sección (debajo del pliegue). Al no tener `loading="lazy"`, el navegador móvil la descarga durante el arranque inicial compitiendo por ancho de banda con el Hero. |

---

### 1.2 Ejecución de JavaScript y CPU en Dispositivos Económicos

#### A. Lo que está BIEN implementado:
- En `animations.js` (líneas 202-248), existe una detección móvil (`window.innerWidth <= 766`).
- Si es móvil:
  1. Desactiva y destruye los observadores pesados de GSAP (`ScrollTrigger.getAll().forEach(t => t.kill())`).
  2. No instancia el motor de scroll suave (`Lenis`), ahorrando el bucle continuo de `requestAnimationFrame`.
  3. Utiliza un `IntersectionObserver` nativo para alternar opacidad y transformaciones aceleradas por hardware (GPU).

#### B. Puntos de Fricción y Riesgo para Gama Baja:
1. **Llamadas a GSAP sin verificación previa (`animations.js:205`):**
   - Se ejecuta `gsap.registerPlugin(ScrollTrigger)` antes de comprobar si la librería cargó correctamente. Si la conexión móvil bloquea `cdnjs.cloudflare.com`, lanza `ReferenceError: gsap is not defined`, deteniendo la ejecución de los formularios de WhatsApp y modales.
2. **Inyección masiva de estilos inline (`animations.js:228-238`):**
   - En móviles, itera sobre todos los elementos con `[animate]` y `.service-card-premium` aplicando estilos directos (`el.style.opacity`, `el.style.transform`, `el.style.transition`). En procesadores lentos, esto genera picos de recálculo de estilo (Style Recalculation) durante el renderizado inicial.
3. **Pérdida de adaptación en rotación de pantalla:**
   - La variable `isMobile` se evalúa únicamente al cargar el DOM. Si el usuario gira el teléfono a horizontal (>766px), se activan listeners de `mousemove` 3D en las tarjetas, lo cual genera caídas de frames (*jank*) en chips gráficos económicos.

---

### 1.3 Peticiones de Red y Dependencias CDN

El sitio solicita **7 recursos externos** distribuidos en 4 dominios CDN:

1. `fonts.googleapis.com` & `fonts.gstatic.com` (Google Fonts: Lora e Inter)
2. `cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css` (~18 KB)
3. `cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.19/bundled/lenis.min.js` (~10 KB)
4. `cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js` (~65 KB)
5. `cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js` (~35 KB)
6. `unpkg.com/split-type` (~10 KB)
7. `cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js` (~150 KB)

**Diagnóstico:**
- **Punto Crítico:** Ninguno de los scripts CDN cuenta con atributos `defer` explícitos ni fallbacks locales.
- **Riesgo en redes 3G:** La dispersión en múltiples dominios obliga a realizar múltiples resoluciones DNS y negociaciones TLS en redes lentas.
- **Impacto:** Si un CDN presenta latencia, la interacción de la página se congela temporalmente.

---

### 1.4 Peso y Uso de CSS

- **Estado de `style.css` (29.0 KB):**
  - ✅ **Confirmado:** `style.css` **NO** está siendo cargado por `index.html`. No consume ancho de banda del usuario en producción.
- **Estado de `styles-segundo.css` (33.8 KB):**
  - Es el único archivo CSS local cargado.
  - ⚠️ **Problema de Doble Petición (@import):** En la línea 6 de `styles-segundo.css` existe:
    ```css
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Lora:...&display=swap');
    ```
    Dado que `index.html` ya incluye la etiqueta `<link>` a Google Fonts en el `<head>`, este `@import` provoca que el navegador vuelva a solicitar las fuentes dentro del flujo del CSS, bloqueando la renderización.

---

### 1.5 Desglose del Peso Total de la Página

```
┌─────────────────────────────────────────────────────────────┐
│ DESGLOSE DE TRANSFERENCIA (Primera Carga Móvil)             │
├────────────────────────┬──────────────┬─────────────────────┤
│ Tipo de Recurso        │ Peso Bruto   │ Peso Comprimido     │
├────────────────────────┼──────────────┼─────────────────────┤
│ HTML (index.html)      │ 57.2 KB      │ ~12.0 KB            │
│ CSS Local + CDN        │ 51.8 KB      │ ~11.7 KB            │
│ JavaScript Local + CDN │ 289.1 KB     │ ~89.5 KB            │
│ Fuentes Web (Google)   │ ~60.0 KB     │ ~40.0 KB            │
│ Imágenes WebP (4 imgs) │ 478.9 KB     │ 478.9 KB            │
├────────────────────────┼──────────────┼─────────────────────┤
│ TOTAL GENERAL          │ ~937.0 KB    │ ~632.1 KB           │
└────────────────────────┴──────────────┴─────────────────────┘
```

**Conclusión de Peso:** El peso total (~632 KB comprimido) está confortablemente dentro del límite móvil de 1-2 MB.

---

## 2. Plan de Correcciones Recomendadas (Ordenadas por Impacto)

### Fase 1: Victorias Rápidas (Quick Wins — 0 Riesgo, Alto Impacto)

1. **Añadir `loading="lazy"` a la foto del doctor (`index.html:440`):**
   - *Cambio:* Agregar `loading="lazy"` a `<img src="doctor-profile.webp" ...>`.
   - *Beneficio:* Ahorra 78 KB en la descarga crítica inicial en conexiones móviles.

2. **Optimizar carga de imagen LCP en Hero (`index.html:84`):**
   - *Cambio:* Reemplazar `loading="lazy"` por `loading="eager"` y añadir `fetchpriority="high"` a `columna-lateral.webp`.
   - *Beneficio:* Mejora el tiempo de despliegue visual del Hero (Largest Contentful Paint) en 300-600ms en 3G.

3. **Eliminar `@import` en `styles-segundo.css:6`:**
   - *Cambio:* Borrar la línea `@import url(...)` del archivo CSS, dejando únicamente el `<link rel="stylesheet">` del `<head>`.
   - *Beneficio:* Elimina la cascada de bloqueo de renderizado de fuentes.

---

### Fase 2: Robustez en Conexiones Inestables (Riesgo Bajo)

4. **Protección de ejecución con Guards en `animations.js`:**
   - *Cambio:* Envolver las llamadas a `gsap`, `ScrollTrigger`, `Lenis` y `SplitType` en comprobaciones seguras:
     ```javascript
     if (typeof gsap !== 'undefined') { ... }
     ```
   - *Beneficio:* Si falla alguna CDN por conexión intermitente, los botones de WhatsApp, modales y navegación seguirán funcionando al 100%.

5. **Añadir atributos `defer` a scripts externos:**
   - *Cambio:* Agregar `defer` a las etiquetas `<script src="https://cdn...">` en `index.html`.
   - *Beneficio:* Evita el bloqueo del parser HTML durante la descarga de librerías.

---

### Fase 3: Optimizaciones Avanzadas para Móviles de Gama Baja (Opcional)

6. **Mover animación de entrada móvil de JS a clases puras CSS:**
   - *Cambio:* Definir los estados `.gsap-target` en `styles-segundo.css` en lugar de manipular estilos inline mediante bucles JavaScript en el arranque.
   - *Beneficio:* Elimina el trabajo de CPU en el hilo principal durante el primer renderizado.

7. **Variante ligera de fondo para móviles (`hero-bg-mobile.webp`):**
   - *Cambio:* Generar una versión de 720×1280 a ~60 KB para pantallas pequeñas vía Media Query CSS.
   - *Beneficio:* Ahorro de ~200 KB en la carga inicial de datos móviles.
