import React, { useState } from 'react';
import { Container, Button } from '@mui/material';

import loginForm from './LoginForm.module.css';
import bgImage from '../assets/admin_background.jpeg';

const LoginForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginMsg, setLoginMsg] = useState('');

    const credentials = {
        username: "admin",
        password: "admin",
    }

    const loginHandler = (event) => {
        event.preventDefault();
        if (username === credentials.username && password === credentials.password) props.setLogin(true);
        else setLoginMsg('Login failed!');
    };

    return (
        <Container
            maxWidth="xl"
            sx={{
                display: 'flex',
                width: '100vw',
                height: '100vh',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
            }}
        >
            <div className={loginForm['login-form']}>
                <h2>Admin login</h2>
                <form onSubmit={loginHandler}>
                    <div className={loginForm['input-box']}>
                        <input
                            type="text"
                            value={username}
                            name="username"
                            id="username"
                            required
                            onChange={e => setUsername(e.target.value)}
                        />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className={loginForm['input-box']}>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            onChange={e => setPassword(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <Button type="submit" variant="contained">
                        Login
                    </Button>
                    <p style={{ color: "red" }}>{loginMsg}</p>
                </form>
            </div>
        </Container>
    );
};

export default LoginForm;
