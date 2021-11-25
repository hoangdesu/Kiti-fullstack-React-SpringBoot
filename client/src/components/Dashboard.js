import React, { useState, useEffect, useCallback } from 'react';
import { Container, Box, Button } from '@mui/material';

const Dashboard = (props) => {
    const [dummyState, setDummyState] = useState('');
    const [productList, setProductList] = useState([])

    const logoutHandler = () => {
        // const activeUser = JSON.parse(localStorage.getItem("activeUser"));
        localStorage.removeItem("activeUser");
        setTimeout(() => {
            props.setLogin(false);
        }, 500)
    };  

    const sendNud35 = () => {
        //  {/* {
    // "added_date": "26-02-1995",
    // "name": "logitech",
    // "price": 69.96,
    // "rating": 3
    // } */}
        // {}
        const dataBody = 
            {
                added_date: new Date(),
                name: "razer",
                price: 69.96 + Math.random() * 1000,
                category: "mouse",
                rating: parseInt(Math.round(Math.random() * 5 + 1))
            }
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataBody)
        };
        fetch('http://localhost:8080/api/products/add', requestOptions)
            .then(res => res.json())
            .then(data => {
                setDummyState(data);
                console.log(data);
            })
        fetch('http://localhost:8080/api/products/')
            .then(res => res.json())
            .then(data => {
                setProductList(data);
            })
    };


    return (
        <Container maxWidth="xl" style={{backgroundColor: 'pink'}}>
            <h1>Dashboard</h1>
            <form action="http://localhost:8080/api/products/add" method="POST">
            
                <button>Submit</button>
            </form>
            <Button variant="contained" onClick={sendNud35}>SEND NUD35</Button>
            <p>{dummyState}</p>
            {productList.map(pro => (<p>{pro.id}. {pro.name}. {pro.category}. {pro.price} / {pro.rating}</p>))}
            <button onClick={logoutHandler}>Logout</button>

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