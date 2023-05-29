import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'
import ProductItems from './ProductItems';

const ProductList = () => {
    const {products} = useContext(AppContext);
    

    return (
        <ul>
            {products.map((product) => {
                return (
                    <ProductItems 
                    id={product.id}
                    price={product.price}
                    name={product.name}
                    />
                )
            })}
        </ul>
    )
}

export default ProductList;