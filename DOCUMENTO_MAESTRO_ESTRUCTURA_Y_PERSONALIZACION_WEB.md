# DOCUMENTO MAESTRO: ESTRUCTURA, ANATOMÍA Y GUÍA DE PERSONALIZACIÓN WEB
## Proyecto: Sitio Web Oficial Dr. Luis Alberto Portillo (Quiroprácticos Portillo)

> **PROPÓSITO DE ESTE DOCUMENTO:**  
> Este archivo sirve como **manual técnico integral y referencia arquitectónica** diseñado específicamente para que un Asistente de Inteligencia Artificial (LLM) o desarrollador comprenda al 100% la composición, líneas de código, lógica interactiva, estilos y contenido de toda la página web. Permite localizar con exactitud cada dato genérico/placeholder para reemplazarlo con la información clínica real del Dr. Luis Alberto Portillo sin romper ninguna funcionalidad, animación ni sistema de conversión.

---

## 1. INVENTARIO DE ARCHIVOS Y ARQUITECTURA DEL PROYECTO

La carpeta `Pagina_Web` contiene tanto los archivos **activos en producción** como archivos **legados (antiguos)**. Es crítico que la IA no modifique archivos en desuso.

### Tabla de Identificación de Archivos

| Archivo / Carpeta | Tipo | Estado | Rol y Función Técnica |
| :--- | :--- | :--- | :--- |
| **`index.html`** | HTML5 (1,055 líneas) | **ACTIVO (Principal)** | Estructura semántica completa del sitio web, metadatos SEO, marcado Schema.org, componentes visuales, modales y formularios. |
| **`styles-segundo.css`** | CSS3 (2,071 líneas) | **ACTIVO (Principal)** | Hoja de estilos enlazada en `index.html`. Contiene el sistema de diseño oscuro (*Dark Luxury / Outcrowd Style*), variables CSS, media queries móviles y animaciones. |
| **`animations.js`** | JavaScript ES6 (852 líneas) | **ACTIVO (Principal)** | Motor de interactividad cargado con `defer`. Maneja el repositorio de síntomas, tracking de conversiones (CAPI), modales, validación y envío de formularios a WhatsApp, feedback drawer y animaciones GSAP/Lenis adaptativas. |
| **`style.css`** | CSS3 (30 KB) | *LEGADO / OBSOLETO* | **NO EDITAR**. Hoja de estilos de la versión v1. No está vinculada a `index.html`. |
| **`app.js`** | JavaScript (7 KB) | *LEGADO / OBSOLETO* | **NO EDITAR**. Script básico de la versión v1. Sus funciones fueron migradas y ampliadas en `animations.js`. |
| **`hero-bg.webp`** | Imagen WebP (307 KB) | **ACTIVO** | Fondo oscuro ambiental utilizado en la sección Hero (`#inicio`). |
| **`doctor-profile.webp`** | Imagen WebP (78 KB) | **ACTIVO** | Fotografía del Dr. Luis Alberto Portillo mostrada en la sección `#doctor` y en tarjetas de previsualización social (Open Graph). |
| **`columna-lateral.webp`** | Imagen WebP (56 KB) | **ACTIVO** | Gráfico anatómico de apoyo de columna vertebral. |
| **`mapa-dolor.webp`** | Imagen WebP (45 KB) | **ACTIVO** | Gráfico de columna vertebral sobre el cual se posicionan los 4 puntos calientes interactivos (*hotspots*) de la sección `#dolor-map`. |
| **`logo-animado.mp4` / `.webm`** | Video WebM/MP4 (~600 KB) | **ACTIVO** | Video en bucle del logo anatómico de la columna ubicado en el Hero. |
| **`logo-animado-poster.webp`** | Imagen WebP (20 KB) | **ACTIVO** | Imagen de portada estática (*poster*) para el video del Hero en conexiones lentas o móviles con ahorro de datos. |
| **`favicon.svg`** | Icono vectorial SVG | **ACTIVO** | Favicon del sitio mostrado en la pestaña del navegador. |
| **`Foto del Dr Portillo/Foto Dr.jpeg`** | Imagen JPEG (79 KB) | **RECURSO DISPONIBLE** | Fotografía original del Dr. Portillo para generar o actualizar el perfil en WebP. |

---

## 2. ANATOMÍA DETALLADA DE `index.html` (LÍNEA POR LÍNEA)

A continuación se detalla cada sección del archivo `index.html`, indicando sus números de línea exactos, los elementos que contiene y qué partes deben ser personalizadas.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          ESTRUCTURA DE index.html                       │
├─────────────────────────────────────────────────────────────────────────┤
│ Líneas 1-136     : <head> (SEO, OpenGraph, Schema.org JSON-LD Local SEO)│
│ Líneas 139-158   : <nav class="nav-bar"> (Navegación y CTA WhatsApp)    │
│ Líneas 160-207   : <section id="inicio"> (Hero Section + Video de Spine)│
│ Líneas 210-219   : <div class="marquee-band"> (Cinta de texto continuo) │
│ Líneas 220-360   : <section id="servicios"> (6 Tarjetas de Servicios)   │
│ Líneas 361-410   : <section class="section-dark"> (3 KPIs / Métricas)   │
│ Líneas 412-504   : <section id="dolor-map"> (Mapa Anatómico del Dolor)  │
│ Líneas 506-553   : <section id="tratamientos"> (Acreditación Médica 3D) │
│ Líneas 555-590   : <section id="doctor"> (Biografía y Perfil Doctor)    │
│ Líneas 592-689   : <section id="sedes"> (Sedes San Salvador y Apopa)    │
│ Líneas 691-766   : <section id="testimonios"> (Swiper Slider Reseñas)   │
│ Líneas 768-828   : <section id="contacto"> (Formulario de Valoración)   │
│ Líneas 830-874   : <footer> (Pie de página, enlaces, horarios y aviso)  │
│ Líneas 875-913   : <div id="symptomDetailModal"> (Modal de Tratamientos)│
│ Líneas 915-945   : Scripts CDNs (Lenis, GSAP, Swiper) y Menú Móvil     │
│ Líneas 947-1045  : Pestaña Flotante y Cajón de Reseñas (Feedback Funnel)│
│ Líneas 1047-1052 : Botón Flotante Permanente de WhatsApp                │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### Desglose por Sección

#### 1. Encabezado, Metadatos SEO y Schema.org JSON-LD (Líneas 1 a 136)
- **Líneas 6-11**: `<title>`, `<meta name="description">`, `<meta name="keywords">`, `<meta name="author">`.
  - *Estado actual:* Configurado con descripciones generales de quiropraxia y medicina biológica en El Salvador.
- **Líneas 17-29**: Metadatos Open Graph y Twitter Cards (`og:title`, `og:description`, `og:image`, `og:url`).
  - *URL actual:* `https://anderssonfranco78-jpg.github.io/doctor-portillo-web/`
  - *Imagen preview:* `doctor-profile.webp`
- **Líneas 37-135**: Marcado estructurado **Schema.org en formato JSON-LD** para Google / SEO Local:
  - `@type: MedicalClinic` con `name: Quiroprácticos Portillo`.
  - Teléfono central: `+50322161866` (Línea 50).
  - Horarios: `Mo-Fr 08:00-18:00`, `Sa 08:00-12:00`.
  - Procedimientos médicos disponibles (`availableService`): Ajuste quiropráctico, descompresión de ciática, hernias discales, homeocinetría, biorresonancia.
  - Dos departamentos/sedes (`department`):
    - **Sede San Salvador:** `Colonia Médica, Calle Los Sisimiles #142` (Línea 90).
    - **Sede Apopa:** `Avenida Principal, Centro Profesional de Apopa, Local 4` (Línea 106).
  - Médico a cargo (`@type: Physician`): Dr. Luis Alberto Portillo, egresado de Universidad de El Salvador (Líneas 119-132).

---

#### 2. Barra de Navegación Flotante (Líneas 139 a 158)
- **Línea 141**: Logo / Nombre de marca `<a href="#inicio" class="nav-logo">Dr. Portillo</a>`.
- **Líneas 142-149**: Enlaces de navegación rápida con anclas: `#inicio`, `#servicios`, `#dolor-map`, `#tratamientos`, `#sedes`, `#testimonios`.
- **Líneas 151-153**: Botón CTA primario en el navbar:
  - `<a href="https://wa.me/50322161866?text=..." class="btn-elastic btn-violet" id="nav-cta-wa">`
  - Texto predeterminado: *"Hola Doctor Portillo, vi su sitio web y me gustaría agendar una consulta de valoración."*
- **Líneas 154-156**: Botón hamburguesa para dispositivos móviles (`#mobile-menu-btn`).

---

#### 3. Sección Hero / Inicio (Líneas 160 a 207)
- **Línea 161**: Contenedor principal con fondo degradado y `hero-bg.webp`.
- **Línea 164**: Badge de autoridad: `<div class="badge-tag violet">Estudios Profesionales y Experiencia Clínica</div>`.
- **Líneas 167-170**: Título principal H1:
  ```html
  <h1 class="hero-headline" animate>
      Alineación vertebral <br>
      <span class="text-gradient-violet">científica y precisa.</span>
  </h1>
  ```
- **Líneas 171-173**: Párrafo descriptivo de la propuesta de valor clínica (alivio sin cirugía, médula espinal, nervios comprimidos, San Salvador y Apopa).
- **Líneas 174-181**: Dos botones de acción:
  1. `btn-orange` (`#hero-primary-cta`): Enlace directo a WhatsApp (+50322161866) con texto *"Iniciar Tratamiento"*.
  2. `btn-outline`: Ancla a `#dolor-map` con texto *"Localizar Dolor"*.
- **Líneas 182-197**: Tiras de insignias médicas de confianza (*Dr. Luis Portillo Colegiado* e *Instalaciones Modernas*).
- **Líneas 200-205**: Contenedor visual con video HTML5 en bucle (`logo-animado.webm` / `logo-animado.mp4`) y póster de reserva (`logo-animado-poster.webp`).

---

#### 4. Cinta en Movimiento / Marquee Band (Líneas 210 a 219)
- Dos filas infinitas en sentido opuesto (`marquee-left` y `marquee-right`) con palabras clave clínicas:
  - *"Quiropraxia Científica · Sin Cirugía · Alivio del Dolor · Columna Vertebral · Homeocinetría · Dos Sedes · San Salvador · Apopa ·"*

---

#### 5. Sección de Servicios Especializados (Líneas 220 a 360)
- Encabezado con badge violeta y título: *"Nuestros Servicios Quiroprácticos"*.
- **Cuadrícula de 6 Tarjetas Premium** con evento JavaScript `onclick="openSymptomModal('...')"`:
  1. **Tarjeta 1 (Líneas 234-255):** `Ajuste Quiropráctico` (`openSymptomModal('AjusteQuiro')`).
  2. **Tarjeta 2 (Líneas 257-274):** `Terapia de Columna` (`openSymptomModal('TerapiaColumna')`).
  3. **Tarjeta 3 (Líneas 276-294):** `Masaje Terapéutico` (`openSymptomModal('MasajeTera')`).
  4. **Tarjeta 4 (Líneas 296-315):** `Rehabilitación Postural` (`openSymptomModal('RehabPostural')`).
  5. **Tarjeta 5 (Líneas 317-336):** `Tratamiento de Dolor Crónico` (`openSymptomModal('DolorCronico')`).
  6. **Tarjeta 6 (Líneas 338-356):** `Medicina Deportiva` (`openSymptomModal('MedDeportiva')`).

---

#### 6. Sección de Métricas y Estadísticas Clínicas (Líneas 361 a 410)
- **Tarjeta 1 (Líneas 364-378):** `100%` - De recomendación positiva basada en pacientes recuperados de dolor lumbar crónico y cervicalgias.
- **Tarjeta 2 (Líneas 380-395):** `BioF` - Evaluación por resonancia electromagnética para detectar inflamación de órganos y arterias.
- **Tarjeta 3 (Líneas 396-409):** `24h` - De respuesta biológica aproximada tras la primera sesión de infiltración homeopática o ajuste.

---

#### 7. Mapa Anatómico del Dolor (Líneas 412 a 504)
- Contenedor de dos columnas (`symptoms-layout`):
  - **Columna Izquierda (Visual Anatómico, Líneas 427-456):**
    - Imagen base `mapa-dolor.webp`.
    - **4 Puntos Calientes (Hotspots) con coordenadas absolutas porcentuales:**
      1. `#dot-cervical` (top: 16.9%, left: 50%) ➔ `openSymptomModal('Cervical')` (*Cervicalgia y Rigidez*).
      2. `#dot-thoracic` (top: 37.1%, left: 50%) ➔ `openSymptomModal('Dorsal')` (*Tensión Dorsal*).
      3. `#dot-lumbar` (top: 63.2%, left: 49.8%) ➔ `openSymptomModal('Lumbar')` (*Lumbalgia Crónica*).
      4. `#dot-sacral` (top: 81.8%, left: 50%) ➔ `openSymptomModal('Sacro')` (*Compresión Ciática*).
  - **Columna Derecha (Selector en Cuadrícula, Líneas 459-501):**
    - 4 Botones interactivos con iconos SVG:
      1. `Dolor de Espalda Baja` ➔ `openSymptomModal('Lumbar')`.
      2. `Dolor de Cuello` ➔ `openSymptomModal('Cervical')`.
      3. `Compresión de Ciática` ➔ `openSymptomModal('Ciática')`.
      4. `Artrosis y Huesos` ➔ `openSymptomModal('Artrosis')`.

---

#### 8. Sección de Medicina Científica vs. Pseudociencia (Líneas 506 a 553)
- Título: *"Acreditación Médica vs. Pseudociencia"*.
- **3 Tarjetas con Efecto 3D:**
  1. `Ajuste Quiropráctico` (`openSymptomModal('AjusteQuiro')`).
  2. `Homeocinetría Articular` (`openSymptomModal('Artrosis')`) — Infiltración con acupuntura y medicina homeopática.
  3. `Diagnóstico Electromagnético` (`openSymptomModal('DolorCronico')`) — Resonancia biofísica celular.

---

#### 9. Perfil Profesional del Doctor (Líneas 555 a 590)
- **Línea 560**: Imagen del doctor (`doctor-profile.webp`).
- **Líneas 564-568**: Encabezado y resumen biográfico:
  - *Nombre:* Dr. Luis Alberto Portillo.
  - *Título:* Especialista en Biomecánica y Quiropraxia Clínica.
  - *Experiencia:* Más de 15 años de experiencia clínica.
  - *Universidad:* Universidad de El Salvador.
- **Líneas 569-582**: Lista de hitos clínicos con checkmarks verdes:
  1. Especialidad en Alineación Vertebral y Descompresión.
  2. Certificación Internacional en Diagnóstico Electromagnético.
  3. Atención clínica personalizada a más de 10,000 pacientes.
- **Línea 584**: Botón WhatsApp personalizado: *"Consultar con el Dr. Portillo"*.

---

#### 10. Sedes Físicas y Ubicación (Líneas 592 a 689)
- **Sede 1: San Salvador (Líneas 607-645):**
  - *Badge:* Sede Central.
  - *Dirección:* Boulevar de los Héroes, **Condominio Los Héroes, Local 2K**, San Salvador.
  - *Comodidades:* Parqueo privado, enfermeras en turno y sala climatizada.
  - *Horario:* Lunes a Viernes (8:00 AM - 6:00 PM) | Sábados (8:00 AM - 12:00 PM).
  - *Google Maps Iframe (Línea 636):* Embed con coordenadas reales en San Salvador.
  - *Enlace Google Maps (Línea 638):* `https://www.google.com/maps/place/Quiropr%C3%A1cticos+portillo/...`
  - *Botón CTA WhatsApp (Línea 641):* `.location-wa-btn` con atributo `data-sede="San Salvador"`.
- **Sede 2: Apopa (Líneas 648-686):**
  - *Badge:* Sede Norte.
  - *Dirección:* Avenida Principal, **Centro Profesional de Apopa**, Local 4, El Salvador.
  - *Comodidades:* Ubicación accesible, equipo de resonancia instalado y secretarias en turno.
  - *Horario:* Lunes a Viernes (8:00 AM - 6:00 PM) | Sábados (8:00 AM - 12:00 PM).
  - *Google Maps Iframe (Línea 677):* Iframe embebido de Google Maps.
  - *Botón CTA WhatsApp (Línea 682):* `.location-wa-btn` con atributo `data-sede="Apopa"`.

---

#### 11. Testimonios de Pacientes / Swiper Carousel (Líneas 691 a 766)
- Componente Swiper (`.testimonials-swiper`) con 3 tarjetas de testimonios reales:
  1. **Mario Flores (Líneas 707-723):** Paciente de Ciática (San Salvador) — Recuperación tras 2 sesiones de descompresión y acupuntura.
  2. **Sonia de Martínez (Líneas 726-742):** Paciente de Homeocinetría (Apopa) — Alivio de dolor agudo en rodilla de un día para otro.
  3. **Carlos Rivas (Líneas 745-761):** Paciente de Ajuste Cervical (San Salvador) — Alivio de tensión y confianza en instalaciones clínicas.
- Paginación dinámica en `.testimonials-pagination`.

---

#### 12. Formulario de Captación y Valoración Inicial (Líneas 768 a 828)
- **Columna de Información Directa (Líneas 771-789):** Teléfono de contacto directo `+503 2216-1866`.
- **Formulario Interactivo (`#symptomForm`, Líneas 792-826):**
  - Campo 1: `<input id="form-name">` (Nombre completo, requerido).
  - Campo 2: `<input id="form-phone">` (Teléfono / WhatsApp, requerido).
  - Campo 3: `<select id="form-sede">` (Opciones: *San Salvador (Boulevar de los Héroes)* o *Apopa (Centro Profesional)*).
  - Campo 4: `<textarea id="form-symptom">` (Descripción del dolor o inflamación física).
  - Botón: `<button type="submit" id="submit-form-btn">` *"Enviar a Valoración Quiropráctica"*.

---

#### 13. Pie de Página / Footer (Líneas 830 a 874)
- Descripción de marca *"Dr. Portillo - Especialistas en alineación vertebral y medicina biológica"*.
- Lista de navegación con anclas internas.
- Lista de clínicas con teléfono `+503 2216-1866`.
- Horarios de atención.
- Aviso de derechos de autor: `© 2026 Quiroprácticos Portillo. Tratamientos médicos quiroprácticos.`

---

#### 14. Modal Glassmorphic de Detalle de Síntomas/Tratamientos (Líneas 875 a 913)
- ID contenedor: `#symptomDetailModal`.
- Elementos internos manipulados dinámicamente por JavaScript:
  - Botón de cierre: `.modal-window-close` (`onclick="closeSymptomModal()"`).
  - Título dinámico: `<h3 id="modal-window-title">`.
  - Descripción dinámica: `<p id="modal-window-body">`.
  - Beneficios clínicos: Dos viñetas con checks.
  - Botón WhatsApp dinámico: `<a id="modal-wa-cta-btn">`.

---

#### 15. Sistema de Calificación y Embudo de Feedback (Líneas 947 a 1045)
- **Pestaña Flotante Lateral (Líneas 948-955):** Botón vertical `#feedbackTabTrigger` con etiqueta *"Califícanos"*.
- **Cajón Deslizante Lateral (`#feedbackDrawerOverlay`, Líneas 958-1045):**
  - **Escala de 5 Emojis (`#feedback-emoji-scale`):**
    - Rating 1: 😠 *Muy mala*
    - Rating 2: 😕 *Mala*
    - Rating 3: 😐 *Regular*
    - Rating 4: 🙂 *Buena*
    - Rating 5: 😄 *Excelente*
  - **Bifurcación Inteligente:**
    - **Ratings 4 y 5 (Positivo):** Muestra el bloque `#feedback-google-notice` con el botón `#feedback-google-btn` para redirigir a dejar reseña 5 estrellas en Google Maps.
    - **Ratings 1, 2 y 3 (Neutro/Negativo):** Muestra el formulario interno `#internalFeedbackForm` con `#feedback-comment` para capturar la queja/sugerencia de forma privada sin exponerla en público.
  - **Estado de Agradecimiento:** `#feedback-thankyou` tras enviar el comentario.

---

#### 16. Botón Flotante de WhatsApp (Líneas 1047 a 1052)
- Enlace permanente fijado en la esquina inferior derecha:
  - `class="floating-wa-btn"`
  - `href="https://wa.me/50322161866?text=Hola%20Doctor%20Portillo,%20necesito%20agendar%20una%20consulta."`

---

## 3. ANATOMÍA Y LÓGICA DE JAVASCRIPT EN `animations.js`

El archivo `animations.js` es el cerebro interactivo del sitio web. A continuación se detallan sus estructuras de datos y funciones clave.

### 3.1 Diccionario de Datos de Síntomas (`symptomsRepository`) (Líneas 6 a 67)
Este objeto almacena el contenido inyectado en el modal cuando el usuario hace clic en los botones de servicios o puntos calientes de la columna:

```javascript
const symptomsRepository = {
    'Cervical': {
        title: 'Ajuste Cervical Científico',
        body: 'Ajustes quiroprácticos cervicales de precisión...',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa una consulta para valoración quiropráctica de Cervicalgia y Rigidez.'
    },
    'Dorsal': {
        title: 'Corrección de Vértebras Torácicas',
        body: 'Ajustes específicos en la espalda alta...',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa una consulta para valoración de dolor en la Espalda Alta o Dorsal.'
    },
    'Lumbar': {
        title: 'Descompresión Lumbar Médica',
        body: 'Manipulación y descompresión quiropráctica de la espalda baja...',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa una consulta para valoración de Lumbalgia Crónica.'
    },
    'Sacro': {
        title: 'Estabilización Sacrolumbar',
        body: 'Corrección física de la base de la columna y el sacro...',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa una consulta para valoración de dolor Lumbosacro o Cadera.'
    },
    'Ciática': {
        title: 'Tratamiento del Nervio Ciático',
        body: 'Enfoque no invasivo para liberar la raíz comprimida...',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa una consulta para descompresión de Nervio Ciático.'
    },
    'Artrosis': {
        title: 'Homeocinetría y Nutrición Ósea',
        body: 'Infiltración articular de acupuntura combinada con medicamentos homeopáticos...',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa una consulta sobre Homeocinetría e infiltraciones para articulaciones.'
    },
    'AjusteQuiro': {
        title: 'Ajuste Quiropráctico de Precisión',
        body: 'Alineación física y manual de las vértebras desviadas...',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa agendar una consulta para un Ajuste Quiropráctico.'
    },
    'TerapiaColumna': {
        title: 'Terapia Descompresiva de Columna',
        body: 'Tratamiento enfocado en la descompresión discal...',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa agendar una cita para Terapia de Columna.'
    },
    'MasajeTera': {
        title: 'Masaje Terapéutico y Neuromuscular',
        body: 'Terapia de tejidos blandos orientada a aliviar espasmos musculares...',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa una consulta para Masaje Terapéutico.'
    },
    'RehabPostural': {
        title: 'Rehabilitación Postural y Biomecánica',
        body: 'Programa personalizado de ejercicios y correcciones posturales...',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa información sobre la Rehabilitación Postural.'
    },
    'DolorCronico': {
        title: 'Tratamiento Especializado de Dolor Crónico',
        body: 'Protocolo médico no invasivo diseñado para pacientes con dolores persistentes...',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa el Tratamiento de Dolor Crónico.'
    },
    'MedDeportiva': {
        title: 'Medicina y Quiropráctica Deportiva',
        body: 'Atención dirigida a atletas y personas activas...',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa agendar una cita de Medicina Deportiva.'
    }
};
```

---

### 3.2 Motor de Conversión y Tracking CAPI (Líneas 72 a 94)
- Función `generateEventId()`: Genera identificadores únicos de conversión con prefijo `evt_`.
- Función `trackConversionEvent(eventName, data)`: Simula eventos CAPI (Facebook/Google) y anexa el `eventId` al texto de los enlaces de WhatsApp para permitir trazabilidad de pacientes.

---

### 3.3 Control del Modal de Síntomas (Líneas 97 a 135)
- `window.openSymptomModal(key)`: Extrae los datos de `symptomsRepository[key]`, actualiza el DOM del modal, pausa el scroll suave de Lenis y abre la ventana emergente.
- `window.closeSymptomModal()`: Cierra la ventana y reactiva el scroll de Lenis.

---

### 3.4 Procesamiento del Formulario de Citas (`initAppointmentForm`) (Líneas 138 a 169)
- Escucha el evento `submit` de `#symptomForm`.
- Extrae: Nombre, Teléfono, Sede y Síntoma.
- Construye un mensaje estructurado para WhatsApp:
  ```text
  Hola Doctor Portillo, acabo de enviar mis datos en su sitio web para agendar una cita de valoración en la clínica de [SEDE].

  *Nombre:* [NOMBRE]
  *Teléfono:* [TELÉFONO]
  *Dolor o síntomas:* [SÍNTOMA]

  [ID de Conversión: evt_xxxxxxxxx]
  ```
- Abre WhatsApp con la URL codificada hacia `https://wa.me/50322161866`.

---

### 3.5 Detección de Dispositivo y Rendimiento Adaptativo (Líneas 196 a 479)
- `getDeviceContext()`: Detecta si el usuario está en móvil o computadora.
- **En Móviles (`setupMobileMode`):** Desactiva Lenis y ScrollTrigger pesados para evitar lag; utiliza un `IntersectionObserver` ligero a 60 FPS.
- **En Computadoras (`setupDesktopMode`):** Activa Lenis Smooth Scroll, GSAP SplitType para animación de títulos palabra por palabra y rotación 3D en las tarjetas al pasar el ratón (*mouse tracking*).

---

### 3.6 Constantes del Sistema de Feedback (Líneas 524 a 529)
Dos constantes cruciales que deben ser personalizadas:
```javascript
// Línea 525: Enlace directo a reseñas de Google Maps de la clínica
const GOOGLE_REVIEW_URL = "PLACEHOLDER_GOOGLE_REVIEW_LINK";

// Línea 528: Webhook de n8n / backend para guardar comentarios internos en NocoDB / CRM
const FEEDBACK_WEBHOOK_URL = "PLACEHOLDER_N8N_WEBHOOK_URL";
```

---

## 4. SISTEMA DE DISEÑO Y TOKENS CSS (`styles-segundo.css`)

El archivo `styles-segundo.css` define las variables globales del diseño en `:root` (Líneas 5 a 45):

```css
:root {
    /* Paleta de Fondos */
    --bg-dark-core: #080808;      /* Fondo negro principal profundo */
    --bg-dark-surface: #191919;   /* Fondo de tarjetas y paneles */
    --bg-light-contrast: #F5F5F5; /* Fondo claro para secciones de contraste */
    
    /* Acentos de Color */
    --accent-violet: #10b981;     /* Verde esmeralda médico (autoridad) */
    --accent-green: #10b981;      /* Verde clínico */
    --accent-orange: #fe4a23;     /* Naranja vibrante para botones de alta conversión */
    --accent-blue: #1b76ff;       /* Azul tecnológico para sedes */
    
    /* Tipografía */
    --font-display: 'Lora', serif;       /* Encabezados y títulos editoriales */
    --font-body: 'Inter', sans-serif;    /* Cuerpo de texto, botones y formularios */
    
    /* Espaciados y Bordes */
    --radius-premium: 24px;
    --radius-pill: 9999px;
    --container-max-width: 1400px;
}
```

### Clases Utilitarias Importantes:
- `.btn-elastic`: Botón interactivo con efecto elástico y micro-animación al hover.
- `.badge-tag`: Insignia redondeada para categorizar temas (`.violet`, `.orange`, `.blue`, `.green`).
- `.service-card-premium`: Tarjetas de servicios con borde de gradiente y resplandor.
- `.hotspot-dot`: Puntos calientes pulsantes sobre la imagen de la columna vertebral.

---

## 5. MATRIZ DE PERSONALIZACIÓN: DATOS GENÉRICOS VS. DATOS REALES

Esta tabla resume todos los elementos del sitio web que la IA o el desarrollador debe verificar y actualizar con la información específica del Dr. Portillo:

| Elemento / Dato | Archivo | Líneas Exactas | Valor Genérico / Actual | Instrucción de Personalización |
| :--- | :--- | :--- | :--- | :--- |
| **Número de Teléfono / WhatsApp** | `index.html` | 50, 87, 103, 151, 175, 584, 641, 682, 786, 854, 1048 | `+503 2216-1866` / `50322161866` | Verificar o cambiar al número oficial de WhatsApp de atención al paciente de la clínica. |
| **Número de WhatsApp en JS** | `animations.js` | 117, 164, 184 | `50322161866` | Debe coincidir exactamente con el número configurado en el HTML. |
| **URL de Reseñas de Google** | `animations.js` | 525 | `"PLACEHOLDER_GOOGLE_REVIEW_LINK"` | Colocar la URL directa del perfil de Google Maps de Quiroprácticos Portillo para reseñas. |
| **Webhook de Feedback n8n** | `animations.js` | 528 | `"PLACEHOLDER_N8N_WEBHOOK_URL"` | Colocar la URL del webhook de n8n para registrar las calificaciones y comentarios en la base de datos. |
| **Dirección Sede San Salvador** | `index.html` | 90, 617 | `Boulevar de los Héroes, Condominio Los Héroes, Local 2K` | Validar número de local, edificio y puntos de referencia reales en San Salvador. |
| **Iframe Google Maps San Salvador** | `index.html` | 636, 638 | Iframe embed de Google Maps | Actualizar con el iframe exacto del perfil de negocio de Google Maps de la sede San Salvador. |
| **Dirección Sede Apopa** | `index.html` | 106, 658 | `Avenida Principal, Centro Profesional de Apopa, Local 4` | Validar dirección física exacta y local en Apopa. |
| **Iframe Google Maps Apopa** | `index.html` | 677, 679 | Iframe embed de Google Maps | Actualizar con el iframe exacto de la ubicación en Apopa. |
| **Horarios de Atención** | `index.html` | 58, 96, 112, 632, 673, 861-865 | `Lun-Vie: 8:00 AM - 6:00 PM` / `Sáb: 8:00 AM - 12:00 PM` | Reemplazar por los horarios reales de consulta de ambas sedes. |
| **Biografía y Años de Experiencia** | `index.html` | 565-582 | `15 años de experiencia`, `Universidad de El Salvador`, `10,000 pacientes` | Personalizar con la trayectoria real del Dr. Luis Alberto Portillo, títulos y certificados. |
| **Catálogo de Servicios y Síntomas** | `index.html` y `animations.js` | `index.html`: 233-356, 432-500<br>`animations.js`: 6-67 | 6 servicios principales y 4 puntos anatómicos del dolor | Si se agregan o eliminan tratamientos, actualizar en ambos archivos de forma sincronizada. |
| **Testimonios de Pacientes** | `index.html` | 707-761 | Mario Flores, Sonia de Martínez, Carlos Rivas | Sustituir con testimonios, nombres y casos clínicos reales del Dr. Portillo. |
| **Metadatos SEO y Dominio** | `index.html` | 6-28, 43, 47, 120 | `https://anderssonfranco78-jpg.github.io/doctor-portillo-web/` | Cambiar por el dominio final `.com` o `.sv` cuando el sitio sea desplegado en producción definitiva. |

---

## 6. REGLAS DE ORO PARA LA IA QUE REALICE LA PERSONALIZACIÓN

Cuando otra IA procese este proyecto para realizar cambios, **DEBE SEGUIR OBLIGATORIAMENTE ESTAS DIRECTRICES**:

1. **Sincronización Obligatoria entre HTML y JS:**
   - Si se cambia una clave en el HTML (por ejemplo, en `openSymptomModal('NuevaClave')`), dicha clave `NuevaClave` **debe existir** dentro de `symptomsRepository` en `animations.js`. De lo contrario, el modal se abrirá con texto por defecto.
2. **Respetar Atributos de Animación y Conversión:**
   - No eliminar los atributos `animate` de los títulos, párrafos o tarjetas, ya que el motor GSAP y el `IntersectionObserver` los utilizan como selectores de animación.
   - No eliminar las clases `.location-wa-btn` ni el atributo `data-sede` de los botones de sedes, ya que son interceptados para tracking CAPI.
3. **Manejo de Formularios:**
   - El formulario `#symptomForm` depende de los IDs `#form-name`, `#form-phone`, `#form-sede` y `#form-symptom`. No renombrar estos IDs en `index.html` a menos que se actualicen simultáneamente en `animations.js` (Líneas 145-148).
4. **No Tocar Archivos Legados:**
   - No realizar cambios en `app.js` ni en `style.css`. Todos los estilos deben ir en `styles-segundo.css` y todos los scripts en `animations.js`.
5. **Codificación y Formato de Enlaces WhatsApp:**
   - Al construir URLs de WhatsApp, usar siempre formato internacional sin símbolos `+` en el parámetro `wa.me/503XXXXXXXX` y codificar los espacios con `%20` o saltos de línea con `%0A` o saltos en plantilla literal procesados con `encodeURIComponent()`.

---
*Documento generado para el ecosistema Cerebro-IA 2.0 / Material del Dr. Portillo — Quiroprácticos Portillo.*
