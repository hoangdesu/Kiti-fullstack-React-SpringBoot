import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import Admin from './components/Admin';
import NotFound from './components/NotFound';

ReactDOM.render(
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>,
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/admin" element={<Admin />} />
            {/* <Route path="invoices" element={<Invoices />} /> */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
