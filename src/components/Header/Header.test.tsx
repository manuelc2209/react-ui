import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { Header } from '..';

it('renders snapshot correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
});
