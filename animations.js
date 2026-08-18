/* ==========================================================================
   Quiroprácticos Portillo - Premium Animation and Conversion Core
   ========================================================================== */

// Symptoms and Treatments Data Repository
const symptomsRepository = {
    'Cervical': {
        title: 'Ajuste Cervical Científico',
        body: 'Ajustes quiroprácticos cervicales de precisión para corregir desviaciones del atlas y axis. Libera la presión nerviosa que provoca rigidez extrema, dolores irradiados hacia hombros, mareos y migrañas de origen tensional.',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa una consulta para valoración quiropráctica de Cervicalgia y Rigidez.'
    },
    'Dorsal': {
        title: 'Corrección de Vértebras Torácicas',
        body: 'Ajustes específicos en la espalda alta para restaurar la movilidad de las costillas y vértebras dorsales. Libera la tensión provocada por malos hábitos posturales y evita inflamaciones de órganos internos.',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa una consulta para valoración de dolor en la Espalda Alta o Dorsal.'
    },
    'Lumbar': {
        title: 'Descompresión Lumbar Médica',
        body: 'Manipulación y descompresión quiropráctica de la espalda baja. Alivia el pinzamiento de los nervios lumbares causados por hernias discales o subluxaciones, devolviendo la movilidad para agacharse y cargar peso.',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa una consulta para valoración de Lumbalgia Crónica.'
    },
    'Sacro': {
        title: 'Estabilización Sacrolumbar',
        body: 'Corrección física de la base de la columna y el sacro. Restaura la alineación del centro de gravedad del cuerpo, aliviando dolores lumbosacros que dificultan caminar o mantenerse de pie.',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa una consulta para valoración de dolor Lumbosacro o Cadera.'
    },
    'Ciática': {
        title: 'Tratamiento del Nervio Ciático',
        body: 'Enfoque no invasivo para liberar la raíz comprimida del nervio ciático en la zona lumbosacra. Alivia el dolor quemante, el entumecimiento y la debilidad motora irradiada a lo largo de las piernas.',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa una consulta para descompresión de Nervio Ciático.'
    },
    'Artrosis': {
        title: 'Homeocinetría y Nutrición Ósea',
        body: 'Infiltración articular de acupuntura combinada con medicamentos homeopáticos específicos. Resultados espontáneos de un día para otro para desinflamar rodillas. Acompañado de programas nutricionales para detener el desgaste óseo.',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa una consulta sobre Homeocinetría e infiltraciones para articulaciones.'
    },
    'AjusteQuiro': {
        title: 'Ajuste Quiropráctico de Precisión',
        body: 'Alineación física y manual de las vértebras desviadas para restaurar la función de las articulaciones de la columna vertebral y aliviar la presión sobre los nervios espinales. Corrige subluxaciones mecánicas.',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa agendar una consulta para un Ajuste Quiropráctico.'
    },
    'TerapiaColumna': {
        title: 'Terapia Descompresiva de Columna',
        body: 'Tratamiento enfocado en la descompresión discal y articular de la columna cervical, torácica y lumbar. Ideal para reducir la presión en hernias, protusiones y desgaste prematuro de discos.',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa agendar una cita para Terapia de Columna.'
    },
    'MasajeTera': {
        title: 'Masaje Terapéutico y Neuromuscular',
        body: 'Terapia de tejidos blandos orientada a aliviar espasmos musculares severos, reducir la sobrecarga de la espalda y hombros, y mejorar el flujo sanguíneo y linfático en zonas contracturadas.',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa una consulta para Masaje Terapéutico.'
    },
    'RehabPostural': {
        title: 'Rehabilitación Postural y Biomecánica',
        body: 'Programa personalizado de ejercicios y correcciones posturales para estabilizar la columna, fortalecer los músculos de soporte y evitar la recurrencia de dolores por malos hábitos en el trabajo o pantallas.',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa información sobre la Rehabilitación Postural.'
    },
    'DolorCronico': {
        title: 'Tratamiento Especializado de Dolor Crónico',
        body: 'Protocolo médico no invasivo diseñado para pacientes con dolores persistentes de espalda, ciática severa, dolores articulares y migrañas que no han respondido a tratamientos tradicionales.',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa el Tratamiento de Dolor Crónico.'
    },
    'MedDeportiva': {
        title: 'Medicina y Quiropráctica Deportiva',
        body: 'Atención dirigida a atletas y personas activas. Enfocado en la optimización de las articulaciones, prevención de lesiones repetitivas, y aceleración de la recuperación tras esguinces, tirones y contracturas.',
        waText: 'Hola Dr. Portillo, vi su sitio web y me interesa agendar una cita de Medicina Deportiva.'
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

// Modal Control Functions
window.openSymptomModal = function(key) {
    const modal = document.getElementById('symptomDetailModal');
    const titleEl = document.getElementById('modal-window-title');
    const bodyEl = document.getElementById('modal-window-body');
    const waCta = document.getElementById('modal-wa-cta-btn');
    
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
    const modal = document.getElementById('symptomDetailModal');
    modal.classList.remove('open');
    
    // Reactivate Lenis scroll
    if (lenisInstance) {
        lenisInstance.start();
    }
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
    
    // Initialize text revelations using SplitType and GSAP ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        try {
            const animateElements = document.querySelectorAll('[animate]');
            
            animateElements.forEach(el => {
                if ((el.tagName === 'H1' || el.tagName === 'H2' || el.classList.contains('hero-subtext')) && typeof SplitType !== 'undefined' && !device.prefersReducedMotion) {
                    try {
                        const text = new SplitType(el, { types: 'lines, words' });
                        
                        gsap.set(text.words, {
                            opacity: 0,
                            y: 20
                        });
                        
                        gsap.to(text.words, {
                            opacity: 1,
                            y: 0,
                            duration: 0.5,
                            ease: "power1.out",
                            stagger: 0.02,
                            scrollTrigger: {
                                trigger: el,
                                start: "top 85%",
                                toggleActions: "play none none none"
                            }
                        });
                    } catch (stErr) {
                        gsap.set(el, { opacity: 0, y: 30 });
                        gsap.to(el, { opacity: 1, y: 0, duration: 0.6 });
                    }
                } else {
                    gsap.set(el, {
                        opacity: 0,
                        y: 40
                    });
                    
                    gsap.to(el, {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 88%",
                            toggleActions: "play none none none"
                        }
                    });
                }
            });

            // Staggered entrance for services section cards
            const servicesGrid = document.querySelector('.services-grid-premium');
            if (servicesGrid) {
                const cards = servicesGrid.querySelectorAll('.service-card-premium');
                gsap.set(cards, {
                    opacity: 0,
                    y: 50,
                    scale: 0.9,
                    rotation: -2
                });
                
                gsap.to(cards, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotation: 0,
                    duration: 0.8,
                    ease: "back.out(1.2)",
                    stagger: 0.12,
                    scrollTrigger: {
                        trigger: servicesGrid,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
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

// Swiper Testimonials Init
document.addEventListener('DOMContentLoaded', function() {
    if (typeof Swiper !== 'undefined') {
        new Swiper('.testimonials-swiper', {
            loop: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
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
    }
});
