import { BrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './app/App';
import reportWebVitals from './reportWebVitals';

import "./i18n"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
   </BrowserRouter>
);
reportWebVitals();
