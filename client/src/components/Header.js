import React, { useState, useEffect } from 'react';
import '../APIconfigs.js';

const Header = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${global.APIs.PRODUCTS}`);
                const data = await res.json();
                console.log('FETCHED', data);
                setProductList(data);
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    return (
        <div>
            <h1>Header</h1>
            {productList.map((product, i) => {
                return <p key={i}>{product.name}</p>;
            })}
            <p>{productList.length > 0 ? '' : 'Error connecting to server'}</p>
        </div>
    );
};

export default Header;
