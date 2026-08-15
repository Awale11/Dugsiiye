import { useState } from "react"
import CartContext from "./CartContext";
import { ProductItem } from "./ProductItem";
import { CartSummary } from "./CartSummary";

function App () {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // setCartItems([...cartItems, item]);
      setCartItems((prev) => [...prev, item])
    };

    const removeFromCart = (itemId)=> {
      // setCartItems(cartItems.filter((item) => item.id !== itemId));
      setCartItems((prev)=> {
        return prev.filter((item)=> item.id !== itemId)
      })
    };
  

  return (

    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart
    }}>

      <ProductItem itemId={1} itemName="Laptop" price={1000}/>
      <ProductItem itemId={2} itemName= "Phone" price={890}/>

      <CartSummary/>

    </CartContext.Provider>

  )
}
export default App

// COMMENTS

// const removeFromCart = (itemId)=> {
//       setCartItems((prev)=> {
//         return prev.filter((item)=> item.id !== itemId)
//       })
//     } yani = itemId → silmek istediğimiz ürünün ID'si
// prev → mevcut sepet
// filter() → yeni bir array oluşturur
// item.id !== itemId → ID'si silinecek ürüne eşit olmayanları tutar
// setCartItems() → yeni sepeti state yapar.

// {/* <CartContext.Provider value={{
//       cartItems,
//       addToCart,
//       removeFromCart
//     }}> yani Context sadece veri taşımak için değil, o veriyle ilgili fonksiyonları da paylaşmak için kullanılabilir. */}.

// const addToCart = (item) => {
//     setCartItems((prev) => [...prev, item]);
// }; Mantık:
// Yeni ürünü mevcut sepetin sonuna ekliyoruz.