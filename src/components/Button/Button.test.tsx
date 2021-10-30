import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Button } from '.';

it('renders snapshot correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
});
