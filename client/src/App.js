import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './APIconfigs';

import Header from './components/Header';
import TestComp from './components/TestComp';
import APIconfigs from './APIconfigs';

import { Snackbar } from '@mui/material';

const App = () => {
    const [toastOpen, setToastOpen] = useState(false);
    const [serverConnected, setServerConnected] = useState(false);
    // const [] = useState();
    // const [] = useState();

    useEffect(() => {
        axios
            .get(APIconfigs.get.server)
            .then((res) => {
                if (res.status === 200) {
                    setServerConnected(true);
                    setToastOpen(true);
                }
            })
            .catch((e) => {
                setServerConnected(false);
                setToastOpen(true);
            });
    }, [serverConnected]);

    return (
        <div className="App">
            <Header />
            <Snackbar
                open={toastOpen}
                autoHideDuration={2000}
                onClose={(e) => setToastOpen(false)}
                message={serverConnected ? "Connected to server!" : "Error: no connection to server"}
            ></Snackbar>
        </div>
    );
};

export default App;
