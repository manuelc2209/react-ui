import { describe, it, expect } from 'vitest';
import { createStore } from 'jotai';
import {
    themeAtom,
    activeNavAtom,
    isLoadingAtom,
    contactFormAtom,
    projectsFilterAtom,
    animationStatesAtom
} from '../atoms';

describe('atoms', () => {
    describe('themeAtom', () => {
        it('should have default value of dark', () => {
            const store = createStore();
            expect(store.get(themeAtom)).toBe('dark');
        });

        it('should update theme value', () => {
            const store = createStore();
            store.set(themeAtom, 'light');
            expect(store.get(themeAtom)).toBe('light');
        });
    });

    describe('activeNavAtom', () => {
        it('should have default value of home', () => {
            const store = createStore();
            expect(store.get(activeNavAtom)).toBe('home');
        });

        it('should update active nav value', () => {
            const store = createStore();
            store.set(activeNavAtom, 'about');
            expect(store.get(activeNavAtom)).toBe('about');
        });
    });

    describe('isLoadingAtom', () => {
        it('should have default value of false', () => {
            const store = createStore();
            expect(store.get(isLoadingAtom)).toBe(false);
        });

        it('should update loading state', () => {
            const store = createStore();
            store.set(isLoadingAtom, true);
            expect(store.get(isLoadingAtom)).toBe(true);
        });
    });

    describe('contactFormAtom', () => {
        it('should have correct default values', () => {
            const store = createStore();
            const defaultForm = store.get(contactFormAtom);

            expect(defaultForm).toEqual({
                name: '',
                email: '',
                message: '',
                isSubmitting: false
            });
        });

        it('should update form values', () => {
            const store = createStore();
            const newForm = {
                name: 'John Doe',
                email: 'john@example.com',
                message: 'Hello',
                isSubmitting: true
            };

            store.set(contactFormAtom, newForm);
            expect(store.get(contactFormAtom)).toEqual(newForm);
        });
    });

    describe('projectsFilterAtom', () => {
        it('should have default value of all', () => {
            const store = createStore();
            expect(store.get(projectsFilterAtom)).toBe('all');
        });

        it('should update filter value', () => {
            const store = createStore();
            store.set(projectsFilterAtom, 'frontend');
            expect(store.get(projectsFilterAtom)).toBe('frontend');
        });
    });

    describe('animationStatesAtom', () => {
        it('should have all animations set to false by default', () => {
            const store = createStore();
            const defaultStates = store.get(animationStatesAtom);

            expect(defaultStates).toEqual({
                heroAnimated: false,
                aboutAnimated: false,
                skillsAnimated: false,
                projectsAnimated: false,
                experienceAnimated: false,
                contactAnimated: false
            });
        });

        it('should update animation states', () => {
            const store = createStore();
            const newStates = {
                heroAnimated: true,
                aboutAnimated: true,
                skillsAnimated: false,
                projectsAnimated: false,
                experienceAnimated: false,
                contactAnimated: false
            };

            store.set(animationStatesAtom, newStates);
            expect(store.get(animationStatesAtom)).toEqual(newStates);
        });
    });
});
