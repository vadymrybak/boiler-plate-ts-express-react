import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

declare global {
    interface Window { __STATE__: object; }
}

const data = window.__STATE__;
const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App {...data} />);