import React from 'react'
import { ContactApp } from './ContactApp'

function App() {

  return (

    <div>
      <ContactApp/>
    </div>
  )
}

export default App;
// comments 

// ContactApp state'i ve dispatch'i yönetir, ContactForm yeni contact ekleme ve mevcut contact'ı düzenleme işlemlerini gerçekleştirir, ContactList contact listesini map ile render eder, ContactItem her contact'ın bilgilerini ve Delete/Edit/Favorite işlemlerini yönetir, Reducer ise gelen action'a göre contact listesini immutable şekilde günceller.

// (Immutable = mevcut veriyi doğrudan değiştirmemek, onun yerine yeni bir kopya oluşturmak demek.)
