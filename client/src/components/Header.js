import React, { useState, useEffect } from 'react';
import '../APIconfigs.js';
import logo from '../assets/kiti_logo_2.png';
import { Container, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';

const Header = ({ getSearchValue }) => {
    // const [productList, setProductList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const searchBoxHandler = (e) => {
        setSearchValue(e.target.value);
    };

    const searchBoxEnterHandler = (e) => {
        if (e.key === 'Enter') {
            searchButtonHandler();
        }
    };

    const searchButtonHandler = () => {
        console.log(searchValue);
        getSearchValue(searchValue);
        setSearchValue('');
    };

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
                {/* search box */}
                <input
                    style={{
                        width: '300px',
                        height: '10px',
                        borderRadius: '4px',
                        padding: '15px',
                        fontSize: '1rem',
                        border: 'none',
                        boxShadow: '1px 1px 3px 0px #222',
                    }}
                    placeholder="Can I have full HD? 👀"
                    value={searchValue}
                    onChange={searchBoxHandler}
                    onKeyPress={searchBoxEnterHandler}
                />
                <Button variant="contained" onClick={searchButtonHandler}>
                    <SearchIcon />
                    Search
                </Button>
            </div>
            <Link
                to="/admin"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
                <Button variant="contained">
                    <PersonOutlineIcon />
                    Admin login
                </Button>
            </Link>
        </Container>
    );
};

export default Header;
