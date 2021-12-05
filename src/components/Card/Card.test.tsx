import React from 'react';
import renderer from 'react-test-renderer';
import { Card } from '.';

it('renders snapshot correctly', () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
});
