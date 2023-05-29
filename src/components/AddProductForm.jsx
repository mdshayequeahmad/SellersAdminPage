import React, { useState } from 'react'
import { useContext } from 'react';
import { AppContext} from '../context/AppContext';

const ProductList = () => {
    const {dispatch} = useContext(AppContext);

    const [id, setId] = useState('');
    const [price, setPrice] = useState('');
    const [name, setName] = useState('');

    const addProductHandler = (e) => {
        e.preventDefault();

        const productDetails = {
            id: parseInt(id),
            price: parseInt(price),
            name: name
        }

        dispatch({
            type: "ADD_PRODUCT",
            payload: productDetails,
        });

        setId("")
        setName("")
        setPrice("")

    };

    return (
        <form onSubmit={addProductHandler}>
            <label id='id'>Product ID: </label>
            <input
                type="number"
                required="required"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <label id='price'>Selling Price: </label>
            <input
                type="number"
                required="required"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <label id='name'>Product Name: </label>
            <input
                type="text"
                required="required"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type='submit'>Add Product</button>
        </form>
    )
}

export default ProductList;