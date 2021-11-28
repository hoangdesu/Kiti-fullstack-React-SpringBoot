import React, { useState, useEffect, useRef } from 'react';
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
    MenuItem,
    Snackbar
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
    const [toast, setToast] = useState({
        open: false,
        message: ''
    });

    const inpName = useRef(null);
    const inpPrice = useRef(null);
    const inpDiscount = useRef(null);
    const inpCategory = useRef(null);
    const inpDate = useRef(null);
    const inpSeller = useRef(null);
    const inpImages = useRef(null);

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

    // DELETE ITEM
    const deleteHandler = () => {
        // setDeleteDialogOpen(true);
        console.log('DEL', global.APIs.delete.product + focusedProduct.id);
        axios
            .delete(global.APIs.delete.product + focusedProduct.id)
            .then((res) => {
                console.log(res);
                setDeleteDialogOpen(false);
                setToast({ open: true, message: "Item has been deleted successfully from the database! The page will now be reloaded."})
                setTimeout(() => window.location.reload(false), 2000);

            });
    };

    // --- EDIT FORM, SAVE PRODUCT BACK TO DB
    const saveProductHandler = () => {
        console.log('put item:', global.APIs.put.products + focusedProduct.id);
        axios
            .put(global.APIs.put.products + focusedProduct.id, null, {
                params: {
                    name: inpName.current.value,
                    category: inpCategory.current.value,
                    price: parseFloat(inpPrice.current.value),
                    discount: parseFloat(inpDiscount.current.value),
                    image: inpImages.current.value,
                },
            })
            .then((res) => {
                console.log('Item info updated!');
                console.log(res);
                setToast({ open: true, message: "Item has been updated successfully in the database! The page will now be reloaded."})
                setTimeout(() => window.location.reload(false), 2000);
                
            })
            .catch((e) => {
                console.log('PUT error:', e);
            });
        setEditDialogOpen(false);
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
                            // editHandler(product.id);
                            setEditDialogOpen(true);
                            setFocusedProduct(product);
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
                        <th>id</th>
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
            <Dialog
                open={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
            >
                <DialogTitle>
                    <b>Confirm Product Delete</b>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete "{focusedProduct.name}"
                        from the database? This process cannot be undone!
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
            <Dialog
                open={editDialogOpen}
                onClose={() => setEditDialogOpen(false)}
            >
                <DialogTitle>
                    <b>Editing a product</b>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Editing: "{focusedProduct.name}"
                    </DialogContentText>

                    {/* Name */}
                    <TextField
                        label="Product name"
                        sx={{ m: 1, width: '57%' }}
                        color="secondary"
                        inputRef={inpName}
                        defaultValue={focusedProduct.name}
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
                        inputRef={inpPrice}
                        defaultValue={focusedProduct.price}
                    />

                    {/* Category */}
                    <TextField
                        sx={{ m: 1, width: '57%' }}
                        select
                        label="Category"
                        color="secondary"
                        defaultValue={focusedProduct.category}
                        inputRef={inpCategory}
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
                        inputRef={inpDiscount}
                        defaultValue={focusedProduct.discount}
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
                        inputRef={inpDate}
                        defaultValue={focusedProduct.addedDate}
                    />

                    {/* Seller */}
                    <TextField
                        label="Seller's name"
                        sx={{ m: 1, width: '93%' }}
                        color="secondary"
                        inputRef={inpSeller}
                        defaultValue={focusedProduct.seller}
                    />

                    {/* Image */}

                    <TextField
                        label="Image URL"
                        sx={{ m: 1, width: '93%' }}
                        color="secondary"
                        inputRef={inpImages}
                        defaultValue={focusedProduct.image}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setEditDialogOpen(false)}>
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ m: 1 }}
                        color="secondary"
                        onClick={saveProductHandler}
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={toast.open}
                autoHideDuration={2000}
                onClose={(e) => setToast.open(false)}
                message={toast.message}
            ></Snackbar>
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
