import React, { useState, useEffect, useCallback } from 'react';
import { Container, Box } from '@mui/material';

const Dashboard = (props) => {
    const [] = useState();

    const logoutHandler = () => {
        // const activeUser = JSON.parse(localStorage.getItem("activeUser"));
        localStorage.removeItem("activeUser");
        setTimeout(() => {
            props.setLogin(false);
        }, 1000)
    };  


    return (
        <Container maxWidth="lg" style={{backgroundColor: 'red'}}>
            <h1>Dashboard</h1>
            <button onClick={logoutHandler}>Logout</button>
        </Container>
    );
};

export default Dashboard;
