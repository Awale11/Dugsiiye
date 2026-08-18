import { ContactItem } from "./ContactItem"

export const ContactList = ({ contacts, dispatch, setEditingContact }) => {

  return (
    <div>
        <h3>Contacts</h3>
        {contacts.length > 0 ? (
            <ul>
                {
                    contacts.map((contact)=> (
                        <ContactItem
                        key={contact.id}
                        contact={contact}
                        dispatch={dispatch}
                        setEditingContact={setEditingContact}
                        />
                    ))
                }
            </ul>
        ) : (
            <p>No contacts available</p>
        )
    }
    </div>
  )
}
// comments

// ContactList reducer kullanmıyor.

// ContactList sadece gelen contacts listesini göstermekle ilgilenecek.

// contacts.map((contact) => ...)

// ile her contact için bir ContactItem oluşturuyor.

// <ContactItem
//     key={contact.id}
//     contact={contact}
// />

// contact bilgisini ContactItem'a gönderiyoruz.

// key={contact.id= key ise React'in listedeki elemanları ayırt etmesi için kullanılıyor.