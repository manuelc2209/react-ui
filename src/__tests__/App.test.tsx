import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/test-utils';
import App from '@/App';

describe('App', () => {
    it('renders without crashing', () => {
        render(<App />);
        expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('renders main sections', () => {
        render(<App />);
        expect(screen.getByTestId('hero-section')).toBeInTheDocument();
        expect(screen.getByTestId('about-section')).toBeInTheDocument();
        expect(screen.getByTestId('skills-section')).toBeInTheDocument();
        expect(screen.getByTestId('experience-section')).toBeInTheDocument();
    });

    it('renders footer', () => {
        render(<App />);
        expect(screen.getByTestId('footer')).toBeInTheDocument();
    });
});
