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

// Master Initialization on DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialise form and conversion buttons
    initAppointmentForm();
    initSedeConversionButtons();
    
    // 2. Dual Animation Engine (Desktop vs Mobile Bypass)
    const isMobile = window.innerWidth <= 766;
    
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    if (isMobile) {
        console.log("[ANIMATION MOTOR] Mobile mode active. Initialising lightweight IntersectionObserver bypass (60fps target).");
        
        // Disable ScrollTrigger global tracking to save CPU and battery
        ScrollTrigger.getAll().forEach(t => t.kill());
        
        // Set up CSS reveal animations via lightweight IntersectionObserver
        const mobileAnimationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Inject active state using CSS animation instead of complex JS interpolation loops
                    entry.target.classList.add('gsap-active');
                    mobileAnimationObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // Trigger animation when 10% of element is in view
            rootMargin: '0px 0px -40px 0px'
        });
        
        // Query elements with animate attributes and service cards
        document.querySelectorAll('[animate], .service-card-premium').forEach(el => {
            // Apply lightweight transition presets directly via CSS variables and GPU transitions
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
            
            // Add utility class for easy CSS target override
            el.classList.add('gsap-target');
            
            mobileAnimationObserver.observe(el);
        });
        
        // Create active state style element dynamically for mobile GPU animations
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            .gsap-target.gsap-active {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(styleSheet);
        
    } else {
        console.log("[ANIMATION MOTOR] Desktop mode active. Initialising Lenis JS + GSAP ScrollTrigger timeline.");
        
        // Initialize Lenis Scroll
        lenisInstance = new Lenis({
            lerp: 0.09,
            wheelMultiplier: 0.7,
            smoothWheel: true,
            gestureOrientation: 'vertical'
        });
        
        // Squeeze ScrollTrigger refresh onto Lenis events
        lenisInstance.on('scroll', () => {
            ScrollTrigger.update();
        });
        
        // Merge Lenis scroll events directly with GSAP global ticker
        gsap.ticker.add((time) => {
            lenisInstance.raf(time * 1000);
        });
        
        // Lag smoothing configuration to avoid timeline jumping
        gsap.ticker.lagSmoothing(0);
        
        // Initialize text revelations using SplitType and GSAP ScrollTrigger
        const animateElements = document.querySelectorAll('[animate]');
        
        animateElements.forEach(el => {
            // Only apply SplitType to elements containing large text headers or subtext blocks
            if (el.tagName === 'H1' || el.tagName === 'H2' || el.classList.contains('hero-subtext')) {
                const text = new SplitType(el, { types: 'lines, words' });
                
                // Hide characters initially
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
            } else {
                // Block element reveal (Hero actions, stats, cards)
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
        
        // Interactive 3D Perspective Rotation for Cards
        const cards3d = document.querySelectorAll('.service-3d-card, .testimonial-3d-card, .service-card-premium');
        cards3d.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const xc = rect.width / 2;
                const yc = rect.height / 2;
                
                // Calculate rotation degree (max 8 deg for subtle premium feel)
                const rotateX = ((yc - y) / yc) * 8;
                const rotateY = ((x - xc) / xc) * 8;
                
                gsap.to(this, {
                    rotateX: rotateX,
                    rotateY: rotateY,
                    duration: 0.3,
                    ease: "power1.out"
                });
            });
            
            card.addEventListener('mouseleave', function() {
                // Return to base rotation state
                const isLeft = this.classList.contains('rotate-left');
                const isRight = this.classList.contains('rotate-right');
                const isOpposite = this.classList.contains('rotate-opposite');
                let baseRotateZ = 0;
                
                if (isLeft) baseRotateZ = -1.5;
                if (isRight) baseRotateZ = 1.5;
                if (isOpposite) baseRotateZ = -1; // Testimonial rotate offset
                
                gsap.to(this, {
                    rotateX: 0,
                    rotateY: 0,
                    rotateZ: baseRotateZ,
                    duration: 0.5,
                    ease: "power2.out"
                });
            });
        });
    }
});

// Close modal on ESC key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSymptomModal();
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
