import React from 'react';
import ReactDOM from "react-dom";
import StyleContext from 'isomorphic-style-loader/StyleContext';

import App from './components/App';

declare global {
    interface Window { __STATE__: object; }
}

const data = window.__STATE__;
const container = document.getElementById('root');

const insertCss = (...styles: any[]) => {
    const removeCss = styles.map(style => style._insertCss())
    return () => removeCss.forEach(dispose => dispose())
}

ReactDOM.render(
    <StyleContext.Provider value={{ insertCss }}>
        <App {...data} />
    </StyleContext.Provider>, container);