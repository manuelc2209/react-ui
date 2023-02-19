import { render } from '@testing-library/react';
import React from 'react';

import { Header } from '.';

it('renders snapshot correctly', () => {
    const tree = render(<Header />);
    expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
    const el = render(<Header />);
    expect(el).toMatchSnapshot();
});
