import React from 'react'
import useForm from './useForm'

function ContactForm() {
    
    const  { form, handleChange} = useForm({
        name: '',
        email: '',
        message: '',
        adress: '',
        phone: '',
    });

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(form);
    };

  return (
    
    <form onSubmit={handleSubmit}>
        <div>
            <label> Name:
                <input type="text"
                value={form.name}
                name= 'name'
                onChange={handleChange}
                required
                 />
            </label>
        </div>

        <div>
            <label>Email:
                <input type="text"
                value={form.email}
                name= 'email'
                onChange={handleChange}
                required
                 />
            </label>
        </div>

         <div>
            <label>Adress:
                <input type="text"
                value={form.adress}
                name= 'adress'
                onChange={handleChange}
                required
                 />
            </label>
        </div>

          <div>
            <label>Phone:
                <input type="text"
                value={form.phone}
                name= 'phone'
                onChange={handleChange}
                required
                 />
            </label>
        </div>

        <div>
            <label>Message:
                <textarea
                    value={form.message}
                     name= 'message'
                    onChange={handleChange}
                    required
                />
            </label>
        </div>
        <button type='submit'>Sumbit</button>
    </form>
  )
}

export default ContactForm

// ContactForm component'i useForm Hook'unu kullanarak form verilerini ve handleChange fonksiyonunu alıyor. Inputlar value ve onChange ile state'e bağlanıyor. Form submit edildiğinde preventDefault() sayfanın yenilenmesini engelliyor ve console.log(form) ile güncel form bilgileri console'a yazdırılıyor.