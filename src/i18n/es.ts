import type { i18nUI } from './i18n.type';

export const es: i18nUI = {
    languageLabel: 'Selecciona tu Idioma',

    pageInfo: {
        title: 'Portafolio Jose Delgado - Ingeniero de software - Desarrollador web',
        description:
            'Contrata a Jose Delgado para crear, mejorar o mantener tu aplicación web o servicios. Desarrollador web especializado en crear aplicaciones únicas. ',
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
                title: 'Desarrollador Full Stack',
                company: 'Freelance',
                description:
                    'Desarrollé y mantuve aplicaciones web para varios clientes, asegurando un alto rendimiento y capacidad de respuesta. Colaboré con diseñadores para crear interfaces fáciles de usar e implementé servicios backend para respaldar la funcionalidad de la aplicación.',
                date: 'Ene 2020',
                endDate: null,
            },
        ],
        present: 'Presente',
    },
    aboutMe: {
        paragraphs: [
            'Como Desarrollador de Software Full Stack, soy un jugador de equipo entusiasta y estoy comprometido a contribuir significativamente a la creación de soluciones de software eficientes. Siempre estoy ansioso por aprender y crecer como desarrollador, buscando oportunidades para aplicar mis habilidades en un entorno desafiante.',
            'Tengo un conjunto sólido de habilidades que abarca JavaScript, Typescript, Python, Node.js, SQL, Git, CSS, HTML, Express, NestJS, React, Astro, Next.js, Docker y Linux. Estoy bien preparado para enfrentar nuevos desafíos mientras continúo mi viaje de aprendizaje y desarrollo como desarrollador.',
        ],
    },

    nav: {
        project: 'Proyectos',
        about: 'Acerca de',
        experience: 'Experiencia',
        contact: 'Contacto',
    },
    hero: {
        jobStatus: 'Abierto a oportunidades',
        contactBadge: 'Escríbeme',
        title: 'Hola, soy Jose Leonardo Delgado Avila',
        description:
            'Un desarrollador bilingüe venezolano radicado en EE.UU, comprometido con su trabajo. Un fuerte jugador de equipo con un compromiso con la excelencia y en constante expansión que siempre está aprendiendo, creciendo y perfeccionando mis habilidades para resolver problemas y crear mejores soluciones de software.',
    },
    portfolioProjects: {
        projects: [
            {
                name: 'Future Store',
                image: '/futureword.jpg',
                isActive: true,
                description:
                    'Creación de una plataforma de comercio electrónico con funcionalidades que incluyen autenticación, carrito de compras, asistente virtual potenciado por IA, integración con la API de Shopify y más. Está construida principalmente con Next.js 14, TypeScript, Tailwind y Zustand.',
                techStack: [
                    'Next',
                    'OpenAI API',
                    'TypeScript',
                    'Vercel Deploy',
                    'ShopifyAPI',
                    'Tailwind',
                    'Zustand',
                    'SDK',
                ],
                link: 'https://shopify-ecommerce-three.vercel.app/',
                github: 'https://github.com/Lealdos/Shopify-ecommerce',
            },
            {
                name: 'Diario Tepuy',
                image: '/diariotepuy.png',
                isActive: true,
                description:
                    'Diario Tepuy es un portal deportivo que ofrece información sobre las últimas noticias, resultados y eventos del mundo del fútbol, baloncesto y tenis, entre otros. Fue desarrollado utilizando WordPress como sistema de gestión de contenidos (CMS).',
                techStack: ['WordPress'],
                link: 'https://diariotepuy.com/',
            },
            {
                name: 'Resdy',
                image: '/resdyB.jpg',
                isActive: false,
                description:
                    'Una potente API RESTful construida con Prisma ORM, Node.js, TSOA y TypeScript. Esta API sirve como un backend robusto para nuestra aplicación, proporcionando una gestión de datos fluida y potentes interacciones a través de endpoints. Con el tipado de TypeScript y el enrutamiento automático de TSOA, este proyecto garantiza una base de código escalable y mantenible.',
                techStack: [
                    'ORM',
                    'Prisma',
                    'Express',
                    'Docker',
                    'TypeScript',
                    'Tsoa',
                    'API REST',
                ],
                link: 'https://github.com/Lealdos/restify-v2-backend',
                github: 'https://github.com/Lealdos/restify-v2-backend',
            },
            {
                image: '/poem.jpg',
                name: 'Poem Generator',
                isActive: true,
                description:
                    'Una aplicación web a través de la cual, con la ayuda de una IA, puedes subir cualquier imagen. Podrás visualizarla y, después de un corto tiempo, recibirás un poema que utiliza la imagen previamente subida como inspiración.',
                techStack: ['React', 'TypeScript', 'Tailwind', 'Gemini AI'],
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
