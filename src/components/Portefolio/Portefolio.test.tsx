import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';

import { Portefolio } from '.';

it('renders snapshot correctly', () => {
    const tree = renderer.create(<Portefolio />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
    const el = render(<Portefolio />);
    expect(el).toMatchSnapshot();
});
