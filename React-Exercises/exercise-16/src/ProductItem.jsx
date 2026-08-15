import React, { useContext } from 'react'
import CartContext from './CartContext'

export const ProductItem = ({itemId, itemName, price}) => {

    const {addToCart} = useContext(CartContext);
    
    const handleAdd = () => {
      addToCart({id: itemId, name: itemName, price});
      // const product = {
      //   id : Date.now(),
      //   name : 'Laptop',
      //   price : 1.300,
      // }
      // addToCart(product);
    }
  return (

    <div>
        {/* <h1>ProductItem</h1> */}

        <p>{itemName}</p>
        <p>Price: ${price}</p>
        <button onClick={handleAdd}>Add to Cart</button>

    </div>
  )
}

// Comments

// const { addToCart } = useContext(CartContext);
// Mantık:
// ProductItem, Context'ten addToCart fonksiyonunu alıyor.

// Butona basınca:

// addToCart({
//     id: itemId,
//     name: itemName,
//     price
// });

// ile ürünü sepete gönderiyor.