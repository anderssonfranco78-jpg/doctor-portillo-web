/* ==========================================================================
   Quiroprácticos Portillo - Web Platform Interactivity
   ========================================================================== */

// Symptoms Data Repository
const symptomsData = {
    'Cuello': {
        title: 'Tratamiento de Cervicalgia',
        body: 'El Doctor Portillo utiliza ajustes de precisión en la zona cervical para liberar la tensión acumulada en el atlas y el axis, eliminando la rigidez y los mareos asociados.',
        icon: 'person_apron'
    },
    'Espalda Alta': {
        title: 'Corrección de Dorsalinas',
        body: 'Enfocamos el tratamiento en la corrección de la curva dorsal, liberando las vértebras torácicas que suelen verse afectadas por el uso excesivo de pantallas y mala postura.',
        icon: 'accessibility_new'
    },
    'Lumbares': {
        title: 'Alivio de Lumbalgia Crónica',
        body: 'Mediante técnicas de descompresión manual, liberamos la presión sobre los nervios lumbares, restaurando la movilidad total de la cadera y la espalda baja.',
        icon: 'body_system'
    },
    'Sacro': {
        title: 'Salud de la Columna Sacrolumbar',
        body: 'Nuestra prioridad es estabilizar la base de tu columna para que puedas volver a tus actividades de flexión y carga sin el temor a bloqueos o dolor agudo.',
        icon: 'directions_walk'
    },
    'Espalda Baja': {
        title: 'Salud de la Columna Lumbar',
        body: 'Nuestra prioridad es estabilizar la base de tu columna para que puedas volver a tus actividades diarias sin el temor a bloqueos o dolor agudo al agacharte.',
        icon: 'body_system'
    },
    'Cervical': {
        title: 'Cuidado del Segmento Superior',
        body: 'Ajuste de alta precisión enfocado en corregir la desalineación cervical que causa dolores irradiados hacia los hombros, rigidez crónica y dolores de cabeza recurrentes.',
        icon: 'person_apron'
    },
    'Cabeza': {
        title: 'Migrañas y Dolores Tensionales',
        body: 'Muchos dolores de cabeza nacen en la tensión cervical. Ajustamos las vértebras superiores para mejorar el flujo nervioso y reducir la frecuencia y severidad de las migrañas.',
        icon: 'psychology'
    },
    'Ciática': {
        title: 'Descompresión del Nervio Ciático',
        body: 'Tratamos la causa raíz del dolor punzante en la zona lumbosacra para eliminar el adormecimiento, hormigueo y la debilidad irradiada hacia las piernas.',
        icon: 'directions_walk'
    },
    'Hernia': {
        title: 'Gestión No Invasiva de Hernias Discales',
        body: 'Un enfoque quiropráctico de descompresión y tracción diseñado para reducir la presión intradiscal y permitir la rehidratación natural del disco afectado sin cirugía.',
        icon: 'rheumatology'
    },
    'Postura': {
        title: 'Reeducación Postural Bio-Mecánica',
        body: 'Analizamos tu cadena biomecánica completa para corregir los desbalances y vicios posturales que generan desgaste prematuro en tus articulaciones vertebrales.',
        icon: 'accessibility_new'
    }
};

// Modal Control Functions
function openModal(key) {
    const modal = document.getElementById('symptomsModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBodyText');
    const icon = document.getElementById('modalIconName');
    const waCta = document.getElementById('modalWACta');
    
    const info = symptomsData[key] || { 
        title: 'Tratamiento Especializado', 
        body: 'Contáctanos para una valoración personalizada sobre tu caso específico.',
        icon: 'health_and_safety'
    };
    
    title.innerText = info.title;
    body.innerText = info.body;
    icon.innerText = info.icon;
    
    // Update WA link with dynamic message
    const message = encodeURIComponent(`Hola Doctor Portillo, quisiera agendar una valoración sobre: ${info.title}`);
    waCta.href = `https://wa.me/50322161866?text=${message}`;
    
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    const modal = document.getElementById('symptomsModal');
    modal.classList.remove('open');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close Modal on click outside content
window.addEventListener('click', (event) => {
    const modal = document.getElementById('symptomsModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Close Modal on ESC key
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Scroll-based Navigation Spy and Header Animation
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar Shrink Effect
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    // Scroll Spy active class toggle
    let currentSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });
    
    if (currentSectionId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }
});

// Reveal Elements on Scroll using IntersectionObserver
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    
    reveals.forEach(el => {
        observer.observe(el);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    revealElements();
});

// WhatsApp Form Redirection handler
function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const messageText = document.getElementById('message').value.trim();
    
    if (!name || !phone || !messageText) {
        alert('Por favor complete todos los campos.');
        return;
    }
    
    // Build whatsapp API text
    const fullText = `Hola, mi nombre es ${name}.\nMi teléfono de contacto es: ${phone}.\nConsulta sobre dolor/síntoma: ${messageText}`;
    const encodedText = encodeURIComponent(fullText);
    
    // Open Whatsapp URL in new tab
    const waUrl = `https://wa.me/50322161866?text=${encodedText}`;
    window.open(waUrl, '_blank');
}
