// **Task:**

// 1. **Create** a `useForm` custom Hook that:
//     - Manages form state and handles input changes.
//     - Provides an easy way to manage multiple form fields.
// 2. **Use** the `useForm` Hook in a `ContactForm` component.
// 3. **Implement** form submission handling, logging the form data to the console.

// **Solution Outline:**

// - **Custom Hook:**
//     - `useForm`: Manages form inputs and provides a handler for input changes.

import React, { useState } from 'react'

function useForm() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
        adress: '',
        phone: '',
    });

    const handleChange = (e)=> {
        setForm((prev)=> ({
            ...prev, [e.target.name]: e.target.value
        }));
    };


  return (
    {form, handleChange}
    // useForm() çağıran component'in form ve handleChange'e ulaşabilmesi için useForm bunu yapar.
  )
}

export default useForm;

// Comments

// const handleChange = (e)=> {
//         setForm((prev)=> ({
//             ...prev, [e.target.name]: e.target.value
//         }));
//     }; yani= Yani tek bir handleChange ile bütün inputları yönetiyoruz.

// useForm custom Hook'u formun state'ini ve input değişikliklerini yönetmek için oluşturuldu. Formdaki bütün alanlar tek bir object state içinde tutuluyor.

// handleChange, input'un name ve value değerlerini kullanarak sadece değişen alanı güncelliyor. Böylece her input için ayrı state veya ayrı change handler yazmaya gerek kalmıyor.

// [e.target.name]: e.target.value, yani = "Hangi input değiştiyse onun name'ini key olarak kullan, o input'un yeni value'sunu da value olarak koy." yani
// Eski formu koru
//        ↓
// Hangi input değişti?
//        ↓
// Onun name'ini bul
//        ↓
// Yeni value'yu al
//        ↓
// Sadece o field'ı güncell

// 2. Peki [e.target.name] neden köşeli?

// İşin en önemli kısmı burası.

// Diyelim ki şöyle yazsaydık:

// email: e.target.value

// Bu, her zaman email'i değiştirir.

// Ama bizim tek handleChange fonksiyonumuz:

// name
// email
// message
// address

// hepsini yönetiyor.

// Dolayısıyla field'ın ismini dinamik olarak vermemiz lazım.