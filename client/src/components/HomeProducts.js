import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../APIconfigs.js';
import { Card, Rating, Container, Box } from '@mui/material';

import ProductCard from './ProductCard.js';

const HomeProducts = (props) => {
    const [productList, setProductList] = useState([]);
    // const [] = useState();

    useEffect(() => {
        axios
            .get(global.APIs.get.products)
            .then((res) => {
                setProductList(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [props.serverConnected]);

    // const productsGrid = <p>0 products found</p>;

    return (
        <Container maxWidth="lg" >
            <h1>Hot sales 🔥</h1>
            {/* <p>{productList.length} products found</p>
            {productList.map(product => (
                <p>{product.name}</p>
            ))} */}
            {props.serverConnected ? <ProductCard product={productList[2]} /> : 'server error'}
            </Container>
    );
};

export default HomeProducts;
