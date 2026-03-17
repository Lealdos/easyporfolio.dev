import type { i18nUI } from './i18n.type';

export const en: i18nUI = {
    languageLabel: 'Select your Language',
    languageOptions: {
        es: 'Spanish',
        en: 'English',
    },
    pageInfo: {
        title: 'Jose L Delgado | Software Engineer, Technical Consultant, Full-Stack Developer',
        description:
            'Hire Jose L Delgado to design and build high-performance web applications, AI-enabled workflows, and scalable digital products with React, Next.js, TypeScript, and modern backend tooling.',
    },
    sections: {
        project: 'Projects',
        workHistory: 'Work History',
        aboutMe: 'About me',
    },
    nav: {
        project: 'Projects',
        about: 'About',
        experience: 'Experience',
        contact: 'Contact',
    },
    themeToggle: {
        label: 'select your display theme',
        light: 'Light',
        dark: 'Dark',
        system: 'System',
    },
    hero: {
        jobStatus: 'Available for freelance & contract work',
        contactBadge: 'Contact me',
        title: "Hello, I'm Jose L Delgado",
        description:
            'A Venezuelan bilingual Software Engineer and Technical Consultant based in the U.S. I partner with founders and product teams to build high-performance web applications, AI-enabled workflows, and scalable digital products with React, Next.js, TypeScript, and modern integrations.',
    },

    experiences: {
        experience: [
            {
                title: 'Software Engineer / Technical Consultant',
                company: 'Freelance & Contract',
                description:
                    'Partner with founders, product teams, and non-technical stakeholders to scope requirements and deliver custom software solutions aligned with business and user goals. Design and build full-stack web applications, landing pages, and internal tools using React, Next.js, TypeScript, and Tailwind CSS while architecting reusable component systems and patterns that speed up delivery across projects. Integrate services such as Stripe, Shopify, Zapier, and analytics platforms, advise on performance, SEO, and deployment strategy, and develop AI-enabled workflows with LLMs, MCPs, and n8n while owning projects end-to-end from discovery through ongoing support.',
                date: 'Jan 2022',
                endDate: null,
            },
        ],
        present: 'Present',
    },
    portfolioProjects: {
        projects: [
            {
                name: 'Future Store',
                image: '/futureword.jpg',
                isActive: true,
                description:
                    'Built a full-featured e-commerce platform with Next.js 14, TypeScript, Tailwind CSS, and Zustand, including authentication, cart management, and dynamic product flows. Developed an AI-powered virtual shopping assistant with the OpenAI API and integrated Shopify to synchronize live product and inventory data. Focused on performance, UX, and scalability for modern online retail use cases.',
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
                    'Developed Diario Tepuy, a performance-focused sports media platform built with WordPress. Implemented SEO best practices, optimized page performance, and structured content to improve search visibility and user engagement. Balanced editorial needs with technical optimization for a content-driven product.',
                techStack: ['WordPress', 'SEO', 'Web Performance'],
                link: 'https://diariotepuy.com/',
            },
            {
                name: 'Resdy',
                image: '/resdyB.jpg',
                isActive: false,
                description:
                    'Designed and implemented a scalable RESTful API backend using Node.js, TypeScript, Express, Prisma, and TSOA. Emphasized strong typing, clean architecture, and maintainable domain modeling to support future growth. Built efficient database schemas and migrations with Prisma ORM and PostgreSQL.',
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
                    'Created an AI-driven creative web application that generates poems from user-uploaded images. Built with React, TypeScript, Astro, and Tailwind CSS, integrating LLM-based AI models for image-inspired text generation. Designed engaging UX flows for asynchronous AI responses and user creativity.',
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
        CodeBadge: 'Code',
        LinkBadge: 'Link',
    },
    aboutMe: {
        paragraphs: [
            'I am a Software Engineer and Technical Consultant who helps founders, startups, and growing businesses turn requirements into scalable, production-ready digital products aligned with business goals.',
            'My work focuses on full-stack web applications, integrations, and AI-enabled workflows with React, Next.js, TypeScript, Tailwind CSS, and modern backend tooling, with strong attention to performance, clean architecture, and maintainability.',
            'I work end-to-end from discovery and technical design through deployment, iteration, and ongoing support, translating business needs into practical solutions for both technical and non-technical stakeholders.',
        ],
    },
    footer: {
        about: 'About me',
        name: 'Jose Delgado',
        copyright: ' Lealdos. some rights reserved.',
        contact: 'contact me',
    },
};
