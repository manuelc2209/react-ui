import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@/test/test-utils';
import { Header } from '../Header';

// Mock framer-motion components
vi.mock('framer-motion', () => ({
    motion: {
        header: vi.fn((props) => <header {...props} />),
        div: vi.fn((props) => <div {...props} />),
        nav: vi.fn((props) => <nav {...props} />)
    }
}));

// Mock scrollToSection
vi.mock('@/utils/helpers', () => ({
    scrollToSection: vi.fn()
}));

describe('Header', () => {
    beforeEach(() => {
        // Reset scroll position
        Object.defineProperty(window, 'scrollY', {
            writable: true,
            value: 0
        });
    });

    it('renders header with logo', () => {
        render(<Header />);
        expect(screen.getByTestId('header')).toBeInTheDocument();
        expect(screen.getByText('Manuel Correia')).toBeInTheDocument();
    });

    it('renders all navigation items', () => {
        render(<Header />);

        const navItems = ['Home', 'About', 'Skills', 'Experience'];
        navItems.forEach((item) => {
            expect(screen.getByText(item)).toBeInTheDocument();
        });
    });

    it('toggles theme when theme button is clicked', () => {
        render(<Header />);

        const themeToggle = screen.getByTestId('theme-toggle');
        fireEvent.click(themeToggle);

        // Theme should change from dark to light
        expect(themeToggle).toBeInTheDocument();
    });

    it('toggles mobile menu when menu button is clicked', () => {
        render(<Header />);

        const menuToggle = screen.getByTestId('mobile-menu-toggle');
        fireEvent.click(menuToggle);

        expect(screen.getByTestId('mobile-nav')).toBeInTheDocument();
    });

    it('closes mobile menu when navigation item is clicked', () => {
        render(<Header />);

        // Open mobile menu
        const menuToggle = screen.getByTestId('mobile-menu-toggle');
        fireEvent.click(menuToggle);

        // Click a navigation item
        const aboutLink = screen.getByTestId('mobile-nav-about');
        fireEvent.click(aboutLink);

        // Menu should close (mobile-nav should not be in document)
        expect(screen.queryByTestId('mobile-nav')).not.toBeInTheDocument();
    });

    it('applies scrolled styles when scrolled', () => {
        render(<Header />);

        // Simulate scroll
        Object.defineProperty(window, 'scrollY', {
            writable: true,
            value: 100
        });

        fireEvent.scroll(window);

        const header = screen.getByTestId('header');
        expect(header).toHaveClass('bg-background/80');
    });

    it('handles navigation clicks', async () => {
        const helpers = await import('@/utils/helpers');
        const scrollToSection = vi.mocked(helpers.scrollToSection);

        render(<Header />);

        const aboutNav = screen.getByTestId('nav-about');
        fireEvent.click(aboutNav);

        expect(scrollToSection).toHaveBeenCalledWith('about');
    });
});
