import React, { useState, useEffect } from 'react';
// var Rating = require('react-rating');

// import Rating from 'react-rating';
import {Rating } from '@mui/material';


const TestComp = () => {
    const [content, setContent] = useState('');
    const url = 'http://localhost:8765/test';

    // useEffect(() => {
        

    // }, [])

    const fetchTest = () => {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data)
        })    

        // fetch(url, {
        //     method: 'GET',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     }}).then(res => res.text()).then(data => console.log(data));
            
    };
    
    return (
        <div>
            <h2>Test component</h2>
            <button onClick={fetchTest}>fetch test</button>

            {/* rating componennt */}
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} onChange={e=>setContent(e.target.value)} />
            <p>Rating: {content}</p>
            
        </div>
    )
}

export default TestComp
