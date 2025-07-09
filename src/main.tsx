import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider, MantineTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './index.css';
import App from './App';

const theme: Partial<MantineTheme> = {
    primaryColor: 'blue',
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    headings: {
        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif'
    }
} as any;

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
    <StrictMode>
        <MantineProvider theme={theme}>
            <Notifications />
            <App />
        </MantineProvider>
    </StrictMode>
);
