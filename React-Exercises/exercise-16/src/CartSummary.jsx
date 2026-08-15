import React, { useContext } from 'react'
import CartContext from './CartContext'

export const CartSummary = () => {

  const {cartItems, removeFromCart} = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total,item)=> total + item.price,
    0);
   

  return (
    
    <div>

      <h2>CartSummary</h2>
      <p>Total itemes: {cartItems.length}</p>
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      <ul>
        {
          cartItems.map((item)=> (
            <li key={item.id}>
              {item.name} -$
              {item.price}{' '}
              <button onClick={()=> removeFromCart(item.id)}>Remove</button>
            </li>
          ))
        }
      </ul>

      </div>
  )
}

// Comments
// {/* <p>Total itemes: {cartItems.length}</p>= cartItems → array
// .length   → array'in eleman sayısı  */}

//  const totalPrice = cartItems.reduce(
    // (total,item)=> total + item.price,
    // 0) = "0'dan başla, her ürünün price değerini total'a ekle."

 // cartItems.length= urun sayisi ile buluyoruz.

//  map()
// cartItems.map((item) => (
//     <li key={item.id}>

// Mantık:
// Sepetteki her ürünü ekranda göstermek için map() kullanıyoruz.

// key={item.id} ise React'in listedeki her ürünü birbirinden ayırt etmesini sağlıyor.

