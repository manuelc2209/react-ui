import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { disableReactDevTools } from './disableReactDevTools';
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
