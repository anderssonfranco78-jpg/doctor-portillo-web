/* ==========================================================================
   Quiroprácticos Portillo - Premium Animation and Conversion Core
   ========================================================================== */

// Symptoms, Treatments & 4 Pillars Data Repository (Información Real Dr. Portillo)
const symptomsRepository = {
    'Pilar1': {
        title: 'Pilar 1: Biomecánica y Quiropraxia',
        body: 'Alineación manual vertebral de alta precisión, corrección articular y descompresión física de nervios comprimidos en la columna cervical, torácica y lumbar. Tratamiento de ciática y hernias discales sin cirugía.',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa una consulta sobre el Pilar de Biomecánica y Quiropraxia.'
    },
    'Pilar2': {
        title: 'Pilar 2: Enfermedades Crónicas',
        body: 'Protocolos con medicina natural y nutrición ortomolecular orientados a la recuperación en enfermedades autoinmunes, disfunción del sistema nervioso central, afecciones vasculares y apoyo a terapias oncológicas.',
        waText: 'Hola Dr. Portillo, vi su sitio web y deseo información sobre el tratamiento para Enfermedades Crónicas y Nutrición Ortomolecular.'
    },
    'Pilar3': {
        title: 'Pilar 3: Recuperación Visual',
        body: 'Programa clínico integrativo que combina ejercicios oculares especializados, nutrición específica, medicamentos homeopáticos y tecnología médica para el fortalecimiento y recuperación de la salud visual.',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa agendar una consulta de Recuperación Visual.'
    },
    'Pilar4': {
        title: 'Pilar 4: Club para Diabéticos',
        body: 'Abordaje integral de la diabetes: comprensión del origen biológico, tratamiento homeopático del componente emocional, nutrición orientada, ejercicio guiado, exposición solar y equilibrio mental y espiritual.',
        waText: 'Hola Dr. Portillo, vi su sitio web y deseo unirme o recibir información sobre el Club para Diabéticos.'
    },
    'EscanerCuantico': {
        title: 'Diagnóstico con Escáner Cuántico (30 Exámenes)',
        body: 'Evaluación biofísica integral que analiza 30 parámetros fisiológicos en una sola sesión. Detecta inflamaciones vasculares, sobrecargas en órganos internos y desbalances celulares antes de que los síntomas se vuelvan críticos.',
        waText: 'Hola Dr. Portillo, vi su sitio web y deseo agendar una cita para la evaluación con Escáner Cuántico (30 exámenes).'
    },
    'Cervical': {
        title: 'Ajuste Cervical de Precisión',
        body: 'Alineación específica de atlas y axis para eliminar la irritación en nervios cervicales. Alivia rigidez de cuello, dolores irradiados a hombros, mareos y migrañas de origen tensional.',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa una valoración para dolor de cuello y rigidez cervical.'
    },
    'Dorsal': {
        title: 'Corrección Torácica y Dorsal',
        body: 'Ajustes en la espalda alta para devolver la movilidad articular a vértebras y costillas. Libera tensiones por malas posturas y previene alteraciones reflejas en órganos.',
        waText: 'Hola Dr. Portillo, vi su sitio web y deseo una consulta para dolor en la espalda alta o dorsal.'
    },
    'Lumbar': {
        title: 'Descompresión Lumbar Médica',
        body: 'Tratamiento no quirúrgico para liberar nervios lumbares comprimidos por hernias o subluxaciones. Devuelve la capacidad de flexión, carga y movimiento sin dolor.',
        waText: 'Hola Dr. Portillo, vi su sitio web y necesito una consulta para dolor de espalda baja o lumbalgia.'
    },
    'Sacro': {
        title: 'Estabilización Sacrolumbar y Cadera',
        body: 'Corrección de la base vertebral y articulación sacroilíaca. Restaura el centro de gravedad del cuerpo y alivia bloqueos agudos al caminar o permanecer de pie.',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa una valoración para dolor lumbosacro o de cadera.'
    },
    'Ciática': {
        title: 'Descompresión del Nervio Ciático',
        body: 'Tratamiento focalizado para liberar la raíz del nervio ciático en la zona lumbosacra. Elimina el dolor punzante, adormecimiento y debilidad que baja por la pierna.',
        waText: 'Hola Dr. Portillo, vi su sitio web y requiero atención para compresión del nervio ciático.'
    },
    'Artrosis': {
        title: 'Homeosinetría Articular (Rodilla y Articulaciones)',
        body: 'Aplicación localizada de acupuntura con medicamentos homeopáticos específicos. Desinflamación rápida y efectiva en rodillas y articulaciones con desgaste, complementada con nutrición ósea.',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa el tratamiento de Homeosinetría para articulaciones y rodilla.'
    },
    'AjusteQuiro': {
        title: 'Ajuste Quiropráctico Clínico',
        body: 'Corrección manual biomecánica de vértebras desviadas (subluxaciones). Libera la médula espinal y los nervios periféricos de compresiones mecánicas.',
        waText: 'Hola Dr. Portillo, vi su sitio web y me gustaría agendar una cita para Ajuste Quiropráctico.'
    },
    'TerapiaColumna': {
        title: 'Descompresión y Terapia de Columna',
        body: 'Reducción de presión intradiscal y articular en columna cervical, torácica y lumbar. Alternativa segura y efectiva frente a cirugías de hernias discales.',
        waText: 'Hola Dr. Portillo, vi su sitio web y deseo información sobre Terapia de Columna.'
    },
    'MasajeTera': {
        title: 'Masaje Terapéutico Neuromuscular',
        body: 'Tratamiento neuromuscular profundo para disolver contracturas crónicas, aliviar sobrecarga muscular y optimizar la irrigación sanguínea en zonas afectadas.',
        waText: 'Hola Dr. Portillo, vi su sitio web y deseo una sesión de Masaje Terapéutico.'
    },
    'RehabPostural': {
        title: 'Rehabilitación Postural y Biomecánica',
        body: 'Corrección de desequilibrios musculares y vicios posturales mediante ejercicios terapéuticos adaptados a cada paciente.',
        waText: 'Hola Dr. Portillo, vi su sitio web y solicito información sobre Rehabilitación Postural.'
    },
    'DolorCronico': {
        title: 'Manejo Integral de Dolor Crónico',
        body: 'Protocolos integrativos para personas con dolores persistentes de columna, articulaciones o migrañas que no han cedido ante tratamientos convencionales.',
        waText: 'Hola Dr. Portillo, vi su sitio web y necesito una consulta para Dolor Crónico.'
    },
    'MedDeportiva': {
        title: 'Quiropraxia y Medicina Deportiva',
        body: 'Optimización biomecánica articular para deportistas y personas activas. Prevención de lesiones y aceleración de la recuperación muscular.',
        waText: 'Hola Dr. Portillo, vi su sitio web y deseo agendar una consulta de Quiropraxia Deportiva.'
    }
};

// Global State
let lenisInstance = null;

// Generate unique event_id for Facebook/Google Conversion API (CAPI) tracking
function generateEventId() {
    return 'evt_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
}

// Track Conversion Event Helper (Simulation of hybrid CAPI Client/Server)
function trackConversionEvent(eventName, data) {
    const eventId = generateEventId();
    const eventPayload = {
        event_name: eventName,
        event_id: eventId,
        timestamp: Date.now(),
        client_user_agent: navigator.userAgent,
        source_url: window.location.href,
        custom_data: data
    };
    
    // Log conversion event for verification
    console.log(`[CAPI TRACKING] Event: ${eventName} | EventID: ${eventId}`, eventPayload);
    
    // Return eventId to append to outbound WhatsApp links for server side deduplication
    return eventId;
}

// =============================================================================
// ACCESSIBILITY VOICE ENGINE & ANIMATED AVATAR CONTROLLER (FASE 3)
// =============================================================================
const symptomsAudioMap = {
    'Pilar1': 'audio-accesibilidad/audio-pilar1.mp3',
    'Pilar2': 'audio-accesibilidad/audio-pilar2.mp3',
    'Pilar3': 'audio-accesibilidad/audio-pilar3.mp3',
    'Pilar4': 'audio-accesibilidad/audio-pilar4.mp3',
    'EscanerCuantico': 'audio-accesibilidad/audio-escaner-cuantico.mp3',
    'Cervical': 'audio-accesibilidad/audio-cervical.mp3',
    'Dorsal': 'audio-accesibilidad/audio-dorsal.mp3',
    'Lumbar': 'audio-accesibilidad/audio-lumbar.mp3',
    'Sacro': 'audio-accesibilidad/audio-sacro.mp3',
    'Ciática': 'audio-accesibilidad/audio-ciatica.mp3',
    'Artrosis': 'audio-accesibilidad/audio-artrosis.mp3',
    'AjusteQuiro': 'audio-accesibilidad/audio-ajuste-quiro.mp3',
    'TerapiaColumna': 'audio-accesibilidad/audio-terapia-columna.mp3',
    'MasajeTera': 'audio-accesibilidad/audio-masaje-tera.mp3',
    'RehabPostural': 'audio-accesibilidad/audio-rehab-postural.mp3',
    'DolorCronico': 'audio-accesibilidad/audio-dolor-cronico.mp3',
    'MedDeportiva': 'audio-accesibilidad/audio-med-deportiva.mp3'
};

const testimonialAudioMap = {
    'concepcion': 'audio-accesibilidad/audio-testimonio-concepcion.mp3',
    'mario': 'audio-accesibilidad/audio-testimonio-mario.mp3',
    'sonia': 'audio-accesibilidad/audio-testimonio-sonia.mp3',
    'carlos': 'audio-accesibilidad/audio-testimonio-carlos.mp3'
};

let currentPlayingAudio = null;
let currentActiveAudioBtn = null;
let currentActiveAvatarFrame = null;
let currentModalAudioKey = null;

function stopAllAccessibilityAudio() {
    if (currentPlayingAudio) {
        currentPlayingAudio.pause();
        currentPlayingAudio.currentTime = 0;
        currentPlayingAudio = null;
    }
    if (currentActiveAvatarFrame) {
        currentActiveAvatarFrame.classList.remove('is-talking');
        currentActiveAvatarFrame = null;
    }
    if (currentActiveAudioBtn) {
        currentActiveAudioBtn.classList.remove('is-playing', 'is-loading');
        const textSpan = currentActiveAudioBtn.querySelector('.btn-audio-text');
        if (textSpan) textSpan.textContent = currentActiveAudioBtn.dataset.defaultText || 'Escuchar';
        const iconSpan = currentActiveAudioBtn.querySelector('.btn-audio-icon');
        if (iconSpan) iconSpan.textContent = '🔊';
        currentActiveAudioBtn = null;
    }

    // Desactivar todas las ondas de audio
    const waveEls = document.querySelectorAll('.avatar-audio-equalizer');
    waveEls.forEach(w => w.classList.remove('active'));

    // Restaurar estados de texto
    const modalStatus = document.getElementById('modalAudioStatus');
    if (modalStatus && modalStatus.textContent.includes('Reproduciendo')) {
        modalStatus.textContent = 'Escucha la explicación clínica';
    }
    const doctorStatus = document.getElementById('doctorAudioStatus');
    if (doctorStatus && doctorStatus.textContent.includes('Reproduciendo')) {
        doctorStatus.textContent = 'Escucha la trayectoria del Dr. Portillo';
    }

    // Reanudar autoplay de testimonios si no hay modales abiertos
    const symptomModal = document.getElementById('symptomDetailModal');
    const isModalOpen = symptomModal && symptomModal.classList.contains('open');
    if (!isModalOpen && window.testimonialsSwiper && window.testimonialsSwiper.autoplay && !window.testimonialsSwiper.autoplay.running) {
        try {
            window.testimonialsSwiper.autoplay.start();
        } catch (e) {}
    }
}

function playAccessibilityAudio(audioSrc, btnElement, frameElement, defaultText = 'Escuchar') {
    // Si se presiona el botón que ya está sonando, pausar y detener
    if (currentPlayingAudio && currentActiveAudioBtn === btnElement) {
        stopAllAccessibilityAudio();
        return;
    }

    // Detener cualquier otro audio previo
    stopAllAccessibilityAudio();
    if (!audioSrc) return;

    // Pausar autoplay del carrusel para que no corte el audio al cambiar de slide
    if (window.testimonialsSwiper && window.testimonialsSwiper.autoplay && window.testimonialsSwiper.autoplay.running) {
        try {
            window.testimonialsSwiper.autoplay.stop();
        } catch (e) {}
    }

    // Detección instantánea de modo sin conexión (Offline)
    if (typeof navigator !== 'undefined' && 'onLine' in navigator && !navigator.onLine) {
        const modalStatus = document.getElementById('modalAudioStatus');
        if (modalStatus) modalStatus.textContent = 'Modo sin conexión. La información completa está disponible abajo.';
        const doctorStatus = document.getElementById('doctorAudioStatus');
        if (doctorStatus) doctorStatus.textContent = 'Modo sin conexión. Puedes leer su biografía completa aquí.';
        return;
    }

    btnElement.dataset.defaultText = defaultText;
    const textSpan = btnElement.querySelector('.btn-audio-text');
    const iconSpan = btnElement.querySelector('.btn-audio-icon');

    // Estado inicial: Cargando
    btnElement.classList.add('is-loading');
    if (textSpan) textSpan.textContent = 'Cargando...';
    if (iconSpan) iconSpan.textContent = '⏳';

    const modalStatus = document.getElementById('modalAudioStatus');
    if (modalStatus && frameElement && frameElement.id === 'modalAvatarFrame') {
        modalStatus.textContent = 'Preparando narración clínica...';
    }
    const doctorStatus = document.getElementById('doctorAudioStatus');
    if (doctorStatus && frameElement && frameElement.id === 'avatar-frame-doctor') {
        doctorStatus.textContent = 'Cargando biografía médica...';
    }

    // Carga 100% bajo demanda con preload none
    const audio = new Audio();
    audio.preload = 'none';
    audio.src = audioSrc + '?v=2';

    currentPlayingAudio = audio;
    currentActiveAudioBtn = btnElement;
    currentActiveAvatarFrame = frameElement;

    // Evento onplaying: Se dispara cuando el sonido efectivamente empieza a emitirse
    audio.onplaying = () => {
        btnElement.classList.remove('is-loading');
        btnElement.classList.add('is-playing');
        if (textSpan) textSpan.textContent = 'Detener';
        if (iconSpan) iconSpan.textContent = '⏹';

        if (frameElement) {
            frameElement.classList.add('is-talking');
            const waveEl = frameElement.querySelector('.avatar-audio-equalizer') || document.getElementById('modalAvatarWave');
            if (waveEl) waveEl.classList.add('active');
        }

        if (modalStatus && frameElement && frameElement.id === 'modalAvatarFrame') {
            modalStatus.textContent = 'Reproduciendo audio clínico...';
        }
        if (doctorStatus && frameElement && frameElement.id === 'avatar-frame-doctor') {
            doctorStatus.textContent = 'Reproduciendo biografía del Dr. Portillo...';
        }
    };

    audio.onended = () => {
        stopAllAccessibilityAudio();
    };

    audio.onerror = (e) => {
        console.warn('[AUDIO ACCESIBILIDAD] Audio no disponible o error de red:', e);
        if (modalStatus && frameElement && frameElement.id === 'modalAvatarFrame') {
            modalStatus.textContent = 'Audio no disponible en este momento. El texto está disponible abajo.';
        }
        if (doctorStatus && frameElement && frameElement.id === 'avatar-frame-doctor') {
            doctorStatus.textContent = 'Audio no disponible en este momento. El texto está disponible abajo.';
        }
        stopAllAccessibilityAudio();
    };

    audio.play().catch(err => {
        console.warn('[AUDIO ACCESIBILIDAD] Reproducción diferida o bloqueada:', err);
        stopAllAccessibilityAudio();
    });
}

window.toggleModalAudio = function() {
    const audioSrc = symptomsAudioMap[currentModalAudioKey];
    const btn = document.getElementById('modalAudioBtn');
    const frame = document.getElementById('modalAvatarFrame');
    if (audioSrc && btn && frame) {
        playAccessibilityAudio(audioSrc, btn, frame, 'Escuchar Explicación');
    }
};

window.toggleDoctorAudio = function(btn) {
    const audioSrc = 'audio-accesibilidad/audio-biografia-doctor.mp3';
    const frame = document.getElementById('avatar-frame-doctor');
    if (audioSrc && btn && frame) {
        playAccessibilityAudio(audioSrc, btn, frame, 'Escuchar Biografía');
    }
};

window.toggleTestimonialAudio = function(id, btn) {
    const audioSrc = testimonialAudioMap[id];
    const frame = document.getElementById(`avatar-frame-${id}`);
    if (audioSrc && btn && frame) {
        playAccessibilityAudio(audioSrc, btn, frame, 'Escuchar Historia');
    }
};

// Modal Control Functions (Symptoms & Pillars)
window.openSymptomModal = function(key) {
    // Detener audio previo al abrir un nuevo síntoma
    stopAllAccessibilityAudio();
    currentModalAudioKey = key;

    const modal = document.getElementById('symptomDetailModal');
    const titleEl = document.getElementById('modal-window-title');
    const bodyEl = document.getElementById('modal-window-body');
    const waCta = document.getElementById('modal-wa-cta-btn');
    
    // Resetear UI del botón de audio del modal
    const modalBtn = document.getElementById('modalAudioBtn');
    if (modalBtn) {
        modalBtn.classList.remove('is-playing', 'is-loading');
        const textSpan = modalBtn.querySelector('.btn-audio-text');
        if (textSpan) textSpan.textContent = 'Escuchar Explicación';
        const iconSpan = modalBtn.querySelector('.btn-audio-icon');
        if (iconSpan) iconSpan.textContent = '🔊';
    }
    const modalFrame = document.getElementById('modalAvatarFrame');
    if (modalFrame) {
        modalFrame.classList.remove('is-talking');
    }
    const modalWave = document.getElementById('modalAvatarWave');
    if (modalWave) {
        modalWave.classList.remove('active');
    }
    const modalStatus = document.getElementById('modalAudioStatus');
    if (modalStatus) {
        modalStatus.textContent = 'Escucha la explicación clínica';
    }
    
    const info = symptomsRepository[key] || {
        title: 'Valoración Médica',
        body: 'Agenda una consulta para una valoración individualizada basada en tu historial clínico.',
        waText: 'Hola Dr. Portillo, vi su sitio web y me gustaría agendar una valoración clínica.'
    };
    
    titleEl.innerText = info.title;
    bodyEl.innerText = info.body;
    
    // Tracking client side modal view
    const eventId = trackConversionEvent('ViewSymptomModal', { symptom: key });
    
    // Build WhatsApp URL with dynamic message and eventId for verification
    const encodedMsg = encodeURIComponent(`${info.waText}\n\n[ID de Seguimiento: ${eventId}]`);
    waCta.href = `https://wa.me/50322161866?text=${encodedMsg}`;
    
    // Stop Lenis scroll to prevent overlay conflicts
    if (lenisInstance) {
        lenisInstance.stop();
    }
    
    modal.classList.add('open');
};

window.closeSymptomModal = function() {
    stopAllAccessibilityAudio();
    const modal = document.getElementById('symptomDetailModal');
    if (modal) {
        modal.classList.remove('open');
    }
    
    // Reactivate Lenis scroll
    if (lenisInstance) {
        lenisInstance.start();
    }
};

// Credentials / Diplomas Modal Controls (20 Diplomas Dr. Portillo)
window.openCredentialsModal = function() {
    const modal = document.getElementById('credentialsModal');
    if (!modal) return;
    
    trackConversionEvent('ViewDoctorCredentials', { doctor: 'Dr. Luis Alberto Portillo' });
    
    if (lenisInstance) {
        lenisInstance.stop();
    }
    
    // Reset filter to 'all' on open
    window.filterDiplomasCategory('all');
    
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
};

window.closeCredentialsModal = function() {
    const modal = document.getElementById('credentialsModal');
    if (modal) {
        modal.classList.remove('open');
    }
    if (lenisInstance) {
        lenisInstance.start();
    }
    const symptomModal = document.getElementById('symptomDetailModal');
    if (!symptomModal || !symptomModal.classList.contains('open')) {
        document.body.style.overflow = '';
    }
};

// Filter diplomas by category interactively
window.filterDiplomasCategory = function(cat, btnEl) {
    const pills = document.querySelectorAll('.specialty-pill-btn');
    pills.forEach(btn => btn.classList.remove('active'));
    
    if (btnEl) {
        btnEl.classList.add('active');
    } else {
        const defaultBtn = document.querySelector(`.specialty-pill-btn[data-category="${cat}"]`);
        if (defaultBtn) defaultBtn.classList.add('active');
    }
    
    const entries = document.querySelectorAll('.diploma-entry');
    entries.forEach(entry => {
        const entryCat = entry.getAttribute('data-cat') || 'all';
        if (cat === 'all' || entryCat.includes(cat)) {
            entry.style.display = 'block';
        } else {
            entry.style.display = 'none';
        }
    });
    
    // Check year groups to hide empty ones
    document.querySelectorAll('.timeline-year-group').forEach(group => {
        const visibleEntries = Array.from(group.querySelectorAll('.diploma-entry')).filter(el => el.style.display !== 'none');
        group.style.display = visibleEntries.length > 0 ? 'block' : 'none';
    });
};

// Form submit handler with custom WhatsApp redirection
function initAppointmentForm() {
    const form = document.getElementById('symptomForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('form-name').value.trim();
        const phone = document.getElementById('form-phone').value.trim();
        const sede = document.getElementById('form-sede').value;
        const symptom = document.getElementById('form-symptom').value.trim();
        
        // Track Conversion Event
        const eventId = trackConversionEvent('Lead', {
            sede: sede,
            has_symptom: symptom.length > 0
        });
        
        // Build persuasive, active-voice WhatsApp message
        const messageText = `Hola Doctor Portillo, acabo de enviar mis datos en su sitio web para agendar una cita de valoración en la clínica de ${sede}.\n\n` +
                            `*Nombre:* ${name}\n` +
                            `*Teléfono:* ${phone}\n` +
                            `*Dolor o síntomas:* ${symptom}\n\n` +
                            `[ID de Conversión: ${eventId}]`;
                            
        const encodedMsg = encodeURIComponent(messageText);
        const waUrl = `https://wa.me/50322161866?text=${encodedMsg}`;
        
        // Open WhatsApp in new tab
        window.open(waUrl, '_blank');
    });
}

// Intercept Sede WhatsApp CTAs to inject dynamic tracking event_id
function initSedeConversionButtons() {
    const buttons = document.querySelectorAll('.location-wa-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const sede = this.getAttribute('data-sede');
            
            // Track Sede Click Event
            const eventId = trackConversionEvent('SedeAppointmentClick', { sede: sede });
            
            // Re-build message to include the eventId for CAPI deduplication
            const originalUrl = this.getAttribute('href');
            const waBase = originalUrl.split('?text=')[0];
            const originalText = decodeURIComponent(originalUrl.split('?text=')[1]);
            
            const newText = `${originalText}\n\n[ID de Seguimiento: ${eventId}]`;
            const finalUrl = `${waBase}?text=${encodeURIComponent(newText)}`;
            
            window.open(finalUrl, '_blank');
        });
    });
}

// Smart Device Engine (PC vs Phone / Tablet Adaptive Optimization)
function getDeviceContext() {
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || window.matchMedia('(pointer: coarse)').matches;
    const isNarrowViewport = window.innerWidth <= 768 || window.matchMedia('(max-width: 768px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = isNarrowViewport || (isTouch && window.innerWidth <= 1024);
    
    return {
        isMobile: isMobile,
        isTouch: isTouch,
        prefersReducedMotion: prefersReducedMotion,
        type: isMobile ? 'mobile' : 'desktop'
    };
}

let currentDeviceMode = null;
let mobileAnimationObserver = null;
let cards3dInitialized = false;

// Setup Mobile Mode
function setupMobileMode(device) {
    console.log("[ANIMATION MOTOR] Teléfono / Móvil activo: Modo Ligero 60fps con IntersectionObserver nativo.");
    
    // Disable Lenis if running to free CPU/memory
    if (lenisInstance) {
        try {
            lenisInstance.destroy();
        } catch (e) {}
        lenisInstance = null;
    }
    
    // Disable ScrollTrigger global tracking to save CPU and battery
    if (typeof ScrollTrigger !== 'undefined') {
        try {
            ScrollTrigger.getAll().forEach(t => t.kill());
        } catch (err) {
            console.warn("[ANIMATION MOTOR] Error killing ScrollTriggers:", err);
        }
    }
    
    // Set up CSS reveal animations via lightweight IntersectionObserver
    if (typeof IntersectionObserver !== 'undefined' && !mobileAnimationObserver) {
        mobileAnimationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('gsap-active');
                    mobileAnimationObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -30px 0px'
        });
        
        document.querySelectorAll('[animate], .service-card-premium').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(24px)';
            el.style.transition = 'opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1), transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
            el.classList.add('gsap-target');
            mobileAnimationObserver.observe(el);
        });
        
        if (!document.getElementById('mobile-gpu-styles')) {
            const styleSheet = document.createElement("style");
            styleSheet.id = 'mobile-gpu-styles';
            styleSheet.innerText = `
                .gsap-target.gsap-active {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            `;
            document.head.appendChild(styleSheet);
        }
    }
}

// Setup Desktop Mode
function setupDesktopMode(device) {
    console.log("[ANIMATION MOTOR] PC / Computadora de Escritorio activa: Lenis Smooth Scroll + GSAP Timeline + Efectos 3D.");
    
    // Initialize Lenis Scroll safely for Desktop
    if (typeof Lenis !== 'undefined' && !device.prefersReducedMotion && !lenisInstance) {
        try {
            lenisInstance = new Lenis({
                lerp: 0.09,
                wheelMultiplier: 0.7,
                smoothWheel: true,
                gestureOrientation: 'vertical'
            });
            
            if (typeof ScrollTrigger !== 'undefined') {
                lenisInstance.on('scroll', () => {
                    ScrollTrigger.update();
                });
            }
            
            if (typeof gsap !== 'undefined') {
                gsap.ticker.add((time) => {
                    if (lenisInstance) lenisInstance.raf(time * 1000);
                });
                gsap.ticker.lagSmoothing(0);
            }
        } catch (err) {
            console.warn("[ANIMATION MOTOR] Error initializing Lenis:", err);
        }
    }
    
    // Initialize clean text and element revelations using GSAP ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        try {
            const animateElements = document.querySelectorAll('[animate]');
            
            animateElements.forEach(el => {
                if (el.tagName === 'H1' || el.tagName === 'H2') {
                    gsap.fromTo(el, 
                        { opacity: 0, y: 28 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 88%",
                                toggleActions: "play none none none"
                            }
                        }
                    );
                } else {
                    gsap.fromTo(el,
                        { opacity: 0, y: 35 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.7,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 90%",
                                toggleActions: "play none none none"
                            }
                        }
                    );
                }
            });

            // Staggered entrance for services section cards
            const servicesGrid = document.querySelector('.services-grid-premium');
            if (servicesGrid) {
                const cards = servicesGrid.querySelectorAll('.service-card-premium');
                gsap.fromTo(cards,
                    { opacity: 0, y: 40, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.7,
                        ease: "power2.out",
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: servicesGrid,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            }
        } catch (err) {
            console.warn("[ANIMATION MOTOR] Error in GSAP animations:", err);
        }
    }
    
    // Interactive 3D Perspective Rotation for Cards (Desktop mouse only)
    if (!cards3dInitialized) {
        cards3dInitialized = true;
        const cards3d = document.querySelectorAll('.service-3d-card, .testimonial-3d-card, .service-card-premium');
        cards3d.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                if (currentDeviceMode === 'mobile' || getDeviceContext().isTouch) return;
                
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const xc = rect.width / 2;
                const yc = rect.height / 2;
                
                const rotateX = ((yc - y) / yc) * 8;
                const rotateY = ((x - xc) / xc) * 8;
                
                if (typeof gsap !== 'undefined') {
                    gsap.to(this, {
                        rotateX: rotateX,
                        rotateY: rotateY,
                        duration: 0.3,
                        ease: "power1.out"
                    });
                }
            });
            
            card.addEventListener('mouseleave', function() {
                if (currentDeviceMode === 'mobile' || getDeviceContext().isTouch) return;
                
                const isLeft = this.classList.contains('rotate-left');
                const isRight = this.classList.contains('rotate-right');
                const isOpposite = this.classList.contains('rotate-opposite');
                let baseRotateZ = 0;
                
                if (isLeft) baseRotateZ = -1.5;
                if (isRight) baseRotateZ = 1.5;
                if (isOpposite) baseRotateZ = -1;
                
                if (typeof gsap !== 'undefined') {
                    gsap.to(this, {
                        rotateX: 0,
                        rotateY: 0,
                        rotateZ: baseRotateZ,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                }
            });
        });
    }
}

// Master Device Mode Evaluator
function applyDeviceMode(isInitial = false) {
    const device = getDeviceContext();
    if (!isInitial && currentDeviceMode === device.type) {
        return; // No change in classification
    }
    
    currentDeviceMode = device.type;
    document.documentElement.classList.toggle('is-mobile-device', device.isMobile);
    document.documentElement.classList.toggle('is-desktop-device', !device.isMobile);
    document.documentElement.classList.toggle('is-touch-device', device.isTouch);
    
    console.log(`[DEVICE MOTOR] Modo detectado / actualizado: ${device.type.toUpperCase()} (Touch: ${device.isTouch}, Ancho: ${window.innerWidth}px)`);
    
    // Register GSAP plugins safely
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        try {
            gsap.registerPlugin(ScrollTrigger);
        } catch (err) {
            console.warn("[ANIMATION MOTOR] Error registering ScrollTrigger:", err);
        }
    }
    
    if (device.isMobile) {
        setupMobileMode(device);
    } else {
        setupDesktopMode(device);
    }
}

// Debounced viewport resize and orientation change listener
let resizeDebounceTimer = null;
function handleViewportChange() {
    clearTimeout(resizeDebounceTimer);
    resizeDebounceTimer = setTimeout(() => {
        applyDeviceMode(false);
    }, 250);
}

window.addEventListener('resize', handleViewportChange, { passive: true });
window.addEventListener('orientationchange', handleViewportChange, { passive: true });

// Network-Conscious & Accessibility-Aware Hero Video Controller
function initHeroVideo() {
    const video = document.querySelector('.hero-spine-video');
    if (!video) return;

    const device = getDeviceContext();
    
    // 1. Accessibility Check: Prefers-reduced-motion
    if (device.prefersReducedMotion) {
        console.log("[HERO VIDEO] 'prefers-reduced-motion: reduce' activo. Video pausado; mostrando póster estático.");
        video.pause();
        return;
    }

    // 2. Network Check: Data Saver & Slow Connection (2G / slow-2g)
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (conn) {
        const isDataSaver = conn.saveData === true;
        const isSlowNetwork = conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g';
        
        if (isDataSaver || isSlowNetwork) {
            console.log(`[HERO VIDEO] Red lenta o Ahorro de Datos activo (saveData: ${isDataSaver}, effectiveType: ${conn.effectiveType}). Video no precargado; mostrando póster estático.`);
            return;
        }
    }

    // 3. Normal / Fast Connection: Set preload and start playback
    try {
        video.preload = 'auto';
        video.load();
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(err => {
                console.log("[HERO VIDEO] Autoplay en espera de interacción o diferido por el navegador:", err);
            });
        }
    } catch (e) {
        console.warn("[HERO VIDEO] Error al inicializar video del hero:", e);
    }
}

// =============================================================================
// SMART FEEDBACK & REVIEW FUNNEL CONFIGURATION & CONTROLLER
// =============================================================================
// TODO: Reemplazar con el enlace real de reseñas de Google Maps de la clínica una vez recolectado
const GOOGLE_REVIEW_URL = "PLACEHOLDER_GOOGLE_REVIEW_LINK";

// TODO: Reemplazar con la URL real del webhook de n8n para registro de feedback en backend/NocoDB
const FEEDBACK_WEBHOOK_URL = "PLACEHOLDER_N8N_WEBHOOK_URL";

function openFeedbackDrawer() {
    const overlay = document.getElementById('feedbackDrawerOverlay');
    const trigger = document.getElementById('feedbackTabTrigger');
    if (overlay) {
        overlay.classList.add('active');
        overlay.setAttribute('aria-hidden', 'false');
    }
    if (trigger) {
        trigger.setAttribute('aria-expanded', 'true');
    }
    
    // Stop Lenis smooth scroll on the main page so mousewheel & trackpad scroll inside drawer
    if (lenisInstance) {
        lenisInstance.stop();
    }
    document.documentElement.classList.add('drawer-lock-scroll');
    document.body.classList.add('drawer-lock-scroll');
    document.body.style.overflow = 'hidden';
}

function closeFeedbackDrawer() {
    const overlay = document.getElementById('feedbackDrawerOverlay');
    const trigger = document.getElementById('feedbackTabTrigger');
    const drawerPanel = document.getElementById('feedbackDrawerPanel');
    if (overlay) {
        overlay.classList.remove('active');
        overlay.setAttribute('aria-hidden', 'true');
    }
    if (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
    }
    if (drawerPanel) {
        drawerPanel.classList.remove('is-form-mode', 'is-positive-mode');
    }
    
    // Reactivate Lenis smooth scroll on the main page
    if (lenisInstance) {
        lenisInstance.start();
    }
    document.documentElement.classList.remove('drawer-lock-scroll');
    document.body.classList.remove('drawer-lock-scroll');
    
    const symptomModal = document.getElementById('symptomDetailModal');
    if (!symptomModal || !symptomModal.classList.contains('active')) {
        document.body.style.overflow = '';
    }
}

function initFeedbackFunnel() {
    const tabTrigger = document.getElementById('feedbackTabTrigger');
    const overlay = document.getElementById('feedbackDrawerOverlay');
    const drawerPanel = document.getElementById('feedbackDrawerPanel');
    const closeBtn = document.getElementById('feedbackDrawerClose');
    const backdrop = document.getElementById('feedbackDrawerBackdrop');
    const emojiScale = document.getElementById('feedback-emoji-scale');

    if (tabTrigger) {
        tabTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            if (overlay && overlay.classList.contains('active')) {
                closeFeedbackDrawer();
            } else {
                openFeedbackDrawer();
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeFeedbackDrawer();
        });
    }

    if (backdrop) {
        backdrop.addEventListener('click', () => {
            closeFeedbackDrawer();
        });
    }

    if (!emojiScale) return;

    const emojiButtons = emojiScale.querySelectorAll('.feedback-emoji-btn');
    const googleNotice = document.getElementById('feedback-google-notice');
    const googleBtn = document.getElementById('feedback-google-btn');
    const formContainer = document.getElementById('feedback-form-container');
    const internalForm = document.getElementById('internalFeedbackForm');
    const thankyouState = document.getElementById('feedback-thankyou');
    const selectedLabel = document.getElementById('feedback-selected-label');
    const ratingInput = document.getElementById('feedback-rating-val');
    const labelInput = document.getElementById('feedback-label-val');

    // Emoji button click handler
    emojiButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const rating = parseInt(btn.getAttribute('data-rating'), 10);
            const label = btn.getAttribute('data-label');

            // Set active state on button
            emojiButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Hide thank-you if previously shown
            if (thankyouState) thankyouState.style.display = 'none';

            // Zero Vote Loss: Auto-register patient vote selection immediately in background
            try {
                const quickVotePayload = {
                    fecha_hora: new Date().toISOString(),
                    calificacion: label.toLowerCase(),
                    calificacion_num: rating,
                    comentario: rating >= 4 ? "(Redirigido a Google Review)" : "(Calificación registrada - En espera de comentario opcional)",
                    contacto: "No proporcionado",
                    tipo_registro: "seleccion_rapida"
                };
                if (FEEDBACK_WEBHOOK_URL && FEEDBACK_WEBHOOK_URL !== "PLACEHOLDER_N8N_WEBHOOK_URL" && FEEDBACK_WEBHOOK_URL.startsWith("http")) {
                    fetch(FEEDBACK_WEBHOOK_URL, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(quickVotePayload)
                    }).catch(() => {});
                }
            } catch (voteErr) {}

            if (rating >= 4) {
                // Happy experience (4 or 5): Funnel to Google Reviews
                if (drawerPanel) {
                    drawerPanel.classList.add('is-positive-mode');
                    drawerPanel.classList.remove('is-form-mode');
                }
                if (formContainer) formContainer.style.display = 'none';
                
                if (GOOGLE_REVIEW_URL && GOOGLE_REVIEW_URL !== "PLACEHOLDER_GOOGLE_REVIEW_LINK" && GOOGLE_REVIEW_URL.startsWith("http")) {
                    window.open(GOOGLE_REVIEW_URL, '_blank', 'noopener,noreferrer');
                }
                
                if (googleNotice) {
                    googleNotice.style.display = 'block';
                    if (googleBtn) {
                        if (GOOGLE_REVIEW_URL && GOOGLE_REVIEW_URL !== "PLACEHOLDER_GOOGLE_REVIEW_LINK") {
                            googleBtn.href = GOOGLE_REVIEW_URL;
                        } else {
                            googleBtn.href = "#";
                            googleBtn.onclick = (e) => {
                                e.preventDefault();
                                console.log("[FEEDBACK FUNNEL] Clic en botón de Google Review (URL placeholder activa: " + GOOGLE_REVIEW_URL + ")");
                            };
                        }
                    }
                }
                console.log(`[FEEDBACK FUNNEL] Calificación positiva seleccionada: ${label} (${rating}/5). Funnel a Google Reviews.`);
            } else {
                // Unsatisfied / Neutral experience (1, 2, or 3): Open ultra-compact internal feedback form
                if (drawerPanel) {
                    drawerPanel.classList.add('is-form-mode');
                    drawerPanel.classList.remove('is-positive-mode');
                }
                if (googleNotice) googleNotice.style.display = 'none';
                
                if (ratingInput) ratingInput.value = rating;
                if (labelInput) labelInput.value = label;
                if (selectedLabel) {
                    const icon = btn.querySelector('.emoji-icon')?.textContent || '';
                    selectedLabel.textContent = `${label} (${rating}/5) ${icon}`;
                }
                
                if (formContainer) {
                    formContainer.style.display = 'block';
                    const textarea = formContainer.querySelector('textarea');
                    setTimeout(() => {
                        if (textarea) {
                            textarea.focus();
                        }
                        if (drawerPanel) {
                            drawerPanel.scrollTo({ top: drawerPanel.scrollHeight, behavior: 'smooth' });
                        }
                    }, 80);
                }
                console.log(`[FEEDBACK FUNNEL] Calificación neutra/crítica seleccionada: ${label} (${rating}/5). Mostrando formulario compacto.`);
            }
        });
    });

    // Auto-scroll inside drawer when textarea is focused or typed in
    const commentField = document.getElementById('feedback-comment');
    if (commentField) {
        commentField.addEventListener('focus', () => {
            if (drawerPanel) {
                setTimeout(() => {
                    const submitBtn = document.getElementById('feedback-submit-btn');
                    if (submitBtn) {
                        submitBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                }, 150);
            }
        });
        commentField.addEventListener('input', () => {
            if (drawerPanel) {
                const submitBtn = document.getElementById('feedback-submit-btn');
                if (submitBtn) {
                    submitBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }
        });
    }

    // Form submission handler
    if (internalForm) {
        internalForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const ratingVal = ratingInput ? parseInt(ratingInput.value, 10) : 3;
            const labelVal = labelInput ? labelInput.value.toLowerCase() : "regular";
            const commentVal = document.getElementById('feedback-comment')?.value.trim() || "";

            const payload = {
                fecha_hora: new Date().toISOString(),
                calificacion: labelVal,
                calificacion_num: ratingVal,
                comentario: commentVal,
                contacto: "Usuario Anónimo",
                tipo_registro: "formulario_completo"
            };

            const submitBtn = document.getElementById('feedback-submit-btn');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span>Enviando comentario...</span>';
            }

            // POST to webhook (graceful handling for placeholder / network error)
            const postPromise = (FEEDBACK_WEBHOOK_URL && FEEDBACK_WEBHOOK_URL !== "PLACEHOLDER_N8N_WEBHOOK_URL" && FEEDBACK_WEBHOOK_URL.startsWith("http"))
                ? fetch(FEEDBACK_WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                })
                : Promise.resolve({ ok: true, placeholder: true });

            postPromise
                .then(() => {
                    console.log("[FEEDBACK WEBHOOK] Feedback registrado exitosamente:", payload);
                })
                .catch(err => {
                    console.warn("[FEEDBACK WEBHOOK] Advertencia/Error de envío (manejado elegantemente):", err);
                })
                .finally(() => {
                    // Show friendly thank-you state
                    if (formContainer) formContainer.style.display = 'none';
                    if (thankyouState) thankyouState.style.display = 'block';
                    internalForm.reset();
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = '<span>Enviar Comentario</span>';
                    }
                });
        });
    }
}

// Master Initialization on DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialise form and conversion buttons
    initAppointmentForm();
    initSedeConversionButtons();
    
    // 2. Identify Device (PC vs Mobile Phone)
    applyDeviceMode(true);

    // 3. Network-Conscious Hero Video Init
    initHeroVideo();

    // 4. Smart Feedback Funnel Init
    initFeedbackFunnel();
});

// Close modal & drawer on ESC key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSymptomModal();
        closeCredentialsModal();
        closeFeedbackDrawer();
    }
});

// Close modal when clicking outside modal window content
const modalOverlay = document.getElementById('symptomDetailModal');
if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === this) {
            closeSymptomModal();
        }
    });
}

const credentialsOverlay = document.getElementById('credentialsModal');
if (credentialsOverlay) {
    credentialsOverlay.addEventListener('click', function(e) {
        if (e.target === this) {
            closeCredentialsModal();
        }
    });
}

// Swiper Testimonials Init
document.addEventListener('DOMContentLoaded', function() {
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.testimonials-swiper', {
            loop: true,
            autoplay: {
                delay: 4500,
                disableOnInteraction: true,
            },
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.testimonials-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            }
        });

        // Guardar referencia global para pausar autoplay durante reproducción de audio
        window.testimonialsSwiper = swiper;

        // Detener audio UNICAMENTE si el usuario cambia manualmente de testimonio mientras suena un testimonio
        swiper.on('slideChange', () => {
            if (currentPlayingAudio && currentActiveAudioBtn && currentActiveAudioBtn.classList.contains('btn-audio-pill') && currentActiveAudioBtn.id !== 'btn-doctor-audio') {
                stopAllAccessibilityAudio();
            }
        });
    }
});

