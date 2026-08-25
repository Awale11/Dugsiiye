import { useState } from "react"

function App() {

  // state for inputs
  const [contact, setContact] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });
  // state for checkbox
  const [isChecked, setIsChecked] = useState(false);
  // state for select Dropdown
  const [language, setLanguage] = useState('');

  const handleSubmit = (e)=> {
    e.preventDefault();
    if(
      contact.username == '' ||
      contact.email == '' ||
      contact.phone == '' ||
      contact.password == ''
    ){
      alert('please fill in all fields')
      return
    };
    if(!isChecked){
      alert('please chech the box')
      return
    };
    if(language == ''){
      alert('please choose one language')
    return      
    };
    console.log(contact);
    console.log(isChecked);
    console.log(language);
    
  };

  const handleChange = (e)=> {
    const {name, value} = e.target
    setContact((prevContact)=> ({
      ...prevContact, [name] : value}))
  };

  const handleCheckboxChange = (e)=> {
    setIsChecked(e.target.checked)
  }

  return (

    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
         name="username"
         placeholder="Enter Your Name"
         value={contact.username}
         onChange={handleChange}/><br />

          <input type="email"
           name="email"
           placeholder="Enter Your Mail"
           value={contact.email}
           onChange={handleChange}/><br />

          <input type="tel"
           name="phone"
           placeholder="Enter Your Phone "
           value={contact.phone}
           onChange={handleChange}/><br />

          <input type="password"
           name="password"
           placeholder="Enter Your Password"
           value={contact.password}
           onChange={handleChange}/><br />

           {/* Checkbox */}
           <label>Checkbox
              <input type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}/>
           </label>

           {/* selection options */}
           <select 
            value={language}
            onChange={(e)=> 
            setLanguage(e.target.value)}>
            
            <option value="">Choose your favourite language</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
           </select>

           <button type="submit">Submbit</button>           
      </form>
    </div>
  )
}

export default App
