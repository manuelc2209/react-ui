import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';

import { Input } from '.';

it('renders snapshot correctly', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
    const el = render(<Input />);
    expect(el).toMatchSnapshot();
});
