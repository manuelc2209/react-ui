import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { App } from './App';

const AppComponent = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

it('renders snapshot correctly', () => {
    const tree = renderer.create(AppComponent).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(AppComponent, div);
    ReactDOM.unmountComponentAtNode(div);
});
