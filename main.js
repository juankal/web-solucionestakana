// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('mobile-menu-btn');
    if (menu) {
        const isHidden = menu.classList.toggle('hidden');
        if (btn) {
            btn.setAttribute('aria-expanded', !isHidden);
            btn.setAttribute('aria-label', isHidden ? 'Abrir menú de navegación' : 'Cerrar menú de navegación');
        }
    }
}

function scrollToContact() {
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
}

// Particle Network Animation (Vanilla JS) — with reduced-motion support & visibility pause
const canvas = document.getElementById('neural-network');
const ctx = canvas.getContext('2d');
let width, height, particles;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initParticles();
}

function initParticles() {
    particles = [];
    const count = Math.min(50, Math.floor(width / 30));
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2
        });
    }
}

let animating = true;

function draw() {
    if (!animating) return;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#38bdf8';
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';

    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
            let p2 = particles[j];
            let dx = p.x - p2.x;
            let dy = p.y - p2.y;
            let dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {
                ctx.lineWidth = 1 - (dist / 120);
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(draw);
}

// Pause animation when tab is not visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        animating = false;
    } else if (!prefersReducedMotion) {
        animating = true;
        draw();
    }
});

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resize, 200);
}, { passive: true });

if (!prefersReducedMotion) {
    requestAnimationFrame(() => {
        resize();
        draw();
    });
} else {
    // Draw a single static frame for reduced-motion users
    requestAnimationFrame(() => {
        resize();
        animating = true;
        draw();
        animating = false;
    });
}

// Carousel Script — con dots, pausa al hover y navegacion automatica cada 5s
const slides = document.querySelectorAll('#hero-carousel .carousel-slide');
const dots = document.querySelectorAll('#carousel-dots .carousel-dot');
let currentSlide = 0;
const slideIntervalMs = 5000;
let carouselTimer = null;
const heroCarousel = document.getElementById('hero-carousel');

function updateSlide(index) {
    if (!slides || slides.length === 0) return;
    if (slides[currentSlide]) slides[currentSlide].classList.remove('active');
    if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
    currentSlide = index;
    if (slides[currentSlide]) slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function nextSlide() {
    if (!slides || slides.length === 0) return;
    updateSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
    if (!slides || slides.length === 0) return;
    updateSlide((currentSlide - 1 + slides.length) % slides.length);
    resetCarouselTimer();
}

function goToSlide(index) {
    if (!slides || slides.length === 0) return;
    updateSlide(index);
    resetCarouselTimer();
}

function startCarouselTimer() {
    if (carouselTimer) clearInterval(carouselTimer);
    carouselTimer = setInterval(nextSlide, slideIntervalMs);
}

function resetCarouselTimer() {
    if (carouselTimer) clearInterval(carouselTimer);
    startCarouselTimer();
}

startCarouselTimer();

// Pause carousel on hover
if (heroCarousel) {
    heroCarousel.addEventListener('mouseenter', () => { if (carouselTimer) clearInterval(carouselTimer); });
    heroCarousel.addEventListener('mouseleave', () => startCarouselTimer());
}

// Formulario de Contacto Handler (AJAX con Fetch)
const contactForm = document.getElementById('contacto-form');
const formContainer = document.getElementById('form-container');
const successMessage = document.getElementById('mensaje-exito');
const errorMessage = document.getElementById('mensaje-error');
const btnSubmit = document.getElementById('btn-submit');
const btnSubmitText = document.getElementById('btn-submit-text');

if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        
        // Estado de enviando
        btnSubmit.disabled = true;
        const originalText = btnSubmitText.textContent;
        btnSubmitText.textContent = 'Enviando...';
        
        const formData = new FormData(contactForm);
        
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Éxito
                formContainer.classList.add('hidden');
                successMessage.classList.remove('hidden');
                contactForm.reset();
            } else {
                // Error de respuesta
                formContainer.classList.add('hidden');
                errorMessage.classList.remove('hidden');
            }
        } catch (error) {
            // Error de red/conexión
            formContainer.classList.add('hidden');
            errorMessage.classList.remove('hidden');
        } finally {
            // Restablecer botón
            btnSubmit.disabled = false;
            btnSubmitText.textContent = originalText;
        }
    });
}

function resetearFormulario() {
    if (successMessage) successMessage.classList.add('hidden');
    if (formContainer) formContainer.classList.remove('hidden');
}

function mostrarFormulario() {
    if (errorMessage) errorMessage.classList.add('hidden');
    if (formContainer) formContainer.classList.remove('hidden');
}

// ==================== CHAT WIDGET ====================
const chatDrawer = document.getElementById('chat-drawer');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
let chatInitialized = false;

const chatFlow = {
    inicio: {
        bot: "¡Hola! Bienvenido a Soluciones Takana. Somos tu departamento de sistemas externo. ¿En qué tipo de solución estás interesado hoy?",
        options: [
            { text: "Monitoreo Zabbix 24/7", next: "zabbix" },
            { text: "Servidores & Infraestructura", next: "infraestructura" },
            { text: "Mesa de Ayuda & Activos (GLPI)", next: "glpi" },
            { text: "Diseño & Desarrollo Web", next: "web" },
            { text: "Chatbots & Automatización IA", next: "automatizacion" },
            { text: "Ver Casos de Éxito", next: "casos" }
        ]
    },
    zabbix: {
        bot: "Implementamos Monitoreo Zabbix 24/7 en tiempo real para tus servidores (Windows/Linux), switches, routers, enlaces ISP y servicios web. Es 100% Software Libre (Código Abierto), por lo que no pagas licencias por dispositivo ni agentes, con alertas inmediatas por Telegram, WhatsApp y correo.",
        options: [
            { text: "Cotizar Monitoreo Zabbix", next: "conversion_zabbix" },
            { text: "Volver al inicio", next: "inicio" }
        ]
    },
    conversion_zabbix: {
        bot: "¡Excelente decisión! Te enviaremos una propuesta personalizada de Monitoreo Zabbix 24/7 en menos de 24 horas. Puedes elegir cómo continuar para coordinar los detalles:",
        options: [
            { text: "📱 Hablar por WhatsApp", action: "whatsapp", data: "Hola, me interesa la implementación de Monitoreo Zabbix 24/7 para mi infraestructura." },
            { text: "✉️ Ir al Formulario de Contacto", action: "scroll", data: "contacto" },
            { text: "↩️ Volver al inicio", next: "inicio" }
        ]
    },
    infraestructura: {
        bot: "Ofrecemos planeamiento, gestión integral y monitoreo crítico de servidores Linux & Windows Server, soluciones cloud en Azure/AWS y vigilancia 24/7 con alertas Zabbix para asegurar la continuidad de tu negocio.",
        options: [
            { text: "Solicitar Soporte Técnico", next: "conversion_soporte" },
            { text: "Volver al inicio", next: "inicio" }
        ]
    },
    glpi: {
        bot: "Implementamos GLPI para centralizar la gestión de tus activos (computadoras, servidores, software, licencias) y automatizar el soporte técnico a tus usuarios mediante una mesa de ayuda (Ticketing) profesional y sin costes recurrentes de licencia.",
        options: [
            { text: "Cotizar Implementación GLPI", next: "conversion_glpi" },
            { text: "Volver al inicio", next: "inicio" }
        ]
    },
    conversion_glpi: {
        bot: "¡Excelente decisión! Te enviaremos una propuesta personalizada de GLPI en menos de 24 horas. Puedes elegir cómo continuar para coordinar los detalles:",
        options: [
            { text: "📱 Hablar por WhatsApp", action: "whatsapp", data: "Hola, me interesa la implementación de GLPI para mi empresa." },
            { text: "✉️ Ir al Formulario de Contacto", action: "scroll", data: "contacto" },
            { text: "↩️ Volver al inicio", next: "inicio" }
        ]
    },
    web: {
        bot: "Creamos sitios optimizados para velocidad y ventas. Desde landing pages de alta conversión, webs corporativas e informativas, hasta tiendas WooCommerce completas con pagos integrados como Yape o tarjetas. También desarrollamos menús digitales, portafolios y fondos editoriales.",
        options: [
            { text: "Cotizar Página Web", next: "conversion_web" },
            { text: "Volver al inicio", next: "inicio" }
        ]
    },
    automatizacion: {
        bot: "Automatizamos tu atención al cliente con agentes inteligentes disponibles 24/7 y conectamos tus aplicaciones del día a día (CRM, Email, Excel) para eliminar por completo las tareas repetitivas.",
        options: [
            { text: "Implementar IA en mi negocio", next: "conversion_ia" },
            { text: "Volver al inicio", next: "inicio" }
        ]
    },
    casos: {
        bot: "Algunos de nuestros proyectos reales incluyen: Fixing Up Consulting (web corporativa de consultoría), Home Ideas Perú (e-commerce de diseño de interiores) y Jorge Muro (portafolio profesional digital).",
        options: [
            { text: "Iniciar un proyecto similar", next: "conversion_proyecto" },
            { text: "Volver al inicio", next: "inicio" }
        ]
    },
    conversion_soporte: {
        bot: "¡Excelente decisión! Te enviaremos una propuesta personalizada en menos de 24 horas. Puedes elegir cómo continuar para coordinar los detalles:",
        options: [
            { text: "📱 Hablar por WhatsApp", action: "whatsapp", data: "Hola, me interesa solicitar Soporte Técnico e Infraestructura." },
            { text: "✉️ Ir al Formulario de Contacto", action: "scroll", data: "contacto" },
            { text: "↩️ Volver al inicio", next: "inicio" }
        ]
    },
    conversion_web: {
        bot: "¡Excelente decisión! Te enviaremos una propuesta personalizada en menos de 24 horas. Puedes elegir cómo continuar para coordinar los detalles:",
        options: [
            { text: "📱 Hablar por WhatsApp", action: "whatsapp", data: "Hola, me interesa cotizar una Página Web." },
            { text: "✉️ Ir al Formulario de Contacto", action: "scroll", data: "contacto" },
            { text: "↩️ Volver al inicio", next: "inicio" }
        ]
    },
    conversion_ia: {
        bot: "¡Excelente decisión! Te enviaremos una propuesta personalizada en menos de 24 horas. Puedes elegir cómo continuar para coordinar los detalles:",
        options: [
            { text: "📱 Hablar por WhatsApp", action: "whatsapp", data: "Hola, me interesa implementar IA y Chatbots en mi negocio." },
            { text: "✉️ Ir al Formulario de Contacto", action: "scroll", data: "contacto" },
            { text: "↩️ Volver al inicio", next: "inicio" }
        ]
    },
    conversion_proyecto: {
        bot: "¡Excelente decisión! Te enviaremos una propuesta personalizada en menos de 24 horas. Puedes elegir cómo continuar para coordinar los detalles:",
        options: [
            { text: "📱 Hablar por WhatsApp", action: "whatsapp", data: "Hola, me interesa iniciar un proyecto similar a sus casos de éxito." },
            { text: "✉️ Ir al Formulario de Contacto", action: "scroll", data: "contacto" },
            { text: "↩️ Volver al inicio", next: "inicio" }
        ]
    }
};

let bubbleDismissed = false;

function toggleChatWidget() {
    if (!chatDrawer) return;
    const isHidden = chatDrawer.classList.contains('hidden');
    chatDrawer.classList.toggle('hidden');
    
    if (isHidden) {
        dismissWelcomeBubble();
    }
    
    if (isHidden && !chatInitialized) {
        goToState("inicio");
        chatInitialized = true;
    }
    
    if (isHidden && chatInput) {
        setTimeout(() => chatInput.focus(), 300);
    }
}

function dismissWelcomeBubble() {
    const bubble = document.getElementById('chat-welcome-bubble');
    if (bubble && !bubbleDismissed) {
        bubble.classList.remove('opacity-100', 'translate-y-0');
        bubble.classList.add('opacity-0', 'translate-y-2');
        bubbleDismissed = true;
        setTimeout(() => {
            bubble.classList.add('hidden');
        }, 500);
    }
}

// Mostrar la nube de bienvenida después de 4 segundos
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const bubble = document.getElementById('chat-welcome-bubble');
        const drawer = document.getElementById('chat-drawer');
        if (bubble && drawer && drawer.classList.contains('hidden') && !bubbleDismissed) {
            bubble.classList.remove('hidden');
            // Retraso mínimo para permitir que la transición CSS de opacidad funcione
            setTimeout(() => {
                bubble.classList.remove('opacity-0', 'translate-y-2');
                bubble.classList.add('opacity-100', 'translate-y-0');
            }, 50);
        }
    }, 4000);
});

function showTypingIndicator() {
    if (!chatMessages) return;
    const div = document.createElement('div');
    div.id = 'chat-typing';
    div.className = 'chat-bubble-bot italic text-slate-400';
    div.textContent = 'Escribiendo...';
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
    const indicator = document.getElementById('chat-typing');
    if (indicator) {
        indicator.remove();
    }
}

function goToState(stateKey) {
    const state = chatFlow[stateKey];
    if (!state) return;
    
    removeActiveOptions();
    showTypingIndicator();
    
    setTimeout(() => {
        removeTypingIndicator();
        addBotMessage(state.bot);
        if (state.options && state.options.length > 0) {
            renderOptions(state.options);
        }
    }, 400);
}

function addBotMessage(text) {
    if (!chatMessages) return;
    const div = document.createElement('div');
    div.className = 'chat-bubble-bot';
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addUserMessage(text) {
    if (!chatMessages) return;
    const div = document.createElement('div');
    div.className = 'chat-bubble-user';
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeActiveOptions() {
    const activeOptions = document.getElementById('active-options');
    if (activeOptions) {
        activeOptions.remove();
    }
}

function renderOptions(options) {
    if (!chatMessages) return;
    const container = document.createElement('div');
    container.id = 'active-options';
    container.className = 'flex flex-col gap-2 mt-2 max-w-[85%]';
    
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'w-full text-left px-3 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500 rounded-lg text-xs text-cyan-300 font-semibold transition-all cursor-pointer';
        btn.textContent = opt.text;
        
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addUserMessage(opt.text);
            removeActiveOptions();
            
            if (opt.next) {
                goToState(opt.next);
            } else if (opt.action === 'whatsapp') {
                showTypingIndicator();
                setTimeout(() => {
                    removeTypingIndicator();
                    addBotMessage("Te estamos redirigiendo a WhatsApp para iniciar tu consulta...");
                    setTimeout(() => {
                        window.open('https://wa.me/51919071709?text=' + encodeURIComponent(opt.data), '_blank');
                    }, 500);
                }, 400);
            } else if (opt.action === 'scroll') {
                showTypingIndicator();
                setTimeout(() => {
                    removeTypingIndicator();
                    addBotMessage("Desplazándote al formulario de contacto...");
                    setTimeout(() => {
                        toggleChatWidget();
                        const target = document.getElementById(opt.data);
                        if (target) {
                            target.scrollIntoView({ behavior: 'smooth' });
                        }
                    }, 500);
                }, 400);
            }
        });
        
        container.appendChild(btn);
    });
    
    chatMessages.appendChild(container);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleChatSubmit(e) {
    e.preventDefault();
    if (!chatInput) return;
    const text = chatInput.value.trim();
    if (!text) return;
    
    addUserMessage(text);
    chatInput.value = '';
    
    removeActiveOptions();
    showTypingIndicator();
    
    setTimeout(() => {
        removeTypingIndicator();
        
        const lowerText = text.toLowerCase();
        if (lowerText.includes('servidor') || lowerText.includes('infraestructura') || lowerText.includes('ti') || lowerText.includes('zabbix') || lowerText.includes('soporte')) {
            goToState('infraestructura');
        } else if (lowerText.includes('glpi') || lowerText.includes('mesa') || lowerText.includes('ticket') || lowerText.includes('inventario') || lowerText.includes('activo')) {
            goToState('glpi');
        } else if (lowerText.includes('web') || lowerText.includes('diseño') || lowerText.includes('página') || lowerText.includes('pagina') || lowerText.includes('tienda') || lowerText.includes('ecommerce')) {
            goToState('web');
        } else if (lowerText.includes('ia') || lowerText.includes('chatbot') || lowerText.includes('bot') || lowerText.includes('automatiza')) {
            goToState('automatizacion');
        } else if (lowerText.includes('caso') || lowerText.includes('exito') || lowerText.includes('proyecto') || lowerText.includes('portfolio') || lowerText.includes('portafolio')) {
            goToState('casos');
        } else {
            addBotMessage("Entendido. Para ayudarte mejor, por favor selecciona una de las siguientes opciones:");
            renderOptions(chatFlow.inicio.options);
        }
    }, 400);
}

// Bind to window to allow HTML onsubmit / onclick attributes to resolve properly
window.toggleChatWidget = toggleChatWidget;
window.handleChatSubmit = handleChatSubmit;
window.resetearFormulario = resetearFormulario;
window.mostrarFormulario = mostrarFormulario;
window.dismissWelcomeBubble = dismissWelcomeBubble;
window.goToSlide = goToSlide;

// Close chat drawer when clicking outside
document.addEventListener('click', function(e) {
    if (!chatDrawer || chatDrawer.classList.contains('hidden')) return;
    const btn = document.getElementById('chat-widget-btn');
    if (!chatDrawer.contains(e.target) && !btn.contains(e.target)) {
        chatDrawer.classList.add('hidden');
    }
});

// ==================== NAV SCROLL EFFECT ====================
const navElement = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navElement.classList.add('nav-scrolled');
    } else {
        navElement.classList.remove('nav-scrolled');
    }
}, { passive: true });

// ==================== MOBILE MENU AUTO-CLOSE ON SCROLL ====================
window.addEventListener('scroll', () => {
    const menu = document.getElementById('mobile-menu');
    if (menu && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
    }
}, { passive: true });

// ==================== SCROLL REVEAL ANIMATIONS ====================
document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const revealTargets = document.querySelectorAll(
        '.glass-card, .portfolio-card, .testimonial-card, .web-type-card'
    );

    revealTargets.forEach(el => {
        el.classList.add('reveal');
    });

    // Calculate stagger delays based on position within parent grid
    revealTargets.forEach(el => {
        const parent = el.parentElement;
        const siblings = Array.from(parent.children).filter(c => c.classList.contains('reveal'));
        const index = siblings.indexOf(el);
        el.style.transitionDelay = `${index * 0.1}s`;
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach(el => revealObserver.observe(el));
});

// ==================== ZABBIX CAROUSEL SLIDER ====================
let zabbixCurrentSlide = 0;
let zabbixTimer = null;
const zabbixSlideIntervalMs = 6000;

function updateZabbixSlide(index) {
    const zSlides = document.querySelectorAll('.zabbix-slide');
    const zDots = document.querySelectorAll('.zabbix-dot');
    if (!zSlides || zSlides.length === 0) return;

    zSlides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active', 'opacity-100');
            slide.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            slide.classList.remove('active', 'opacity-100');
            slide.classList.add('opacity-0', 'pointer-events-none');
        }
    });

    zDots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('bg-red-600', 'text-white');
            dot.classList.remove('bg-slate-800', 'text-slate-400');
        } else {
            dot.classList.remove('bg-red-600', 'text-white');
            dot.classList.add('bg-slate-800', 'text-slate-400');
        }
    });

    zabbixCurrentSlide = index;
}

function nextZabbixSlide() {
    const zSlides = document.querySelectorAll('.zabbix-slide');
    if (!zSlides || zSlides.length === 0) return;
    updateZabbixSlide((zabbixCurrentSlide + 1) % zSlides.length);
}

function prevZabbixSlide() {
    const zSlides = document.querySelectorAll('.zabbix-slide');
    if (!zSlides || zSlides.length === 0) return;
    updateZabbixSlide((zabbixCurrentSlide - 1 + zSlides.length) % zSlides.length);
}

function setZabbixSlide(index) {
    updateZabbixSlide(index);
    resetZabbixTimer();
}

function startZabbixTimer() {
    if (zabbixTimer) clearInterval(zabbixTimer);
    zabbixTimer = setInterval(nextZabbixSlide, zabbixSlideIntervalMs);
}

function resetZabbixTimer() {
    if (zabbixTimer) clearInterval(zabbixTimer);
    startZabbixTimer();
}

document.addEventListener('DOMContentLoaded', () => {
    startZabbixTimer();
    const zContainer = document.getElementById('zabbix-carousel');
    if (zContainer) {
        zContainer.addEventListener('mouseenter', () => { if (zabbixTimer) clearInterval(zabbixTimer); });
        zContainer.addEventListener('mouseleave', () => startZabbixTimer());
    }
});



