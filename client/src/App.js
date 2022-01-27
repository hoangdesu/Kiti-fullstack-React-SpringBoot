import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './APIconfigs';

import Header from './components/Header';
import HomeProducts from './components/HomeProducts';
import Footer from './components/Footer';

import { Snackbar } from '@mui/material';

const App = () => {
    const [toastOpen, setToastOpen] = useState(false);
    const [serverConnected, setServerConnected] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        axios
            .get(global.APIs.home)
            .then((res) => {
                setServerConnected(true);
                setToastOpen(true);
            })
            .catch((e) => {
                setServerConnected(false);
                setToastOpen(true);
            });
    }, []);

    const getSearchValue = (searchVal) => {
        setSearchValue(searchVal);
    };

    return (
        <div className="App" style={{ backgroundColor: '#F5F5FA' }}>
            <Header getSearchValue={getSearchValue} />

            <HomeProducts
                serverConnected={serverConnected}
                searchValue={searchValue}
            />

            {/* <TestComp /> */}
            <Snackbar
                open={toastOpen}
                autoHideDuration={3000}
                onClose={(e) => setToastOpen(false)}
                message={
                    serverConnected
                        ? 'Server connected!'
                        : 'Error: no connection to server'
                }
            ></Snackbar>
            <Footer />
        </div>
    );
};

export default App;
