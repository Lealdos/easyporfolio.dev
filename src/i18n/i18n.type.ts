import type { Languages } from "./Language";

export type i18nUI  = {
    languageLabel: string;
    languageOptions: Record<Languages, string>;
    pageInfo: {
        title: string;
        description:string;
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
        theme: string;
        language: string;
    };
    hero: {
        jobStatus: string;
        contactBadge: string;
    };
    projects: {
        CodeBadge: string;
        LinkBadge: string;
    };
}