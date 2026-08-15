# Propuesta de Mejoras y Recomendaciones — Sitio Web Quiroprácticos Portillo

Este documento contiene un análisis técnico y de diseño del sitio web oficial (**doctor-portillo-web**), evaluando su estado actual (`index.html`, `styles-segundo.css`, `animations.js`) y proponiendo mejoras estratégicas estructuradas por categoría, impacto y complejidad.

> **Nota:** Este documento es de carácter consultivo y propositivo. No se ha modificado ninguna lógica ni estructura existente del código web.

---

## 1. Pulido Visual y Estética Profesional (Visual Polish)

### 1.1 Sustitución Progresiva de Gráficos de Stock por Fotografía Real de Sedes
- **Qué es:** Incorporar fotografías reales de las dos sedes físicas (San Salvador y Apopa), mostrando la fachada, recepción, camillas de descompresión y al Dr. Portillo en consulta clínica.
- **Por qué ayuda:** Aumenta de forma drástica la credibilidad, confianza y tasa de conversión de pacientes locales que buscan una clínica médica establecida y no un consultorio genérico.
- **Complejidad estimada:** Baja (solo reemplazo y optimización de imágenes WebP).

### 1.2 Unificación y Refinamiento Tipográfico
- **Qué es:** Afinar las jerarquías entre la tipografía editorial (`Lora` para encabezados de autoridad) y la técnica (`Inter` para lectura clínica). Añadir `letter-spacing: -0.02em` y alturas de línea consistentes (`line-height: 1.2` en H1/H2).
- **Por qué ayuda:** Proyecta una imagen médica de alta gama ("hospital/clínica premium"), mejorando la legibilidad tanto en móviles como en monitores de alta resolución.
- **Complejidad estimada:** Baja (ajustes en variables CSS globales).

### 1.3 Tarjetas de Servicios con Efecto Glassmorphism y Bordes con Resplandor
- **Qué es:** Enriquecer las tarjetas de servicios y testimonios con un borde sutil con gradiente reactivo al cursor (`border: 1px solid rgba(162, 119, 255, 0.2)`) y backdrop-filter.
- **Por qué ayuda:** Moderniza la interfaz al estándar de diseño web 2026, haciendo que los tratamientos destaquen visualmente sin sobrecargar el fondo oscuro.
- **Complejidad estimada:** Media (implementación con CSS pseudo-elementos y transiciones).

---

## 2. Interactividad y Micro-Interacciones

### 2.1 Mapa del Dolor Dinámico con SVG Interactivo
- **Qué es:** Sustituir los botones flotantes del "Mapa del Dolor" por un mapa anatómico SVG vectorial donde cada sección vertebral (Cervical, Dorsal, Lumbar, Sacro) se ilumine con resplandor neón violeta/verde al pasar el cursor o tocar en móvil.
- **Por qué ayuda:** Hace que la autoevaluación del paciente sea intuitiva, atractiva y memorable, reduciendo la fricción antes de solicitar una cita.
- **Complejidad estimada:** Media-Alta (creación/adecuación del SVG y handlers en JavaScript).

### 2.2 Pre-llenado Inteligente de Mensajes de WhatsApp según Interacción
- **Qué es:** Conectar el flujo del Mapa del Dolor y las tarjetas de servicios con el botón de WhatsApp, de modo que al hacer clic en "Agendar Cita" tras consultar un síntoma (ej. "Dolor Lumbar"), el mensaje de WhatsApp se abra automáticamente con el texto pre-configurado para ese dolor y sede preferida.
- **Por qué ayuda:** Elimina la barrera de que el paciente deba redactar su síntoma desde cero, aumentando la conversión inmediata de leads a conversaciones reales.
- **Complejidad estimada:** Baja-Media (lógica JS ya iniciada en `animations.js`, expandible a todos los CTAs).

### 2.3 Optimización de Animaciones GSAP y Modo Accesible (Reduced Motion)
- **Qué es:** Implementar una consulta `@media (prefers-reduced-motion: reduce)` para desactivar transiciones complejas o efectos de SplitType en dispositivos donde el usuario prefiera bajo consumo o menor movimiento.
- **Por qué ayuda:** Mejora el rendimiento en dispositivos móviles de gama media/baja y cumple con las normativas de accesibilidad web (WCAG).
- **Complejidad estimada:** Baja (condicionales CSS y comprobación en `animations.js`).

---

## 3. Limpieza y Mantenimiento del Código (Code Cleanliness)

### 3.1 Depuración de Archivos Legados Desconectados
- **Qué es:** En el repositorio existen los archivos `style.css` (29 KB) y `app.js` (7 KB) pertenecientes a una versión previa, mientras que la versión activa utiliza `styles-segundo.css` y `animations.js`.
- **Por qué ayuda:** Eliminar o archivar archivos huérfanos reduce el peso del repositorio, evita confusiones en futuras modificaciones y clarifica la arquitectura del proyecto.
- **Complejidad estimada:** Muy baja (mover a carpeta `archive/` o eliminar).

### 3.2 Migración de Estilos Inline a Clases Utilitarias CSS
- **Qué es:** Existen diversos atributos `style="..."` directamente en etiquetas HTML de `index.html` (márgenes, displays, anchos, colores).
- **Por qué ayuda:** Centralizar todos los estilos en `styles-segundo.css` permite una edición más ágil, mejora el caché del navegador y mantiene el HTML limpio y semántico.
- **Complejidad estimada:** Media (refactorización ordenada por secciones).

### 3.3 Metadatos Sociales Completos (Open Graph y Twitter Cards)
- **Qué es:** Añadir etiquetas `<meta property="og:image" content="...">`, `<meta property="og:title">`, `<meta property="og:description">` y favicon personalizado con el logo del Dr. Portillo.
- **Por qué ayuda:** Cuando el enlace se comparta por WhatsApp, Facebook o Instagram, aparecerá una tarjeta visual profesional con la foto del Dr. Portillo y descripción de la clínica.
- **Complejidad estimada:** Muy baja (añadir etiquetas en el `<head>`).

---

## 4. Nuevas Funcionalidades Recomendadas (Sin Romper lo Existente)

### 4.1 Galería / Modal de Video Consejos del Dr. Portillo
- **Qué es:** Crear una sección interactiva de "Cápsulas Clínicas" donde se puedan reproducir en un reproductor vertical los videos cortos producidos en Remotion (Videos 10 al 15: dolor lumbar, insomnio, técnica de gym, etc.).
- **Por qué ayuda:** Aprovecha todo el material audiovisual ya renderizado para educar al paciente dentro de la misma web y posicionar al doctor como un referente educativo.
- **Complejidad estimada:** Media (componente modal con reproductor HTML5 / video).

### 4.2 Selector Rápido de Sede (San Salvador vs Apopa)
- **Qué es:** Un interruptor (toggle) en la cabecera o sección de sedes que permita al paciente alternar entre "Sede San Salvador" y "Sede Apopa", actualizando al instante los horarios, teléfono directo, mapa de Google Maps y dirección exacta.
- **Por qué ayuda:** Facilita la orientación geográfica y evita llamadas o citas agendadas en la sucursal incorrecta.
- **Complejidad estimada:** Baja-Media (función JS para conmutar clases activas).

### 4.3 Marcado de Datos Estructurados Schema.org (JSON-LD)
- **Qué es:** Script en el `<head>` con formato JSON-LD que declara a Quiroprácticos Portillo como `MedicalClinic` / `Physician`, con direcciones, teléfonos, horarios de atención y especialidades.
- **Por qué ayuda:** Mejora drásticamente el posicionamiento en Google Search y Google Maps cuando personas en El Salvador busquen "quiropráctico cerca de mí" o "tratamiento dolor de espalda".
- **Complejidad estimada:** Muy baja (bloque estándar JSON-LD en HTML).

---

## Resumen de Priorización Sugerida

| Prioridad | Mejora | Beneficio Principal | Dificultad |
| :--- | :--- | :--- | :--- |
| **Alta** | Metadatos Open Graph / Favicon (3.3) | Tarjeta visual profesional al compartir en WhatsApp | Muy Baja |
| **Alta** | Pre-llenado dinámico de WhatsApp (2.2) | Incremento directo de pacientes agendados | Baja |
| **Alta** | Marcado Schema.org Local SEO (4.3) | Mayor visibilidad orgánica en Google Maps | Muy Baja |
| **Media** | Galería de Video Consejos Remotion (4.1) | Reutilización de videos 10-15 y autoridad médica | Media |
| **Media** | Limpieza de archivos legados (3.1) | Orden y claridad en el repositorio | Muy Baja |
| **Media** | Selector interactivo de Sedes (4.2) | Claridad para pacientes de ambas sucursales | Baja |
| **Opcional**| Mapa del Dolor SVG Vectorial (2.1) | Experiencia visual interactiva de última generación| Media-Alta |
