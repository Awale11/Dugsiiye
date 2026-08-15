import { createContext } from "react";

const CartContext = createContext ();

export default CartContext;

// Comments

// const CartContext = createContext();
// Mantık:
// Sepet bilgilerini ve sepete ait fonksiyonları component'ler arasında paylaşmak için Context oluşturuyoruz. Böylece cartItems, addToCart ve removeFromCart için prop drilling yapmak zorunda kalmıyoruz.


// Challenge'ın bütün mantığı tek cümlede

// App cart state'ini yönetiyor, Context bu state ve fonksiyonları child component'lere dağıtıyor, ProductItem ürünü sepete ekliyor, CartSummary ise sepetteki ürünleri gösterip toplam sayı/fiyatı hesaplıyor ve ürünleri silebiliyor