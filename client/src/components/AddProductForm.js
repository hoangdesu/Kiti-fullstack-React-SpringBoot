import React, { useState, useRef } from 'react';
import * as MUI from '@mui/material';

import axios from 'axios';

const AddProductForm = () => {
    const [open, setOpen] = useState(false);
    const [openToast, setOpenToast] = React.useState(false);
    const [productInfo, setProductInfo] = useState({
        name: '',
        category: '',
        price: '',
    });
    
    const inputName = useRef(null);
    const inputCategory = useRef(null);
    const inputPrice = useRef(null);

    // getModalStyle is not a pure function, we roll the style only on the first render
    //   const [modalStyle] = useState(getModalStyle);
    //   const [modalData, setData] = useState();

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log('PRODUCT DATA FROM FORM:');
        const data = {
            name: inputName.current.value, 
            category:inputCategory.current.value, 
            price: parseFloat(inputPrice.current.value)
        };
        console.log(data)
        axios.post('http://localhost:8765/api/products/add', data)
            .then(res => {
                console.log('RESPONSE:', res.data);
                setOpenToast(true);
                
            });
    };

    

    return (
        <div>
            <h1>Add new Product form</h1>
            <MUI.Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={() => setOpen(false)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div>
                    <h1> FORMMMM </h1>
                    <form onSubmit={formSubmitHandler}>
                        <div>
                            <label htmlFor="">name</label>
                            <input ref={inputName} />
                        </div>
                        <div>
                            <label htmlFor="">category</label>
                            <input ref={inputCategory} />
                        </div>
                        <div>
                            <label htmlFor="">price</label>
                            <MUI.TextField ref={inputPrice} ></MUI.TextField>
                        </div>
                        <div>
                            <select>
                                <option>Phones</option>
                                <option>Laptop</option>
                                <option>PC</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">file</label>
                            <input type="file" />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </MUI.Modal>

            <button onClick={() => setOpen(true)}>Open modal</button>
            <MUI.Snackbar
        open={openToast}
        autoHideDuration={3000}
        onClose={e=>setOpenToast(false)}
        message="Note archived"
        // action={action}
      />
        </div>
    );
};

// private Long id;
// -	    private String name;
// -	    private String category;
// -	    private double price;
// -	    private double discount;
// -	    private LocalDate addedDate;
// -	    private double rating;
// -	    private String[] images;
// -	    private String seller;
// -	    private int sold;

export default AddProductForm;
