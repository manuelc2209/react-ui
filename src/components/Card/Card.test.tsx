import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Card } from './Card';

it('renders snapshot correctly', () => {
    const { container } = render(
        <BrowserRouter>
            <Card />
        </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
});
