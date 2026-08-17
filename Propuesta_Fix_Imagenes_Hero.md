# Diagnóstico y Propuestas de Solución: Imágenes del Hero

**Fecha:** 17 de Agosto de 2026  
**Proyecto:** Sitio Web Dr. Luis Alberto Portillo (`doctor-portillo-web`)  
**Estado:** Diagnóstico y Propuesta (Sin modificaciones de código ni imágenes aplicadas)

---

## 1. Imagen: `hero-bg.webp` (Fondo del Hero)

### 🔍 Diagnóstico Técnico y Visual
- **Dimensiones y Formato:** 2752 × 1536 píxeles, Formato WebP (RGB), 266.3 KB.
- **Contenido:** Fotografía de interior de clínica quiropráctica moderna con camillas negras, panel de listones de madera con iluminación LED indirecta, diplomas y escritorio.
- **Problema detectado:** En la pared central azul marino (entre el arco de madera y la ventana del fondo), aparece un logotipo dorado en relieve con el texto:
  ```
          Q
    QUIROPRÁCTICA
    CENTROAMÉRICA
     — Dr. Morales —
  ```
- **Ubicación exacta en coordenadas:**
  - Eje Horizontal (X): ~1180px a ~1550px (entre el 43% y 56% del ancho de la imagen).
  - Eje Vertical (Y): ~500px a ~760px (entre el 32% y 49% del alto de la imagen).
- **Evaluación con el CSS actual:**
  - El sitio aplica un doble oscurecimiento (`linear-gradient(rgba(10,10,15,0.75), rgba(10,10,15,0.90))` + `#inicio::before` con `rgba(0,0,0,0.55)`).
  - **Resultado visual:** Aunque el fondo está fuertemente atenuado, el relieve dorado y la palabra *"QUIROPRÁCTICA CENTROAMÉRICA"* conservan suficiente contraste y son perceptibles en monitores calibrados, pantallas OLED o al subir el brillo, ubicándose justo a la derecha del titular principal *"Alineación vertebral"*.

---

### 🛠️ Opciones de Solución para `hero-bg.webp`

| Opción | Descripción | Ventajas | Desventajas / Riesgo |
| :--- | :--- | :--- | :--- |
| **Opción 1A (Recomendada): Retoque / Inpainting local de la pared** | Eliminar el logotipo dorado y el texto mediante retoque digital (inpainting) rellenando con la textura y gradiente natural de la pared azul circundante. | • Conserva 100% la estética, camillas, iluminación LED y profundidad del fondo.<br>• Cero cambios en CSS ni estructura.<br>• La pared es lisa y homogénea, por lo que el retoque queda invisible. | • Requiere editar el archivo de imagen original y re-exportar a WebP optimizado.<br>• *Riesgo: Muy bajo.* |
| **Opción 1B: Incrementar opacidad del overlay CSS** | Subir la opacidad del degradado oscuro en CSS (ej. de 0.75/0.90 a 0.88/0.96) para oscurecer aún más el fondo. | • No requiere tocar ningún archivo gráfico.<br>• Cambio rápido vía CSS. | • Oscurece todo el Hero (madera, camillas, luces LED), restándole riqueza visual y dinamismo al fondo.<br>• *Riesgo: Bajo (pero pérdida de impacto estético).* |
| **Opción 1C: Sustitución total por fotografía propia** | Reemplazar la imagen por una foto real de alta calidad de las instalaciones del Dr. Portillo (San Salvador o Apopa) o un stock neutro. | • Máxima autenticidad y branding 100% propio. | • Requiere contar con material fotográfico profesional de las clínicas.<br>• *Riesgo: Ninguno (sujeto a disponibilidad de fotos).* |

> **⭐ Recomendación para `hero-bg.webp`:** **Opción 1A**. La pared sobre la que está el rótulo es una superficie mate azul con iluminación suave; un inpainting profesional elimina el rótulo del "Dr. Morales" de forma limpia sin perder la ambientación clínica premium del Hero.

---

## 2. Imagen: `columna-lateral.webp` (Ilustración Anatómica del Hero)

### 🔍 Diagnóstico Técnico y Visual
- **Dimensiones y Formato:** 2816 × 1536 píxeles, Formato WebP (RGB), 89.5 KB.
- **Tipo de Gráfico:** Imagen rasterizada plana (mapa de bits). Los textos en inglés, líneas guía y corchetes forman parte de los mismos píxeles sobre un fondo oscuro `#0d111a` (no existe archivo vectorial SVG separado en el proyecto).
- **Problema detectado:** Todos los términos anatómicos están en **inglés**:
  - *Columna izquierda:* `Cervical Vertebrae (C1-C7)`, `Thoracic Vertebrae (T1-T12)`, `Lumbar Vertebrae (L1-L5)`, `Sacrum`, `Coccyx`.
  - *Columna derecha:* `C1 (Atlas)`, `C2 (Axis)`, `C7 (Vertebra Prominens)`, `T1`, `T12`, `L1`, `L5`, `Sacrum`.
- **Búsqueda de alternativas en el proyecto:**
  - Se revisó todo el repositorio; solo existen `favicon.svg` (isotipo minimalista) y `mapa-dolor.webp` (que ya está en español en la sección inferior).

---

### 🛠️ Opciones de Solución para `columna-lateral.webp`

| Opción | Descripción | Ventajas | Desventajas / Riesgo |
| :--- | :--- | :--- | :--- |
| **Opción 2A (Recomendada): Limpieza a Columna 3D Pura (Sin Textos)** | Retirar todos los textos en inglés, líneas y corchetes, dejando únicamente la columna vertebral 3D con su resplandor morado sobre el fondo oscuro limpio. | • Estética ultra moderna, limpia y de alto impacto visual (estilo *healthtech premium*).<br>• Cero conflictos de idioma.<br>• Ideal para móviles donde los textos pequeños no eran legibles.<br>• Los detalles anatómicos ya se explican en español en el *"Mapa del Dolor"* más abajo. | • Se prescinde de los rótulos descriptivos en el Hero (pasa de diagrama educativo a elemento visual de impacto).<br>• *Riesgo: Muy bajo.* |
| **Opción 2B: Traducción y Re-maquetación tipográfica al Español** | Limpiar los textos en inglés e incorporar los textos equivalentes en español con tipografía moderna del sistema (*Vértebras Cervicales*, *Torácicas*, *Lumbares*, *Sacro*, *Cóccix*, *Atlas*, *Axis*). | • Mantiene el valor educativo y formal del diagrama anatómico en español. | • En pantallas de teléfonos móviles el texto se escala y puede verse pequeño o recargado.<br>• Requiere alineación tipográfica cuidadosa.<br>• *Riesgo: Bajo-medio.* |
| **Opción 2C: Sustitución por nuevo render / ilustración 3D** | Diseñar o incorporar un nuevo modelo 3D / renderizado de columna vertebral con la identidad visual del Dr. Portillo. | • Gráfico 100% exclusivo y a medida. | • Requiere tiempo de diseño/generación y aprobación de un nuevo activo.<br>• *Riesgo: Bajo.* |

> **⭐ Recomendación para `columna-lateral.webp`:** **Opción 2A**. Dejar la columna 3D brillante y limpia sin textos en el Hero genera una estética mucho más sofisticada y premium, eliminando el ruido visual en móviles. El rol educativo y explicativo ya lo cumple de forma interactiva la sección del **Mapa del Dolor** (que está 100% en español).
