import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../APIconfigs.js';
import {
    Box,
    Container,
    LinearProgress,
    Button,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

import ProductCard from './ProductCard.js';

const HomeProducts = (props) => {
    const [productList, setProductList] = useState([]);
    const [selectOption, setSelectOption] = useState('All categories');
    const [filteredList, setFilteredList] = useState(productList);

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

    useEffect(() => {
        setFilteredList(productList);
    }, [productList]);

    // set filter list
    useEffect(() => {
        if (selectOption === 'all') {
            setFilteredList(productList);
        } else {
            setFilteredList(
                productList.filter(
                    (product) => product.category === selectOption
                )
            );
        }
    }, [selectOption, productList]);

    useEffect(() => {
        console.log('SEARCH VALUE: ', props.searchValue);
        const searchedList = productList.filter((product) => {
            if (product.name.toLowerCase().includes(props.searchValue))
                return product;
            return null;
        });
        console.log('SEARCHED LIST: ', searchedList);
        setFilteredList(searchedList);
    }, [props.searchValue, productList]);

    const selectChangeHandler = (e) => {
        setSelectOption(e.target.value);
    };

    console.log('FILTERED', filteredList);
    console.log(selectOption);

    // --- MAIN CONTENT TO DISPLAY ITEMS ---
    let content;
    if (props.serverConnected) {
        if (filteredList.length === 0) {
            content = (
                <p>
                    Sorry, we cannot find any products for "{props.searchValue}"
                    :(
                </p>
            );
        } else {
            content = filteredList.map((product, i) => (
                <ProductCard key={i} product={product} />
            ));
        }
    } else {
        content = content = (
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
                <p>loading...</p>
            </Box>
        );
    }

    return (
        <Container maxWidth="xl">
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: '20px 0',
                    padding: '0px 20px',
                    backgroundColor: '#fff',
                    borderRadius: '5px',
                    boxShadow: '0 0 5px 0 #ddd',
                }}
            >
                <h1>Hot Sales 🔥</h1>
                <div>
                    <Button
                        variant="outlined"
                        color="success"
                        startIcon={<ClearIcon />}
                        sx={{ m: 2 }}
                        onClick={() => {setFilteredList(productList)}}
                    >
                        Clear search
                    </Button>
                    <select
                        style={{
                            // border: 'none',
                            height: '50px',
                            padding: '15px',
                            borderRadius: 5,
                        }}
                        onChange={selectChangeHandler}
                        defaultValue={selectOption}
                    >
                        <option value="all">All categories</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Computers">Computers</option>
                        <option value="Cell phones">Cell phones</option>
                        <option value="Books">Books</option>
                        <option value="Watches">Watches</option>
                    </select>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    margin: '20px 0',
                    // padding: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '5px',
                    boxShadow: '0 0 5px 0 #ddd',
                }}
            >
                {content}
            </div>
        </Container>
    );
};

export default HomeProducts;
