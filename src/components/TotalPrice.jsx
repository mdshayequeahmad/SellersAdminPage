import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'


const TotalPrice = () => {
    const {products} = useContext(AppContext);

    const totalPrice = products.reduce((total, item) => {
        return (total += item.price)
    }, 0)

  return (
    <h3>Total Value Worth of Product: Rs {totalPrice}</h3>
  )
}

export default TotalPrice;