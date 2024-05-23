import { render } from '@testing-library/react';
import React from 'react';
import { HashRouter } from 'react-router-dom';

import { App } from './App';

const AppComponent = (
    <HashRouter>
        <App />
    </HashRouter>
);

jest.mock('nanoid', () => {
    return { nanoid: () => '' };
});

const mockedUsedNavigate = jest.fn();

jest.mock('react-router', () => ({
    ...(jest.requireActual('react-router') as any),
    useRoutes: () => mockedUsedNavigate
}));

it('renders without crashing', () => {
    const { container } = render(AppComponent);
    expect(container).toMatchSnapshot();
});
