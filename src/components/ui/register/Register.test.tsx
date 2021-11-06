import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Register } from '.';

it('renders snapshot correctly', () => {
    const tree = renderer.create(<Register />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Register />, div);
    ReactDOM.unmountComponentAtNode(div);
});
