import { render } from '@testing-library/react';
import React from 'react';
import { HashRouter } from 'react-router-dom';

import { App } from './App';

const AppComponent = (
    <HashRouter>
        <App />
    </HashRouter>
);

vi.mock('nanoid', () => {
    return { nanoid: () => '' };
});

const mockedUsedNavigate = vi.fn();

vi.mock('react-router', () => ({
    useRoutes: () => mockedUsedNavigate
}));

it('renders without crashing', () => {
    const { container } = render(AppComponent);
    expect(container).toMatchSnapshot();
});
