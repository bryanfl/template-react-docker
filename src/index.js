import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { App } from './app/App';

createRoot(
    document.getElementById('root')
).render(
    // <React.StrictMode>
        <App></App>
    // </React.StrictMode>
)
