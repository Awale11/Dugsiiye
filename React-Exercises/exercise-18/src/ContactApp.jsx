import React, { useReducer, useState } from 'react'

import { reducer, initialState } from './Reducer'
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';

export const ContactApp = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const [editingContact, setEditingContact] = useState(null);

  return (

    <div>
        <h2>Contact Management App</h2>

        <ContactForm
        dispatch={dispatch}
        editingContact={editingContact}
        setEditingContact={setEditingContact}
        />

        <ContactList
        contacts={state}
        dispatch={dispatch}
        setEditingContact={setEditingContact}
        />

    </div>
  )
}
// Comments

// const [state, dispatch] = useReducer(
//     reducer,
//     initialState
// );

// ile reducer'ı uygulamaya bağlıyoruz. buradaki state, butun contact listesidir. dispatch ise reducer'a emir göndermek için kullanılır.

// const [editingContact, setEditingContact] = useState(null)= bu state'nin gorevi= Şu anda hangi contact'ı edit ediyoruz? edit'e basinca Böylece ContactForm hangi contact'ın edit edildiğini biliyor.

// ContactApp, ContactForm'a şunları gönderiyor:

// <ContactForm
//     dispatch={dispatch}
//     editingContact={editingContact}
//     setEditingContact={setEditingContact}
// />

// Burada props ile component'ler arasında iletişim kuruyoruz.




