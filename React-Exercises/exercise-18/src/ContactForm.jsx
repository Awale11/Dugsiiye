import React, { useEffect, useState } from 'react'

export const ContactForm = ( { dispatch, editingContact, setEditingContact }) => {

    const [contact, setContact] = useState(editingContact || { 
        id: null, 
        name: '',
        phone: '',
        email: ''
    });

    const [isEditing,  setIsEditing] = useState(false);

    useEffect(()=> {
        if(editingContact) {
            setContact(editingContact);
            setIsEditing(true);
        }
    },[editingContact]);

    const handleChange = (e)=> {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value})
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(contact.name && contact.email && contact.phone) {
            if (isEditing) {
                dispatch({type: 'edit', payload: contact});
                setIsEditing(false);
            } else {
                dispatch({
                    type: 'add',
                    payload: {...contact, 
                        id: Date.now(), favorite: false}
                });
            }
            setContact({
                id: null, 
                name: '', 
                email: '', 
                phone:''});
        }
    };

    const handleCancelEdit = ()=> {
        setContact({
            id: null, 
            name: '',
            email: '',
            phone: ''
        });
        setIsEditing(false)
    };

  return (

    <form onSubmit={handleSubmit}>
        <h3>{isEditing ? 'Edit Contact' : 'Add New Contact'}</h3>
        <div>
            <label>Name:
                <input type="text"
                    name= 'name'
                    value={contact.name}
                    onChange={handleChange}
                    required
                />
            </label> <br/>
        </div>

        <div>
            <label>Email:
                <input type="email"
                name= 'email'
                value={contact.email}
                onChange={handleChange}
                required
                />
            </label> <br />
        </div>

        <div>
            <label>Phone:
                <input type="tel" 
                name= 'phone'
                value={contact.phone}
                onChange={handleChange} 
                required
                />
            </label> <br/>
        </div>

        <button type='submit'>{isEditing ? 'Update' : 'Add'}</button>

        {isEditing && <button onClick={handleCancelEdit}>Cancel</button>}
        {/* <button onClick={handleCancelEdit}>Cancel</button> */}
    </form>
  )
}
// comments

// ContactForm:

// formu gösteriyor
// inputları yönetiyor
// Add/Edit işlemini başlatıyor.

// ContactForm kendi input state'ini tutuyor:

// const [contact, setContact] = useState(...)
// Kullanıcı Name inputuna yazınca:
// Böylece tek handleChange ile Name, Email ve Phone inputlarını yönetiyoruz.