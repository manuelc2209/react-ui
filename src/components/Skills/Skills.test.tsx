import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Skills } from '..';

it('renders snapshot correctly', () => {
    const tree = renderer.create(<Skills />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Skills />, div);
    ReactDOM.unmountComponentAtNode(div);
});
