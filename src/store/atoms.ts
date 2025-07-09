import { atom } from 'jotai';
import type { Theme, NavSection, ProjectFilter, ContactForm, AnimationStates } from '@/types';

// Theme atom for dark/light mode
export const themeAtom = atom<Theme>('dark');

// Navigation atom for active section
export const activeNavAtom = atom<NavSection>('home');

// Loading states
export const isLoadingAtom = atom<boolean>(false);

// Contact form atom
export const contactFormAtom = atom<ContactForm>({
    name: '',
    email: '',
    message: '',
    isSubmitting: false
});

// Projects filter atom
export const projectsFilterAtom = atom<ProjectFilter>('all');

// Animation states
export const animationStatesAtom = atom<AnimationStates>({
    heroAnimated: false,
    aboutAnimated: false,
    skillsAnimated: false,
    projectsAnimated: false,
    experienceAnimated: false,
    contactAnimated: false
});
