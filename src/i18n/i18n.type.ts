import type { Languages } from './Language';

export type i18nUI = {
    languageLabel: string;
    languageOptions: Record<Languages, string>;
    pageInfo: {
        title: string;
        description: string;
    };
    sections: {
        project: string;
        workHistory: string;
        aboutMe: string;
    };
    nav: {
        project: string;
        about: string;
        experience: string;
        contact: string;
    };
    hero: {
        jobStatus: string;
        contactBadge: string;
        title: string;
        description: string;
    };
    projects: {
        projects: {
            name: string;
            description: string;
            techStack: string[];
            image: string;
            isActive: boolean;
            link?: string;
            github?: string;
        }[];
        CodeBadge: string;
        LinkBadge: string;
    };
    experiences: {
        experience: {
            title: string;
            company: string;
            description: string;
            date: string;
            endDate: string | null;
        }[];
        present: string;
    };
    aboutMe: {
        paragraphs: string[];
    };
    themeToggle: {
        label: string;
        light: string;
        dark: string;
        system: string;
    };
    footer: {
        name: string;
        contact: string;
        copyright: string;
        about: string;
    };
};
