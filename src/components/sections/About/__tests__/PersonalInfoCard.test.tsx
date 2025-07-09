import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/test-utils';
import { PersonalInfoCard } from '../PersonalInfoCard';

describe('PersonalInfoCard', () => {
    it('renders personal information', () => {
        render(<PersonalInfoCard />);

        expect(screen.getByText('Manuel Correia')).toBeInTheDocument();
        expect(screen.getByText('Frontend Web Developer & Team Leader')).toBeInTheDocument();
        expect(screen.getByText('Coimbra, Portugal')).toBeInTheDocument();
    });

    it('renders contact links', () => {
        render(<PersonalInfoCard />);

        const resumeLink = screen.getByRole('link', { name: /resume/i });
        const linkedinLink = screen.getByRole('link', { name: /linkedin/i });

        expect(resumeLink).toBeInTheDocument();
        expect(linkedinLink).toBeInTheDocument();
    });

    it('renders availability badges', () => {
        render(<PersonalInfoCard />);

        expect(screen.getByText('Available for hire')).toBeInTheDocument();
        expect(screen.getByText('Remote friendly')).toBeInTheDocument();
    });
});
