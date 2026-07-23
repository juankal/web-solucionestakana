/**
 * Catálogo Oficial de Productos y Servicios - Soluciones Takana
 * Sincronizado con Meta Business Manager Catalog (item_group_id) y Schema.org
 */
const TAKANA_PRODUCTS = [
    {
        id: "TAKANA-AI-01",
        slug: "agente-ventas-ia",
        name: "Agente de Ventas con IA para WhatsApp e Instagram",
        shortDescription: "Atiende, recomienda productos y cierra ventas 24/7 en WhatsApp e Instagram en piloto automático.",
        description: "Revoluciona tu proceso comercial con un Agente de Ventas entrenado con Inteligencia Artificial. Responde consultas en milisegundos, califica prospectos, recomienda productos del catálogo y concreta ventas directamente en WhatsApp Business e Instagram Direct sin intervención humana.",
        price: 2990.00,
        currency: "PEN",
        availability: "in stock",
        schemaAvailability: "https://schema.org/InStock",
        category: "Servicios TI",
        image: "https://solucionestakana.space/images/ai-sales-agent.png",
        url: "https://solucionestakana.space/productos/agente-ventas-ia.html",
        badge: "Servicio Estrella",
        badgeColor: "purple",
        features: [
            "Atención y respuestas inmediatas las 24 horas del día",
            "Integración nativa con WhatsApp Business API e Instagram Direct",
            "Cierre de ventas autónomo y captación de Leads calificados",
            "Catálogo dinámico de productos e imágenes incorporado",
            "Conexión directa con CRM, Google Sheets y sistemas de pago",
            "Soporte técnico y reentrenamiento mensual del modelo de IA"
        ]
    },
    {
        id: "TAKANA-ZABBIX-01",
        slug: "monitoreo-zabbix-247",
        name: "Monitoreo TI Proactivo con Zabbix",
        shortDescription: "Supervisión en tiempo real de infraestructura, servidores y redes con alertas instantáneas.",
        description: "Implementación integral de Monitoreo Zabbix 24/7 para tu empresa. Vigilamos continuamente servidores Windows/Linux, switches, routers, enlaces ISP y servicios web. Alertas inmediatas a Telegram, WhatsApp y correo ante caídas o anomalías de rendimiento.",
        price: 3990.00,
        currency: "PEN",
        availability: "in stock",
        schemaAvailability: "https://schema.org/InStock",
        category: "Monitoreo",
        image: "https://solucionestakana.space/images/zabbix-hero-showcase.png",
        url: "https://solucionestakana.space/productos/monitoreo-zabbix-247.html",
        badge: "100% Software Libre",
        badgeColor: "red",
        features: [
            "Sin cobros por licencias ni límites de equipos monitoreados",
            "Alertas en tiempo real vía WhatsApp, Telegram y Correo Electrónico",
            "Dashboard personalizable optimizado para pantallas NOC",
            "Monitoreo de CPU, RAM, Disco, Ancho de Banda y Latencia de Red",
            "Reportes ejecutivos semanales y mensuales de disponibilidad (Uptime)",
            "Soporte, actualización y mantenimiento continuo del servidor Zabbix"
        ]
    },
    {
        id: "TAKANA-GLPI-01",
        slug: "glpi-itsm-mesa-de-ayuda",
        name: "Mesa de Ayuda y Gestión de Activos (GLPI ITSM)",
        shortDescription: "Gestión de activos de TI, tickets de soporte e inventarios centralizados sin costo de licencias.",
        description: "Plataforma profesional GLPI ITSM para la gestión integral de tecnología empresarial. Centraliza el registro de tickets de soporte, inventario automatizado de computadoras, impresoras, servidores, licencias y mantenimientos preventivos.",
        price: 3250.00,
        currency: "PEN",
        availability: "in stock",
        schemaAvailability: "https://schema.org/InStock",
        category: "Servicios TI",
        image: "https://solucionestakana.space/images/glpi-hero-showcase.png",
        url: "https://solucionestakana.space/productos/glpi-itsm-mesa-de-ayuda.html",
        badge: "Gestión ITAM / ITSM",
        badgeColor: "cyan",
        features: [
            "Mesa de Ayuda (Help Desk) con gestión estructurada de Tickets",
            "Inventario automatizado de Hardware y Software con agentes FusionInventory",
            "Seguimiento de garantías, contratos, licencias y consumibles",
            "Portal de autoservicio web para solicitudes de usuarios",
            "Métricas y reportes de cumplimiento de SLA y tiempos de solución",
            "Despliegue en servidores locales o en la nube sin licencias recurrentes"
        ]
    },
    {
        id: "TAKANA-WEB-ECOMMERCE",
        slug: "desarrollo-web-ecommerce",
        name: "Desarrollo de Tienda Online E-Commerce",
        shortDescription: "Tienda virtual optimizada con pasarelas de pago, catálogo dinámico y dos planes a medida (Básica y Premium).",
        description: "Desarrollo de tienda virtual e-commerce sobre WordPress y WooCommerce. Elige entre el Plan Básica (pasarelas de pago online, Yape/Plin y pedido rápido a WhatsApp) o el Plan Premium (pasarelas avanzadas, Meta Pixel CAPI, GA4 y catálogo ilimitado).",
        price: 1250.00,
        currency: "PEN",
        availability: "in stock",
        schemaAvailability: "https://schema.org/InStock",
        category: "Tienda Online",
        image: "https://solucionestakana.space/images/web-hero-showcase.png",
        url: "https://solucionestakana.space/productos/desarrollo-web-ecommerce.html",
        badge: "Solución Integrada",
        badgeColor: "emerald",
        hasVariants: true,
        variants: [
            {
                id: "TAKANA-WEB-BASICA",
                itemGroupId: "TAKANA-WEB-ECOMMERCE",
                name: "Tienda Online Ecommerce Básica",
                price: 1250.00,
                image: "https://solucionestakana.space/images/web-basic-showcase.png",
                description: "Tienda virtual profesional desarrollada en WordPress + WooCommerce. Incluye catálogo de productos, pasarelas de pago online (Visa, Mastercard, Yape, Plin), botón a WhatsApp y diseño responsive.",
                features: [
                    "Desarrollado 100% sobre WordPress y WooCommerce",
                    "Pasarelas de pago online (Visa, Mastercard, Yape, Plin, Izipay/Culqi)",
                    "Catálogo de productos optimizado hasta 50 ítems pre-cargados",
                    "Botón directo de envío de pedidos a WhatsApp Business",
                    "Diseño responsive adaptado a celulares y tablets",
                    "Certificado SSL de seguridad y capacitación de uso incluida"
                ]
            },
            {
                id: "TAKANA-WEB-PREMIUM",
                itemGroupId: "TAKANA-WEB-ECOMMERCE",
                name: "Tienda Online Ecommerce Premium",
                price: 2990.00,
                description: "Tienda virtual completa desarrollada en WordPress + WooCommerce. Incluye catálogo ilimitado, pasarelas de pago avanzadas, Meta Pixel (CAPI), Google Analytics 4 y diseño exclusivo.",
                features: [
                    "Desarrollo exclusivo sobre WordPress + WooCommerce Avanzado",
                    "Pasarelas de pago electrónicas (Izipay, Culqi, Mercado Pago, Yape/Plin)",
                    "Catálogo ilimitado de productos con atributos y variaciones",
                    "Integración nativa con Meta Pixel (CAPI), Facebook/Instagram Shop y GA4",
                    "Dominio corporativo por 1 año y certificado SSL",
                    "Panel administrativo autogestionable y soporte prioritario"
                ]
            }
        ]
    },
    {
        id: "TAKANA-WEB-INFO",
        slug: "pagina-web-informativa",
        name: "Página Web Informativa",
        shortDescription: "Sitio web corporativo e institucional ultrarrápido, optimizado para posicionamiento en Google.",
        description: "Diseño y desarrollo de sitio web corporativo para empresas y profesionales. Transmite confianza, destaca tus servicios e integra formulario de contacto y botón directo a WhatsApp.",
        price: 650.00,
        currency: "PEN",
        availability: "in stock",
        schemaAvailability: "https://schema.org/InStock",
        category: "Página Web",
        image: "https://solucionestakana.space/images/web-info-showcase.png",
        url: "https://solucionestakana.space/productos/pagina-web-informativa.html",
        badge: "Presencia Digital",
        badgeColor: "teal",
        features: [
            "Diseño moderno y elegante adaptado a la identidad de tu marca",
            "Carga ultrarrápida optimizada para computadoras y móviles",
            "Secciones institucionales: Inicio, Nosotros, Servicios y Contacto",
            "Formulario de contacto conectado con tu correo empresarial",
            "Optimización SEO inicial para aparecer en búsquedas de Google",
            "Integración de botón flotante de atención vía WhatsApp"
        ]
    },
    {
        id: "TAKANA-SOPORTE-01",
        slug: "soporte-ti-servidores",
        name: "Soporte TI Presencial/Remoto & Gestión de Servidores",
        shortDescription: "Departamento de sistemas externo. Mantenimiento técnico, Active Directory y servidores Linux/Windows.",
        description: "Servicio integral de soporte técnico y administración de infraestructura TI para empresas. Gestionamos tu parque informático, servidores Windows Server, distribuciones Linux, virtualización y respaldos corporativos.",
        price: 300.00,
        currency: "PEN",
        availability: "in stock",
        schemaAvailability: "https://schema.org/InStock",
        category: "Servicios TI",
        image: "https://solucionestakana.space/images/servers.webp",
        url: "https://solucionestakana.space/productos/soporte-ti-servidores.html",
        badge: "Soporte Proactivo",
        badgeColor: "orange",
        features: [
            "Atención técnica remota inmediata e intervenciones presenciales en Tacna",
            "Administración de Windows Server, Active Directory, GPO y DNS",
            "Gestión experta de servidores Linux (Ubuntu, Debian, AlmaLinux, Rocky)",
            "Políticas de respaldo automático (Backups 3-2-1 locales y en nube)",
            "Mantenimiento preventivo y optimización de computadoras de trabajo",
            "Seguridad de red, antivirus corporativo y configuración de Firewalls"
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TAKANA_PRODUCTS };
}
