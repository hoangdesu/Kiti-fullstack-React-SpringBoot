import React, { useState, useRef } from 'react';
import axios from 'axios';
import '../APIconfigs.js';

import {
    DialogTitle,
    DialogContentText,
    DialogContent,
    Dialog,
    TextField,
    Button,
    DialogActions,
    Typography,
    InputLabel,
    InputAdornment,
    Select,
    MenuItem,
    Input,
    Snackbar,
} from '@mui/material';

const selectOptions = [
    'Electronics',
    'Computers',
    'Cell phones',
    'Books',
    'Watches',
];

const getToday = () => {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
};

const AddProductForm = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [toastOpen, setToastOpen] = useState(false);
    const [serverMsg, setServerMsg] = useState('');

    const inpName = useRef(null);
    const inpPrice = useRef(null);
    const inpDiscount = useRef(null);
    const inpCategory = useRef(null);
    const inpDate = useRef(null);
    const inpSeller = useRef(null);
    const inpImages = useRef(null);

    /* HANDLERS */
    const handleClickOpen = () => {
        setDialogOpen(true);
    };

    const handleClose = () => {
        setDialogOpen(false);
    };

    const addProductHandler = () => {
        const data = {
            name: inpName.current.value || '',
            price: parseFloat(inpPrice.current.value) || 0,
            category: inpCategory.current.value,
            discount: parseFloat(inpDiscount.current.value) || 0,
            addedDate:
                inpDate.current.value === ''
                    ? getToday()
                    : inpDate.current.value,
            rating: Math.floor(Math.random() * 6),
            image: inpImages.current.value,
            seller: inpSeller.current.value,
            stock: Math.floor(Math.random() * 1000),
        };
        console.log(data);

        const sendPostRequest = (data) => {
            const header = {};
            axios
                .post(global.APIs.post.products, data, header)
                .then((res) => {
                    // console.log(`Server's response: "${res.data}"`);
                    setServerMsg(res.data);
                    setToastOpen(true);
                })
                .catch((e) => {
                    // console.log(e);
                    setServerMsg('Error: connection refused');
                    setToastOpen(true);
                });
        };

        sendPostRequest(data);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Add a new product
            </Button>
            <Dialog open={dialogOpen} onClose={handleClose}>
                <DialogTitle>
                    <b>New product</b>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add a new product to the database
                    </DialogContentText>

                    {/* Name */}
                    <TextField
                        label="Product name"
                        sx={{ m: 1, width: '57%' }}
                        color="secondary"
                        inputRef={inpName}
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
                    />

                    {/* Category */}
                    <TextField
                        sx={{ m: 1, width: '57%' }}
                        select
                        label="Category"
                        color="secondary"
                        defaultValue={selectOptions[0]}
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
                    />

                    {/* Seller */}
                    <TextField
                        label="Seller's name"
                        sx={{ m: 1, width: '93%' }}
                        color="secondary"
                        inputRef={inpSeller}
                    />

                    {/* Images */}
                    <Input
                        sx={{ m: 1, width: '93%' }}
                        color="secondary"
                        type="file"
                        inputRef={inpImages}
                        inputProps={{ multiple: true }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        variant="contained"
                        sx={{ m: 1 }}
                        color="secondary"
                        onClick={addProductHandler}
                    >
                        Add product
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={toastOpen}
                autoHideDuration={2000}
                onClose={(e) => setToastOpen(false)}
                message={serverMsg}
            ></Snackbar>
        </div>
    );
};

export default AddProductForm;

// fields=
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
