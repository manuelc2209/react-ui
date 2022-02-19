import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { Card } from '..';

it('renders snapshot correctly', () => {
    const tree = renderer
        .create(
            <BrowserRouter>
                <Card />
            </BrowserRouter>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
