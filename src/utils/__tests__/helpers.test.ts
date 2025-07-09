import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
    cn,
    formatDate,
    calculateExperience,
    scrollToSection,
    validateEmail,
    debounce,
    throttle
} from '../helpers';

describe('helpers', () => {
    describe('cn', () => {
        it('should merge class names correctly', () => {
            expect(cn('class1', 'class2')).toBe('class1 class2');
        });

        it('should handle conditional classes', () => {
            expect(cn('class1', false && 'class2', 'class3')).toBe('class1 class3');
        });

        it('should merge tailwind classes correctly', () => {
            expect(cn('p-4', 'p-2')).toBe('p-2');
        });
    });

    describe('formatDate', () => {
        it('should format date correctly', () => {
            expect(formatDate('2023-01-15')).toBe('January 2023');
        });

        it('should handle different date formats', () => {
            const result = formatDate('2023-12-01');
            expect(result).toMatch(/2023/);
            expect(result).toMatch(/December|November/); // Account for timezone differences
        });
    });

    describe('calculateExperience', () => {
        beforeEach(() => {
            vi.useFakeTimers();
            vi.setSystemTime(new Date('2024-01-01'));
        });

        afterEach(() => {
            vi.useRealTimers();
        });

        it('should calculate years correctly', () => {
            expect(calculateExperience('2022-01-01')).toBe('2 years');
        });

        it('should calculate months correctly', () => {
            expect(calculateExperience('2023-11-01')).toBe('2 months');
        });

        it('should calculate years and months correctly', () => {
            expect(calculateExperience('2022-06-01')).toBe('1 year 7 months');
        });

        it('should handle end date', () => {
            expect(calculateExperience('2022-01-01', '2023-01-01')).toBe('1 year');
        });
    });

    describe('scrollToSection', () => {
        beforeEach(() => {
            // Mock scrollIntoView
            Element.prototype.scrollIntoView = vi.fn();

            // Mock getElementById
            const mockElement = document.createElement('div');
            vi.spyOn(document, 'getElementById').mockReturnValue(mockElement);
        });

        it('should scroll to element if found', () => {
            scrollToSection('test-section');
            expect(document.getElementById).toHaveBeenCalledWith('test-section');
            expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({
                behavior: 'smooth',
                block: 'start'
            });
        });

        it('should not throw if element not found', () => {
            vi.spyOn(document, 'getElementById').mockReturnValue(null);
            expect(() => scrollToSection('non-existent')).not.toThrow();
        });
    });

    describe('validateEmail', () => {
        it('should validate correct email', () => {
            expect(validateEmail('test@example.com')).toBe(true);
        });

        it('should reject invalid email', () => {
            expect(validateEmail('invalid-email')).toBe(false);
            expect(validateEmail('test@')).toBe(false);
            expect(validateEmail('@example.com')).toBe(false);
        });
    });

    describe('debounce', () => {
        beforeEach(() => {
            vi.useFakeTimers();
        });

        afterEach(() => {
            vi.useRealTimers();
        });

        it('should debounce function calls', () => {
            const mockFn = vi.fn();
            const debouncedFn = debounce(mockFn, 100);

            debouncedFn();
            debouncedFn();
            debouncedFn();

            expect(mockFn).not.toHaveBeenCalled();

            vi.advanceTimersByTime(100);
            expect(mockFn).toHaveBeenCalledTimes(1);
        });
    });

    describe('throttle', () => {
        beforeEach(() => {
            vi.useFakeTimers();
        });

        afterEach(() => {
            vi.useRealTimers();
        });

        it('should throttle function calls', () => {
            const mockFn = vi.fn();
            const throttledFn = throttle(mockFn, 100);

            throttledFn();
            throttledFn();
            throttledFn();

            expect(mockFn).toHaveBeenCalledTimes(1);

            vi.advanceTimersByTime(100);
            throttledFn();
            expect(mockFn).toHaveBeenCalledTimes(2);
        });
    });
});
