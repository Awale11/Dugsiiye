// 1. **Create** a `Counter` component that:
//     - Displays a number representing the count.
//     - Includes "Increment" and "Decrement" buttons.
// 2. **Implement Event Handling:**
//     - When the "Increment" button is clicked, increase the count by 1.
//     - When the "Decrement" button is clicked, decrease the count by 1 (do not allow negative numbers).
// 3. **Use State Management:**
//     - Use `useState` to manage the count.

import { useState } from "react"

const Counter = () => {

    const [counter, setCounter] = useState(0);
    
    const handlePlus = ()=> {
        setCounter((prev) => prev + 1);
    };
    const handleMines = ()=> {
        setCounter((prev) => prev > 0 ? prev - 1 : prev)
    }

    return (
        <div>
            <h1>Count: {counter}</h1>

            <button onClick={handleMines} disabled={counter === 0}>Decrement</button>
            <button onClick={handlePlus}>Increment</button>
        </div>
    )
}
export default Counter

// Explanation 

//  const handlePlus = () => {
//  setCounter((prev) => prev + 1);
// }; = prev = mevcut değer
//prev + 1 = yeni değer

// const handleMines = () => {
//     setCounter((prev) => prev > 0 ? prev - 1 : prev)
// }= Eğer prev 0'dan büyükse 1 azalt, değilse olduğu gibi bırak.

//<h1>Count: {counter}</h1>= State'i ekranda gösteriyorsun.

// disabled={counter === 0}= decrement button 0 oldugunda artik basamiyoruz veya Counter 0 ise Decrement butonunu kapat.


// 1=  const increment = () => setCount(count + 1);

//   const decrement = () => {
//     if (count > 0) setCount(count - 1);
//   };

//Bu ve asagidaki ayni sey
// 2= const handlePlus = ()=> {
//         setCounter((prev) => prev + 1);
//     };
//     const handleMines = ()=> {
//         setCounter((prev) => prev > 0 ? prev - 1 : prev)
//     }
