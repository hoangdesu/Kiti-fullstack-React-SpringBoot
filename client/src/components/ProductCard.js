import React from 'react';
import styled from '@emotion/styled';

import { Card, Rating, Container, Box } from '@mui/material';

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15px;
    width: 200px;
    border-radius: 1px;
    // height: 300;
    // background-color: pink;
    // border: 1px solid #ddd;
    transition: 0.1s all;

    &:hover {
        box-shadow: 0px 0px 5px 0px #aaa;
        // color: red;
        cursor: pointer;
    }
`;

const ProductCard = ({ product }) => {
    return (
        <StyledCard>
            <img src={product.image} width="150px" alt=""></img>
            <p>
                {product.name.length > 45
                    ? product.name.slice(0, 45) + '...'
                    : product.name}
            </p>
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Rating
                    defaultValue={product.rating}
                    precision={0.5}
                    onChange={(e) => {}}
                    size="small"
                />
                <p>Stock: {product.stock}</p>
            </div>
                <p><b>{product.price.toLocaleString('vi-VI', {style: 'currency', currency: 'VND'})}</b></p>
        </StyledCard>
    );
};

export default ProductCard;

// private Long id;
// private String name;
// private String category;
// private double price;
// private double discount;
// private LocalDate addedDate;
// private double rating;
// private String image;
// private String seller;
// private int stock;
