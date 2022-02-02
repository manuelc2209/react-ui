import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { Portefolio } from '..';

it('renders snapshot correctly', () => {
    const tree = renderer.create(<Portefolio />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Portefolio />, div);
    ReactDOM.unmountComponentAtNode(div);
});
