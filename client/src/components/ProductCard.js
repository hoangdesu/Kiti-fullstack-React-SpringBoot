import React from 'react';
import styled from '@emotion/styled';

import { Card, Rating, Chip } from '@mui/material';

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 12px;
    margin: 10px;
    width: 200px;
    font-size: 0.9rem;
    border-radius: 4px;
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
            <img src={product.image} width="100%" height="250px" alt=""></img>
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
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <p
                    style={{
                        color: 'red',
                        fontWeight: 'bold',
                    }}
                >
                    {product.price.toLocaleString('vi-VI', {
                        style: 'currency',
                        currency: 'VND',
                    })}
                </p>
                <Chip label={product.discount + '%'}  />
            </div>
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
