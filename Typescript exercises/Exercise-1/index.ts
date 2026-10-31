//1.Declaration Variables with Explicit Types

let productName: string = 'decoration';

let price: number = 59;

let discountAvailable: boolean = true;

// Erros
productName = 123;
price = "hello";
discountAvailable = "false"

// Fixed the erros
productName = 'decoration';
price = 20;
discountAvailable = false;

//2. Fixing this Broken JavaScript
// function getDiscount(price, discount) {
//   return price - price * discount;
// }
function getDiscount(price: number, discount: number): number {
    return price - price * discount;
}

// example
const result = getDiscount(100, 0.2); 
console.log(result) // 80

//3.⚠️ Dangerous any

function printLength(x: unknown) {

    if(typeof x === 'string') {
        console.log(x.length)
    } else {
        console.log('This is not string')
    }
}
printLength('Hello');
printLength(123)