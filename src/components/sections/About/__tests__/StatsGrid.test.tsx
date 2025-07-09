import * as React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/test-utils';
import { StatsGrid } from '../StatsGrid';

describe('StatsGrid', () => {
    it('renders all stats', () => {
        render(<StatsGrid />);

        expect(screen.getByText('7+')).toBeInTheDocument();
        expect(screen.getByText('Years Experience')).toBeInTheDocument();

        expect(screen.getByText('10+')).toBeInTheDocument();
        expect(screen.getByText('Projects Completed')).toBeInTheDocument();

        expect(screen.getByText('20+')).toBeInTheDocument();
        expect(screen.getByText('Technologies Mastered')).toBeInTheDocument();

        expect(screen.getByText('15+')).toBeInTheDocument();
        expect(screen.getByText('Team Members Led')).toBeInTheDocument();
    });

    it('renders stats in cards', () => {
        render(<StatsGrid />);

        const cards = screen
            .getAllByRole('generic')
            .filter((el) => el.className.includes('p-6') && el.className.includes('hover:shadow-lg'));

        expect(cards).toHaveLength(4);
    });
});
