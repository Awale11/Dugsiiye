
export const ContactItem = ({ contact, dispatch, setEditingContact}) => {

    const { id, name, email, phone, favorite} = contact;

  return (
    
    <div>
        <li style={{ marginBottom: '10px'}}>
            <strong>{name}</strong> {favorite && '★'}
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>

            <button onClick={()=> dispatch({type: 'toggleFavorite', payload: id})}>{favorite ? 'Unfavorite': 'Favorite'}</button>

            <button onClick={()=> setEditingContact(contact)}>Edit</button>

            <button onClick={()=> dispatch({type: 'delete', payload: id})}>Delete</button>

        </li>
    </div>
  )
}
// Comments

// ContactItem, tek bir contact'ı temsil ediyor.
