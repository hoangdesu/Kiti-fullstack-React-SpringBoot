import React, { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';

import LoginForm from './LoginForm';
import Dashboard from './Dashboard';


const Admin = () => {
    const [isLoggedIn, setLogin] = useState(false);

    useEffect(() => {}, [isLoggedIn]);
    return (
        <div>
            {!isLoggedIn ? <LoginForm setLogin={setLogin} /> : <Dashboard />}
            {/* // {!isLoggedIn ? <LoginForm /> : <Dashboard />} */}
        </div>
    );
};

export default Admin;
