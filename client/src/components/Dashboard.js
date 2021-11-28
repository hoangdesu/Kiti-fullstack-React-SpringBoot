import React, { useState, useEffect, useCallback } from 'react';
import { Container, Box, Button } from '@mui/material';

import AddProductForm from './AddProductForm';
import AdminProducts from './AdminProducts';

const Dashboard = (props) => {
    const [dummyState, setDummyState] = useState('');
    const [productList, setProductList] = useState([]);

    const logoutHandler = () => {
        // const activeUser = JSON.parse(localStorage.getItem("activeUser"));
        localStorage.removeItem('activeUser');
        setTimeout(() => {
            props.setLogin(false);
        }, 500);
    };
    


    return (
        <Container maxWidth="xl" 
        // style={{ backgroundColor: 'pink' }}
        >
            <h1>Kiti's Admin Dashboard</h1>
            <Button variant="outlined" color="error" onClick={logoutHandler}>
                Logout
            </Button>
            <AddProductForm />
            <AdminProducts />

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
