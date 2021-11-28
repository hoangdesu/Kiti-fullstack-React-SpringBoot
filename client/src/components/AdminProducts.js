import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../APIconfigs.js';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    Dialog,
    DialogActions,
    Button,
    DialogContent,
    TextField,
    DialogTitle,
    DialogContentText,
    InputAdornment,
    MenuItem
} from '@mui/material';


const selectOptions = [
    'Electronics',
    'Computers',
    'Cell phones',
    'Books',
    'Watches',
];

const AdminProducts = () => {
    const [productList, setProductList] = useState([]);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [focusedProduct, setFocusedProduct] = useState({});

    useEffect(() => {
        axios
            .get(global.APIs.get.products)
            .then((res) => {
                setProductList(res.data);
                console.log('Product list loaded');
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    const editHandler = (pid) => {
        console.log('edit', pid);
    };

    const deleteHandler = () => {
        setDeleteDialogOpen(true);
        console.log("DEL", global.APIs.delete.product + focusedProduct.id);
        axios.delete(global.APIs.delete.product + focusedProduct.id)
            .then(res => {
                console.log(res);
                setDeleteDialogOpen(false);
                window.location.reload(false);
            })
    };

    // MAIN PRODUCT TABLE CONTENT
    let tableContent;
    if (productList.length !== 0) {
        tableContent = productList.map((product) => (
            <tr>
                <td>{product.id}</td>
                <td>
                    <img src={product.image} alt="" width={40}></img>
                </td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>
                    {product.price.toLocaleString('vi-VI', {
                        style: 'currency',
                        currency: 'VND',
                    })}
                </td>
                <td>{product.discount}%</td>
                <td>{product.addedDate}</td>
                <td>{product.rating}</td>
                <td>{product.seller}</td>
                <td>{product.stock}</td>
                <td>
                    <button
                        onClick={() => {
                            editHandler(product.id);
                        }}
                    >
                        <EditIcon />
                    </button>
                    <button
                        onClick={() => {
                            setDeleteDialogOpen(true);
                            setFocusedProduct(product);
                        }}
                    >
                        <DeleteIcon />
                    </button>
                </td>
            </tr>
        ));
    }

    return (
        <div>
            <h1>Inventory</h1>
            <p>Total: {productList.length} products</p>
            <table
                border={1}
                style={{
                    fontSize: '0.9rem',
                }}
            >
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product name</th>
                        <th>Categories</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Added date</th>
                        <th>Rating</th>
                        <th>Seller</th>
                        <th>In stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{tableContent}</tbody>
            </table>

            {/* DELETE CONFIRM DIALOG */}
            <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
                <DialogTitle>
                    <b>Confirm Product Delete</b>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete "{focusedProduct.name}" from the database?
                        This process cannot be undone!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteDialogOpen(false)}>
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ m: 1 }}
                        color="error"
                        onClick={deleteHandler}
                    >
                        Delete Now!
                    </Button>
                </DialogActions>
            </Dialog>

            {/* INPUT FORM DIALOG */}
            <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
            <DialogContent>
                    <DialogContentText>
                        Add a new product to the database
                    </DialogContentText>

                    {/* Name */}
                    <TextField
                        label="Product name"
                        sx={{ m: 1, width: '57%' }}
                        color="secondary"
                        // inputRef={inpName}
                        required
                    />

                    {/* Price */}
                    <TextField
                        label="Price"
                        color="secondary"
                        sx={{ m: 1, width: '33%' }}
                        type="number"
                        min="1"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    ₫
                                </InputAdornment>
                            ),
                            inputProps: { min: 0 },
                        }}
                        required
                        // inputRef={inpPrice}
                    />

                    {/* Category */}
                    <TextField
                        sx={{ m: 1, width: '57%' }}
                        select
                        label="Category"
                        color="secondary"
                        defaultValue={selectOptions[0]}
                        // inputRef={inpCategory}
                    >
                        {selectOptions.map((category) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </TextField>

                    {/* Discount */}
                    <TextField
                        label="Discount"
                        color="secondary"
                        sx={{ m: 1, width: '33%' }}
                        type="number"
                        min="1"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    %
                                </InputAdornment>
                            ),
                            inputProps: { min: 0, max: 100 },
                        }}
                        // inputRef={inpDiscount}
                    />

                    {/* Date */}
                    <TextField
                        label="Date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{ m: 1, width: '93%' }}
                        color="secondary"
                        type="date"
                        // inputRef={inpDate}
                    />

                    {/* Seller */}
                    <TextField
                        label="Seller's name"
                        sx={{ m: 1, width: '93%' }}
                        color="secondary"
                        // inputRef={inpSeller}
                    />

                    {/* Image */}
                    {/* <Input
                        sx={{ m: 1, width: '93%' }}
                        color="secondary"
                        type="file"
                        inputRef={inpImages}
                        inputProps={{ multiple: true }}
                    /> */}
                    <TextField
                        label="Image URL"
                        sx={{ m: 1, width: '93%' }}
                        color="secondary"
                        // inputRef={inpImages}
                    />
                </DialogContent>
            </Dialog>
                

        </div>
    );
};

export default AdminProducts;

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
