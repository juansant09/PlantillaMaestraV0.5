export const CLINICA = {
    nombre: 'Clínica Vitalis',
    marcaCorta: 'Vitalis',
    ciudad: 'Lucena',
    region: 'Córdoba',
    pais: 'España',
    slogan: 'La belleza también es ciencia.',
    descripcion:
        'Servicio profesional y tratamientos avanzados que combinan tecnología de precisión con calidez humana para acompañarte en cada etapa de tu bienestar.',
    descripcionLarga:
        'En Clínica Vitalis nos especializamos en medicina estética, bienestar preventivo y programas integrales que conectan ciencia, tecnología y cercanía humana.',
    telefono: '+34 600 000 000',
    whatsapp: 'https://wa.me/34600000000',
    email: 'hola@clinicavitalis.com',
    servicios: [
        'Medicina estética facial',
        'Depilación láser',
        'Nutrición avanzada',
        'Tratamientos corporales',
    ],
    direccion: 'Avenida del Parque 18, Lucena, Córdoba, España',
    horarios: {
        semana: 'Lunes a viernes · 09:00 - 19:00 h',
        sabado: 'Sábados · 09:00 - 14:00 h',
        especial: 'Atención personalizada con reserva previa',
    },
    redes: {
        instagram: 'https://www.instagram.com/clinicavitalis',
        facebook: 'https://www.facebook.com/clinicavitalis',
        linkedin: 'https://www.linkedin.com/company/clinicavitalis',
        twitter: 'https://twitter.com/clinicavitalis',
    },
    colores: {
        primario: '#c6a664',
        secundario: '#111111',
        fondo: '#f9f9f9',
    },
    imagenes: {
        logo: '/images/logo-header.svg',
        logoFooter: '/images/logo-footer.svg',
        loader: '/images/loader.gif',
        heroHome: '/images/clinica-vitalis-hero-equipo.webp',
        heroSupport: '/images/clinica-vitalis-atencion-personalizada.webp',
        heroHighlight: '/images/clinica-vitalis-paciente-satisfecho-2.webp',
        heroAbout: '/images/hero-about.jpg',
        heroServices: '/images/hero-services.jpg',
        heroContact: '/images/contact-bg.jpg',
        equipo: '/images/clinica-vitalis-equipo-clinico.webp',
        pacientes: '/images/clinica-vitalis-paciente-satisfecho-1.webp',
        instalaciones: '/images/clinica-vitalis-instalaciones-recepcion.webp',
        testimoniosFondo: '/images/map.png',
        default: '/images/centro.jpg',
        partners: [
            { src: '/images/logo-1.svg', alt: 'Laboratorio Norte' },
            { src: '/images/logo-2.svg', alt: 'Wellness Plus' },
            { src: '/images/logo-3.svg', alt: 'BioSkin' },
            { src: '/images/logo-4.svg', alt: 'DermaLab' },
            { src: '/images/logo-5.svg', alt: 'Vital Pharma' },
            { src: '/images/logo-6.svg', alt: 'Nova Clinic' },
            { src: '/images/logo-7.svg', alt: 'HealthPro' },
        ],
    },
    menu: [
        { label: 'Inicio', href: '/' },
        { label: 'Sobre nosotros', href: '/about-us' },
        { label: 'Tratamientos', href: '/services' },
        { label: 'Especialistas', href: '/doctors' },
        { label: 'Contacto', href: '/contact-us' },
    ],
    hero: {
        badge: 'Bienvenido a Clínica Vitalis',
        titulo: 'Cuidado confiable para tu bienestar',
        descripcion:
            'Diseñamos experiencias médicas y estéticas con diagnósticos precisos, seguimiento cercano y tecnología de vanguardia para potenciar tu confianza.',
        ctas: [
            { label: 'Agenda tu cita', href: '/contact-us', variant: 'primary' },
            { label: 'Conócenos', href: '/about-us', variant: 'outline' },
        ],
        resumen: [
            {
                icon: 'BriefcaseMedical',
                titulo: 'Acompañamiento médico',
                descripcion:
                    'Especialistas que guían cada tratamiento y responden tus dudas en todas las etapas.',
            },
            {
                icon: 'Headset',
                titulo: 'Atención al paciente',
                descripcion:
                    'Coordinación ágil de turnos, recordatorios y seguimiento constante vía WhatsApp.',
            },
        ],
    },
    home: {
        about: {
            tag: 'Sobre nosotros',
            titulo: 'Salud confiable con compasión',
            descripcion:
                'Nos comprometemos a ofrecer atención excepcional con un enfoque humano. Nuestro equipo multidisciplinario y nuestras instalaciones modernas brindan soluciones precisas, acompañamiento permanente y calidez en cada visita.',
        },
        destacados: [
            {
                icon: 'ShieldPlus',
                titulo: 'Protocolos certificados',
                descripcion:
                    'Procesos validados por sociedades médicas y bioseguridad en cada espacio.',
            },
            {
                icon: 'Sparkles',
                titulo: 'Resultados visibles',
                descripcion:
                    'Tecnología de última generación para cuidar tu piel, cuerpo y bienestar integral.',
            },
        ],
        ctaPacientes: {
            titulo: 'Estamos aceptando nuevos pacientes',
            descripcion:
                'Programar tu primera consulta es muy sencillo. Agenda en línea, recibe recordatorios automáticos y disfruta de una bienvenida personalizada desde el primer contacto.',
            bullets: [
                {
                    icon: 'CalendarClock',
                    titulo: 'Agenda flexible',
                    descripcion: 'Turnos online, confirmaciones instantáneas y recordatorios automáticos.',
                },
                {
                    icon: 'FileBadge',
                    titulo: 'Historias clínicas digitales',
                    descripcion: 'Seguimiento integral y comunicación directa con tu especialista.',
                },
                {
                    icon: 'Wallet',
                    titulo: 'Planes accesibles',
                    descripcion: 'Membresías, financiación y acuerdos con aseguradoras privadas.',
                },
                {
                    icon: 'ClipboardPlus',
                    titulo: 'Reserva simple',
                    descripcion: 'Proceso guiado para elegir especialista, fecha y modalidad de atención.',
                },
            ],
        },
        valoraciones: [
            {
                icon: 'Wallet',
                titulo: 'Tarifas accesibles',
                descripcion: 'Planes pensados para tu presupuesto, con opciones de financiación flexible.',
            },
            {
                icon: 'FileBadge',
                titulo: 'Protocolos precisos',
                descripcion: 'Análisis integral y seguimiento digital para controlar tu progreso.',
            },
            {
                icon: 'ClipboardPlus',
                titulo: 'Reserva sin complicaciones',
                descripcion: 'Agenda en minutos, recibe confirmaciones y gestiona tus visitas desde el móvil.',
            },
            {
                icon: 'HandHeart',
                titulo: 'Servicio memorable',
                descripcion: 'Experiencia cálida, personalizada y enfocada en resultados duraderos.',
            },
        ],
    },
    serviciosDestacados: [
        {
            icon: 'Sparkles',
            titulo: 'Hilos tensores',
            descripcion:
                'Elevación inmediata y natural del óvalo facial con protocolos personalizados y resultados duraderos.',
            imagen: '/images/hilos-tensores.jpg',
        },
        {
            icon: 'Syringe',
            titulo: 'Botox de precisión',
            descripcion:
                'Relajación selectiva de líneas de expresión manteniendo la gestualidad y frescura del rostro.',
            imagen: '/images/botox.jpg',
        },
        {
            icon: 'Droplet',
            titulo: 'Ácido hialurónico',
            descripcion:
                'Armonización facial con rellenos estratégicos para aportar volumen, hidratación y luminosidad.',
            imagen: '/images/acido-hialuronico.jpg',
        },
        {
            icon: 'SunMedium',
            titulo: 'Luz pulsada IPL',
            descripcion: 'Corrección de manchas y discromías para revelar una piel uniforme y luminosa.',
            imagen: '/images/eliminacion-manchas.jpg',
        },
        {
            icon: 'Waves',
            titulo: 'Tratamientos corporales',
            descripcion: 'Modelado, reafirmación y drenaje avanzado para redefinir la silueta.',
            imagen: '/images/tratamientos-corporales.jpg',
        },
        {
            icon: 'Flower2',
            titulo: 'Rejuvenecimiento facial',
            descripcion: 'Bioestimuladores y vitaminas que devuelven firmeza, suavidad y glow.',
            imagen: '/images/hero-about.jpg',
        },
        {
            icon: 'Apple',
            titulo: 'Nutrición estética',
            descripcion:
                'Planes integrales que potencian los tratamientos y acompañan hábitos saludables.',
            imagen: '/images/nutricion-estetica.jpg',
        },
        {
            icon: 'Zap',
            titulo: 'Depilación láser',
            descripcion: 'Láser de última generación con enfriamiento dinámico para una piel suave y sin vello.',
            imagen: '/images/depilacion-laser.jpg',
        },
    ],
    serviciosVentajas: [
        {
            icon: 'Sparkles',
            titulo: 'Protocolos exclusivos',
            descripcion:
                'Combinamos técnicas avanzadas con rituales sensoriales para lograr resultados visibles y elegantes desde la primera sesión.',
        },
        {
            icon: 'Droplet',
            titulo: 'Activos premium',
            descripcion:
                'Trabajamos con bioestimuladores, neuromoduladores y cosmética médica avalada para potenciar cada tratamiento.',
        },
        {
            icon: 'Zap',
            titulo: 'Tecnología inteligente',
            descripcion:
                'Aparatología de última generación para modelar, regenerar y revitalizar cuidando cada detalle de tu piel.',
        },
        {
            icon: 'Waves',
            titulo: 'Seguimiento personalizado',
            descripcion:
                'Después de cada sesión te acompañamos con guías post tratamiento y controles digitales para prolongar los resultados.',
        },
    ],
    valores: [
        {
            icon: 'Sparkles',
            titulo: 'Experiencias a medida',
            descripcion:
                'Cada diagnóstico se traduce en un ritual personal que respeta tu ritmo y realza tu belleza natural.',
        },
        {
            icon: 'Gem',
            titulo: 'Excelencia médica',
            descripcion:
                'Nuestro staff integra especialistas certificados en medicina estética, dermatología y nutrición.',
        },
        {
            icon: 'Wand2',
            titulo: 'Tecnología de vanguardia',
            descripcion:
                'Equipamiento de última generación, bioestimuladores premium y aparatología avalada.',
        },
        {
            icon: 'HandHeart',
            titulo: 'Calidez boutique',
            descripcion:
                'Ambientes cálidos, aromas y música pensados para convertir cada visita en bienestar.',
        },
        {
            icon: 'Heart',
            titulo: 'Seguimiento cercano',
            descripcion:
                'Controles minuciosos, recomendaciones post tratamiento y seguimiento digital.',
        },
        {
            icon: 'Leaf',
            titulo: 'Bienestar integral',
            descripcion:
                'Planes de alimentación, suplementación y hábitos saludables para potenciar resultados.',
        },
    ],
    firmas: [
        {
            titulo: 'Glow inmediato',
            descripcion:
                'Hidratación profunda con ácido hialurónico, luz LED y cocktail vitamínico para revitalizar tu piel.',
        },
        {
            titulo: 'Armonía facial 360°',
            descripcion:
                'Evaluación integral, toxina botulínica de precisión y rellenos estratégicos para redefinir contornos.',
        },
        {
            titulo: 'Silhouette Sculpt',
            descripcion:
                'Drenaje linfático, aparatología reductora y nutrición estética para modelar y reafirmar tu cuerpo.',
        },
    ],
    equipo: [
        {
            nombre: 'Dra. Valentina Ríos',
            especialidad: 'Medicina estética facial',
            imagen: '/images/clinica-vitalis-equipo-especialista-1.webp',
            alt: 'Dra. Valentina Ríos en consulta',
        },
        {
            nombre: 'Dr. Martín Aguilar',
            especialidad: 'Dermatología láser',
            imagen: '/images/clinica-vitalis-equipo-especialista-2.webp',
            alt: 'Dr. Martín Aguilar calibrando equipo láser',
        },
        {
            nombre: 'Dra. Renata Solís',
            especialidad: 'Nutrición estética',
            imagen: '/images/clinica-vitalis-equipo-especialista-3.webp',
            alt: 'Dra. Renata Solís guiando plan nutricional',
        },
        {
            nombre: 'Dra. Camila Duarte',
            especialidad: 'Medicina regenerativa',
            imagen: '/images/clinica-vitalis-equipo-especialista-4.webp',
            alt: 'Dra. Camila Duarte con aparatología regenerativa',
        },
    ],
    testimonios: [
        {
            nombre: 'Sarah Johnson',
            especialidad: 'Nutricionista',
            mensaje:
                '¡La atención que recibí fue excepcional! El equipo es muy atento y los servicios superaron todas mis expectativas.',
            imagen:
                'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=256&q=80',
        },
        {
            nombre: 'Dr. Miguel López',
            especialidad: 'Cardiólogo',
            mensaje:
                'Su compromiso con la salud del paciente es admirable. Me sentí acompañado y valorado durante todo mi tratamiento.',
            imagen:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80',
        },
        {
            nombre: 'Emily Carter',
            especialidad: 'Pediatra',
            mensaje:
                'Servicio increíble y un ambiente muy cordial. Se nota que realmente se preocupan por el bienestar de sus pacientes.',
            imagen:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=256&q=80',
        },
        {
            nombre: 'David Thompson',
            especialidad: 'Cirujano ortopédico',
            mensaje:
                'Atención profesional y confiable en cada paso. Recomiendo ampliamente su experiencia médica.',
            imagen:
                'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=256&q=80',
        },
    ],
    testimoniosPerfiles: [
        {
            id: 'profile-1',
            src: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=200&q=80',
            alt: 'Retrato de paciente sonriendo',
            className: 'left-0 top-6 w-20 h-20 sm:-left-28 sm:top-2 sm:w-24 sm:h-24 opacity-80',
        },
        {
            id: 'profile-2',
            src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80',
            alt: 'Paciente relajada durante su consulta',
            className: 'right-0 top-12 w-16 h-16 sm:-right-28 sm:top-8 sm:w-20 sm:h-20 opacity-75',
        },
        {
            id: 'profile-3',
            src: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80',
            alt: 'Especialista del equipo sonriendo',
            className: 'left-2 bottom-2 w-20 h-20 sm:-left-24 sm:bottom-8 sm:w-24 sm:h-24 opacity-80',
        },
        {
            id: 'profile-4',
            src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
            alt: 'Paciente recuperado disfrutando del resultado',
            className: 'right-6 bottom-0 w-20 h-20 sm:-right-24 sm:bottom-10 sm:w-24 sm:h-24 opacity-80',
        },
        {
            id: 'profile-5',
            src: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=200&q=80',
            alt: 'Paciente feliz tras su tratamiento',
            className:
                'left-1/2 top-0 hidden -translate-x-1/2 md:block w-16 h-16 sm:-top-10 sm:w-20 sm:h-20 opacity-70',
        },
    ],
    stats: [
        {
            icon: 'ShieldPlus',
            valor: 1200,
            sufijo: '+',
            descripcion: 'Pacientes tratados con éxito',
        },
        {
            icon: 'UserPlus2',
            valor: 45,
            sufijo: '+',
            descripcion: 'Especialistas certificados',
        },
        {
            icon: 'BriefcaseMedical',
            valor: 18,
            sufijo: ' años',
            descripcion: 'Trayectoria clínica',
        },
        {
            icon: 'Ribbon',
            valor: 30,
            sufijo: '+',
            descripcion: 'Reconocimientos y alianzas',
        },
    ],
    preguntasFrecuentes: [
        {
            pregunta: '¿Qué servicios ofrece Clínica Vitalis?',
            respuesta:
                'Disponemos de medicina estética facial, corporal, nutrición avanzada, depilación láser y programas de bienestar preventivo. Cada plan se diseña según tus objetivos.',
        },
        {
            pregunta: '¿Cómo reservo una cita?',
            respuesta:
                'Puedes reservar en línea, llamarnos al teléfono principal o escribirnos por WhatsApp. Confirmamos cada turno y enviamos recordatorios automáticos.',
        },
        {
            pregunta: '¿Aceptan seguros médicos?',
            respuesta:
                'Sí, trabajamos con compañías privadas seleccionadas. Nuestro equipo puede ayudarte a verificar la cobertura de tu póliza.',
        },
        {
            pregunta: '¿Su equipo médico está certificado?',
            respuesta:
                'Todo nuestro personal cuenta con certificaciones oficiales y años de experiencia clínica, garantizando tratamientos seguros y basados en evidencia.',
        },
        {
            pregunta: '¿Cuáles son los horarios de atención?',
            respuesta:
                'Atendemos de lunes a viernes de 09:00 a 19:00 h y sábados de 09:00 a 14:00 h. Para urgencias estéticas disponemos de asistencia telefónica.',
        },
    ],
    partners: [
        { src: '/images/logo-1.svg', alt: 'Alianza 1' },
        { src: '/images/logo-2.svg', alt: 'Alianza 2' },
        { src: '/images/logo-3.svg', alt: 'Alianza 3' },
        { src: '/images/logo-4.svg', alt: 'Alianza 4' },
        { src: '/images/logo-5.svg', alt: 'Alianza 5' },
        { src: '/images/logo-6.svg', alt: 'Alianza 6' },
        { src: '/images/logo-7.svg', alt: 'Alianza 7' },
    ],
    agenda: {
        url: 'https://calendly.com/ecofet-centro-medico/consulta-inicial',
        motivos: [
            {
                icon: 'ShieldCheck',
                titulo: 'Servicios seguros y confiables',
                descripcion:
                    'Protocolos médicos certificados, aparatología de vanguardia y especialistas atentos a cada detalle.',
            },
            {
                icon: 'Eye',
                titulo: 'Diagnóstico preciso y personalizado',
                descripcion: 'Evaluamos historia clínica, estilo de vida y objetivos estéticos para diseñar un plan a medida.',
            },
            {
                icon: 'Headset',
                titulo: 'Acompañamiento constante',
                descripcion: 'Nuestro equipo está disponible para resolver dudas antes, durante y después del tratamiento.',
            },
        ],
        recordatorios: [
            {
                icon: 'PhoneCall',
                texto: '¿Prefieres hablar con alguien? Llámanos y te ayudamos a coordinar tu cita.',
            },
            {
                icon: 'MessageSquareMore',
                texto: 'Recibirás recordatorios por correo y WhatsApp para que no pierdas tu turno.',
            },
        ],
    },
    seo: {
        titulo: 'Clínica Vitalis | Medicina moderna y cuidado humano',
        descripcion:
            'Clínica Vitalis ofrece tratamientos estéticos y médicos personalizados con tecnología de vanguardia y especialistas certificados en Lucena.',
        sitio: 'Clínica Vitalis',
        palabrasClave: 'medicina estética, clínica en Lucena, depilación láser, tratamientos faciales',
    },
}

export default CLINICA
