export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    category: 'frontend' | 'fullstack' | 'mobile' | 'other';
    image: string;
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
    year: number;
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate?: string;
    description: string;
    achievements: string[];
    technologies: string[];
    logo?: string;
}

export interface Skill {
    name: string;
    category: 'frontend' | 'backend' | 'tools' | 'other';
    proficiency: number; // 1-100
    icon?: string;
    yearsOfExperience?: number;
}

export interface Testimonial {
    id: string;
    name: string;
    position: string;
    company: string;
    content: string;
    avatar?: string;
    linkedinUrl?: string;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
    isSubmitting: boolean;
}

export interface AnimationStates {
    heroAnimated: boolean;
    aboutAnimated: boolean;
    skillsAnimated: boolean;
    projectsAnimated: boolean;
    experienceAnimated: boolean;
    contactAnimated: boolean;
}

export type Theme = 'light' | 'dark';
export type NavSection = 'home' | 'about' | 'skills' | 'projects' | 'experience' | 'contact';
export type ProjectFilter = 'all' | 'frontend' | 'fullstack' | 'mobile' | 'other';
