import React, { useState } from 'react';

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
} from '@mui/material';

const selectOptions = [
    'Electronics',
    'Computers',
    'Cell phones',
    'Books',
    'Watches',
];

const FormDialog = () => {
    const [open, setOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(selectOptions[0]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const optionHandler = (e) => {
        setSelectedCategory(e.target.value);
        console.log(selectedCategory);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Add a new product
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New product</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add a new product to the database
                    </DialogContentText>
                    {/* <Typography variant="subtitle2" component="span">Name</Typography> */}
                    <form>
                        {/* Name */}
                        <TextField
                            label="Product name"
                            sx={{ m: 1, width: '57%' }}
                            color="secondary"
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
                        />

                        {/* Category */}
                        <TextField
                            sx={{ m: 1, width: '93%' }}
                            select
                            label="Category"
                            color="secondary"
                            defaultValue={selectOptions[0]}
                            onChange={optionHandler}
                        >
                            {selectOptions.map((category) => (
                                <MenuItem key={category} value={category}>
                                    {category}
                                </MenuItem>
                            ))}
                        </TextField>

                        {/* Date */}
                        <TextField
                            label="Date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            sx={{ m: 1, width: '93%' }}
                            color="secondary"
                            type="date"
                        />

                        {/* Seller */}
                        <TextField
                            label="Seller's name"
                            sx={{ m: 1, width: '93%' }}
                            color="secondary"
                        />

                        {/* Image */}
                        <Input
                            sx={{ m: 1, width: '93%' }}
                            color="secondary"
                            type="file"
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        variant="contained"
                        sx={{ m: 1 }}
                        color="secondary"
                        onClick={handleClose}
                    >
                        Add product
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default FormDialog;

// private Long id;
// -	    private String name; X
// -	    private double price; X
// -	    private String category; X
// -	    private double discount; X
// -	    private LocalDate addedDate; X
// -	    private double rating; (random)
// -	    private String[] images; X
// -	    private String seller; X
// -	    private int sold; (random)
