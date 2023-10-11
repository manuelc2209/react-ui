import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { disableReactDevTools } from './disableReactDevTools';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyle />
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

if (process.env.NODE_ENV === 'production') disableReactDevTools();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
