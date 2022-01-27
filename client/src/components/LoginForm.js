import React, { useState, useRef } from 'react';
import { Button } from '@mui/material';

import loginForm from './LoginForm.module.css';
import bgImage from '../assets/admin_background.jpeg';
import logo from '../assets/kiti_logo_2.png';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const username = useRef(null);
    const password = useRef(null);

    const [loginInfo, setLoginInfo] = useState({
        message: ' ',
        color: '',
    });

    const credentials = {
        username: 'admin',
        password: '1',
    };

    const loginHandler = (event) => {
        event.preventDefault();
        if (
            username.current.value === credentials.username &&
            password.current.value === credentials.password
        ) {
            setLoginInfo({
                message: 'Login successful!',
                color: '#2fd44f',
            });
            setTimeout(() => {
                props.setLogin(true);
                props.getAccount(credentials.username);
            }, 1000);
        } else
            setLoginInfo({
                message: 'Login failed!',
                color: 'red',
            });
    };

    const Logo = (
        <img
            src={logo}
            alt=""
            style={{
                position: 'absolute',
                width: 100,
                left: 70,
                top: 40,
            }}
        />
    );

    return (
        <div
            style={{
                display: 'flex',
                width: '100vw',
                height: '100vh',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                fontFamily: 'Roboto',
            }}
        >
            <Link to="/">{Logo}</Link>
            <div className={loginForm['login-form']}>
                <h2>Admin login</h2>
                <form onSubmit={loginHandler}>
                    <div className={loginForm['input-box']}>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            required
                            ref={username}
                        />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className={loginForm['input-box']}>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            ref={password}
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <Button type="submit" variant="contained">
                        Login
                    </Button>
                </form>
                <p style={{ color: loginInfo.color }}>{loginInfo.message}</p>
            </div>
            <p>Account: admin | Password: 1</p>
        </div>
    );
};

export default LoginForm;
