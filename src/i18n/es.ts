import type { i18nUI } from './i18n.type';

export const es: i18nUI = {
    languageLabel: 'Selecciona tu Idioma',

    pageInfo: {
        title: 'Portafolio de Jose L Delgado | Ingeniero de Software, Consultor Técnico, Desarrollador Full Stack',
        description:
            'Contrata a Jose L Delgado para diseñar y desarrollar aplicaciones web de alto rendimiento, flujos con IA y productos digitales escalables con React, Next.js, TypeScript y herramientas backend modernas.',
    },
    sections: {
        project: 'Proyectos',
        workHistory: 'Experiencia laboral',
        aboutMe: 'Acerca de mi',
    },
    themeToggle: {
        label: 'Selecciona tu tema de visualización',
        light: 'Claro',
        dark: 'Oscuro',
        system: 'Sistema',
    },
    languageOptions: {
        es: 'Español',
        en: 'Inglés',
    },
    experiences: {
        experience: [
            {
                title: 'Ingeniero de Software / Consultor Técnico',
                company: 'Freelance y por contrato',
                description:
                    'Colaboro con fundadores, equipos de producto y perfiles no técnicos para definir requerimientos y entregar soluciones de software a medida alineadas con objetivos de negocio y de usuario. Diseño y desarrollo aplicaciones web full stack, landing pages y herramientas internas con React, Next.js, TypeScript y Tailwind CSS, además de crear sistemas de componentes y patrones reutilizables que aceleran la entrega entre proyectos. Integro servicios como Stripe, Shopify, Zapier y plataformas de analítica, asesoro sobre rendimiento, SEO y despliegue, y desarrollo flujos automatizados con IA usando LLMs, MCPs y n8n mientras lidero proyectos de extremo a extremo desde discovery hasta soporte continuo.',
                date: 'Ene 2022',
                endDate: null,
            },
        ],
        present: 'Presente',
    },
    aboutMe: {
        paragraphs: [
            'Soy Ingeniero de Software y Consultor Técnico, y ayudo a founders, startups y empresas en crecimiento a convertir requerimientos en productos digitales escalables y listos para producción, alineados con objetivos de negocio.',
            'Mi trabajo se centra en aplicaciones web full stack, integraciones y flujos potenciados por IA con React, Next.js, TypeScript, Tailwind CSS y herramientas backend modernas, con especial atención al rendimiento, la arquitectura limpia y la mantenibilidad.',
            'Trabajo de extremo a extremo, desde discovery y diseño técnico hasta despliegue, iteración y soporte continuo, traduciendo necesidades de negocio en soluciones prácticas para stakeholders técnicos y no técnicos.',
        ],
    },

    nav: {
        project: 'Proyectos',
        about: 'Acerca de',
        experience: 'Experiencia',
        contact: 'Contacto',
    },
    hero: {
        jobStatus: 'Disponible para freelance y contratos',
        contactBadge: 'Escríbeme',
        title: 'Hola, soy Jose L Delgado',
        description:
            'Ingeniero de Software y Consultor Técnico bilingüe, venezolano y radicado en EE.UU. Colaboro con founders y equipos de producto para crear aplicaciones web de alto rendimiento, flujos con IA y productos digitales escalables con React, Next.js, TypeScript e integraciones modernas.',
    },
    portfolioProjects: {
        projects: [
            {
                name: 'Future Store',
                image: '/futureword.jpg',
                isActive: true,
                description:
                    'Construí una plataforma de e-commerce completa con Next.js 14, TypeScript, Tailwind CSS y Zustand, incluyendo autenticación, carrito de compras y flujos dinámicos de producto. Desarrollé un asistente virtual de compras potenciado por la OpenAI API e integré Shopify para sincronizar datos reales de productos e inventario. Con foco en rendimiento, UX y escalabilidad para casos de uso modernos de retail online.',
                techStack: [
                    'Next',
                    'TypeScript',
                    'Tailwind',
                    'Zustand',
                    'OpenAI API',
                    'Shopify API',
                ],
                link: 'https://shopify-ecommerce-three.vercel.app/',
                github: 'https://github.com/Lealdos/Shopify-ecommerce',
            },
            {
                name: 'Diario Tepuy',
                image: '/diariotepuy.png',
                isActive: true,
                description:
                    'Desarrollé Diario Tepuy, una plataforma deportiva orientada al rendimiento construida con WordPress. Implementé buenas prácticas de SEO, optimicé el rendimiento de las páginas y estructuré el contenido para mejorar la visibilidad en buscadores y la interacción de los usuarios. Equilibré necesidades editoriales con optimización técnica para un producto centrado en contenido.',
                techStack: ['WordPress', 'SEO', 'Web Performance'],
                link: 'https://diariotepuy.com/',
            },
            {
                name: 'Resdy',
                image: '/resdyB.jpg',
                isActive: false,
                description:
                    'Diseñé e implementé un backend RESTful escalable con Node.js, TypeScript, Express, Prisma y TSOA. Puse énfasis en tipado fuerte, arquitectura limpia y modelado de dominio mantenible para soportar crecimiento futuro. Construí esquemas de base de datos y migraciones eficientes con Prisma ORM y PostgreSQL.',
                techStack: [
                    'Node.js',
                    'TypeScript',
                    'Express',
                    'Prisma ORM',
                    'PostgreSQL',
                    'TSOA',
                ],
                link: 'https://github.com/Lealdos/restify-v2-backend',
                github: 'https://github.com/Lealdos/restify-v2-backend',
            },
            {
                image: '/poem.jpg',
                name: 'Poem Generator',
                isActive: true,
                description:
                    'Creé una aplicación web creativa impulsada por IA que genera poemas a partir de imágenes subidas por el usuario. Fue construida con React, TypeScript, Astro y Tailwind CSS, integrando modelos basados en LLM para generar texto inspirado en imágenes. Diseñé flujos de UX atractivos para respuestas asíncronas de IA y experiencias de creatividad del usuario.',
                techStack: [
                    'React',
                    'TypeScript',
                    'Astro',
                    'Tailwind',
                    'LLM API',
                ],
                link: 'https://poeamsgenerator.vercel.app/',
                github: 'https://github.com/Lealdos/regalo-ana',
            },
        ],
        CodeBadge: 'Código',
        LinkBadge: 'Enlace',
    },
    footer: {
        about: 'Acerca de mi',
        name: 'Jose Delgado',
        copyright: 'Todos los derechos reservados.',
        contact: 'contácteme',
    },
};
