import React, { useState, useEffect, useCallback } from 'react';
import { Container, Box, Button } from '@mui/material';

import AddProductForm from './AddProductForm';
import AdminProducts from './AdminProducts';
import Footer from './Footer';

const Dashboard = (props) => {
    const logoutHandler = () => {
        // const activeUser = JSON.parse(localStorage.getItem("activeUser"));
        localStorage.removeItem('activeUser');
        setTimeout(() => {
            props.setLogin(false);
        }, 500);
    };

    return (
        <Container
            maxWidth="xl"
            // style={{ backgroundColor: 'pink' }}
        >
            <h1
                style={{
                    backgroundColor: '#f7e3e1',
                    textAlign: 'center',
                    padding: '10px',
                }}
            >
                Kiti's Admin Dashboard
            </h1>
            <div
                style={{
                    display: 'flex',
                    // backgroundColor: 'red',
                    justifyContent: 'space-between',
                }}
            >
                <AddProductForm />
                <Button
                    variant="outlined"
                    color="error"
                    onClick={logoutHandler}
                >
                    Logout
                </Button>
            </div>
            <AdminProducts />
            <Footer />
        </Container>
    );
};

export default Dashboard;

//  {/* {
// "added_date": "26-02-1995",
// "name": "logitech",
// "price": 69.96,
// "rating": 3
// } */}
