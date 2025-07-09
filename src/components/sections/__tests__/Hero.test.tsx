import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@/test/test-utils';
import { Hero } from '../Hero';

// Mock framer-motion
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
        section: ({ children, ...props }: any) => <section {...props}>{children}</section>
    }
}));

// Mock scrollToSection
vi.mock('@/utils/helpers', () => ({
    scrollToSection: vi.fn()
}));

// Mock window.open
Object.defineProperty(window, 'open', {
    writable: true,
    value: vi.fn()
});

describe('Hero', () => {
    it('renders hero section with personal information', () => {
        render(<Hero />);

        expect(screen.getByTestId('hero-section')).toBeInTheDocument();
        expect(screen.getByText('Manuel Correia')).toBeInTheDocument();
        expect(screen.getByText('Frontend Web Developer & Team Leader')).toBeInTheDocument();
    });

    it('renders social media links', () => {
        render(<Hero />);

        expect(screen.getByTestId('github-link')).toBeInTheDocument();
        expect(screen.getByTestId('linkedin-link')).toBeInTheDocument();
    });

    it('handles scroll indicator click', async () => {
        const helpers = await import('@/utils/helpers');
        const scrollToSection = vi.mocked(helpers.scrollToSection);

        render(<Hero />);

        const scrollIndicator = screen.getByTestId('scroll-indicator');
        fireEvent.click(scrollIndicator);

        expect(scrollToSection).toHaveBeenCalledWith('about');
    });

    it('renders bio text', () => {
        render(<Hero />);

        expect(screen.getByText(/Hey there!/)).toBeInTheDocument();
        expect(screen.getByText(/passionate about crafting/)).toBeInTheDocument();
    });

    it('has proper accessibility attributes', () => {
        render(<Hero />);

        const githubLink = screen.getByLabelText('GitHub Profile');
        const linkedinLink = screen.getByLabelText('LinkedIn Profile');

        expect(githubLink).toBeInTheDocument();
        expect(linkedinLink).toBeInTheDocument();
    });
});
