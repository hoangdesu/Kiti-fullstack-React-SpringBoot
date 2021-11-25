import React, { useState, useEffect } from 'react';

const Header = () => {
    // const products = [];

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        // fetch("http://localhost:8080/products")
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setProductList(data);
        //     })
        (async () => {
            const res = await fetch('http://localhost:8080/products');
            const data = await res.json();
            setProductList(data);
        })();
    }, []);
    
    const newList = [];

    for (let i = productList.length - 1; i >= 0; i--) {
        newList.push(productList[i]);
    }

    return (
        <div>
            <h1>Header</h1>
            {newList.map((product) => {
                return <p key={Math.random()}>{product}</p>;
            })}
        </div>
    );
};

export default Header;
