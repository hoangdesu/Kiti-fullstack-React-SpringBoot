import React, { useState, useEffect } from 'react';
import '../APIconfigs.js';
import logo from '../assets/kiti_logo_2.png';
import { Container, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';

const Header = () => {
    const [productList, setProductList] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const res = await fetch(`${global.APIs.PRODUCTS}`);
    //             const data = await res.json();
    //             console.log('FETCHED', data);
    //             setProductList(data);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     })();
    // }, []);

    return (
        <Container
            maxWidth
            sx={{
                display: 'flex',
                backgroundColor: '#2797FC',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                p: '20px 100px',
            }}
        >
            <img src={logo} alt="" width="100px" />
            <div style={{ display: 'flex' }}>
                <input
                    style={{
                        width: '300px',
                        height: '10px',
                        borderRadius: '4px',
                        padding: '15px',
                        fontSize: '1rem',
                    }}
                />
                <Button variant="contained">
                    <SearchIcon />
                    Search
                </Button>
            </div>
            <Link to="/admin" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <Button variant="contained">
                    <PersonOutlineIcon />
                    Admin login
                </Button>
            </Link>
            {productList.map((product, i) => {
                return <p key={i}>{product.name}</p>;
            })}
            {/* <p>{productList.length > 0 ? '' : 'Error connecting to server'}</p> */}
        </Container>
    );
};

export default Header;
