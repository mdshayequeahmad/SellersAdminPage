import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const ProductItems = (props) => {
    const { dispatch } = useContext(AppContext)

    const deleteProduct = () => {
        dispatch({
            type: "DELETE_PRODUCT",
            payload: props.id
        })
    };

    return (
        <li>
            {props.name}
            <span style={{ marginLeft: "50px", marginRight: "50px" }}>
                {props.price}
            </span>
            <button onClick={deleteProduct}>Delete</button>
        </li>
    )
}

export default ProductItems;