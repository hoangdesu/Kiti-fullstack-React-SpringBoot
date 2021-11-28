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
                p: '10px 100px',
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
                        border: 'none',
                        boxShadow: '1px 1px 3px 0px #222'
                    }}
                    placeholder="Can I have HD already? 👀"
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
        </Container>
    );
};

export default Header;
