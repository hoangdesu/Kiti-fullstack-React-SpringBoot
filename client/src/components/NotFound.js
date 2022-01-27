import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@mui/material';

const NotFound = () => {
    return (
        <Container maxWidth="sm">
            <p>Not found :(</p>
            <Link to="/">Go back</Link>
        </Container>
    );
};

export default NotFound;
