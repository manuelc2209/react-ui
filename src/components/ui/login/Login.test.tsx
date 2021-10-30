import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Login } from '.';

it('renders snapshot correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
    ReactDOM.unmountComponentAtNode(div);
});
