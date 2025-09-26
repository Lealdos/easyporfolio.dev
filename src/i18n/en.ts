import type { i18nUI } from './i18n.type';

export const en: i18nUI = {
    languageLabel: 'Select your Language',
    languageOptions: {
        es: 'Spanish',
        en: 'English',
    },
    pageInfo: {
        title: "Jose Delgado's Portfolio - software engineer - web developer ",
        description:
            'Hire Jose Delgado to create your web or mobile application. Web Developer specialized in crafting unique applications.',
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
        jobStatus: 'Open to work',
        contactBadge: 'Contact me',
        title: "Hello, i'm Jose Leonardo Delgado Avila",
        description:
            'A Venezuelan bilingual developer based in the U.S, committed to their work. A strong team player with a commitment to excellence and constantly expanding who is always learning, growing, and sharpening my problem-solving skills to create better software solutions.',
    },

    experiences: {
        experience: [
            {
                title: 'Full Stack Developer',
                company: 'Freelance',
                description:
                    'Developed and maintained web applications for various clients, ensuring high performance and responsiveness. Collaborated with designers to create user-friendly interfaces and implemented backend services to support application functionality.',
                date: 'Jan 2020',
                endDate: null,
            },
        ],
        present: 'Present',
    },
    projects: {
        projects: [
            {
                name: 'Future Store',
                image: '/futureword.jpg',
                isActive: true,
                description:
                    'Creation of an E-commerce platform with functionalities including authentication, shopping cart, AI-powered virtual assistant, integration with the Shopify API, and more. It is built primarily using Next.js 14, TypeScript, Tailwind, and Zustand.',
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
                    'Diario Tepuy is a sports newspaper website that provides information about the latest news, results, and events in the world of soccer, basketball, and tennis, among others. It was developed using WordPress as a content management system (CMS).',
                techStack: ['WordPress'],
                link: 'https://diariotepuy.com/',
            },
            {
                name: 'Resdy',
                image: '/resdyB.jpg',
                isActive: false,
                description:
                    "A powerful RESTfull API built with Prisma ORM, Node.js, TSOA, and TypeScript. This API serves as a robust backend for our application, providing seamless data management and powerful endpoint interactions. With TypeScript's typing and TSOA's automatic routing, this project ensures a scalable and maintainable codebase.",
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
                    'A web application through which, with the assistance of an AI, you can upload any image. You will be able to visualize it, and after a short time, you will receive a poem that uses the previously uploaded image as inspiration.',
                techStack: ['React', 'TypeScript', 'Tailwind', 'Gemini AI'],
                link: 'https://poeamsgenerator.vercel.app/',
                github: 'https://github.com/Lealdos/regalo-ana',
            },
        ],
        CodeBadge: 'Code',
        LinkBadge: 'Link',
    },
    aboutMe: {
        paragraphs: [
            "As a Full Stack Software Developer, I'm team player and enthusiastic to significantly contribute to creating efficient software solutions. always eager to learn and grow as a developer and seeking opportunities to apply my skills in a challenging environment.",
            "I have a robust skill set encompassing JavaScript, Typescript, Python, Node.js, SQL, Git, CSS, HTML, Express, NestJS, React, Astro, Next.js, Docker and Linux, I'm well-prepared to embrace fresh challenges while continuing my journey of learning and development as a developer.",
        ],
    },
    footer: {
        about: 'About me',
        name: 'Jose Delgado',
        copyright: ' Lealdos. some rights reserved.',
        contact: 'contact me',
    },
};
