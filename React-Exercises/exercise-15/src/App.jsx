import { useState } from "react"
import LanguageContext from "./LanguageContext"
import { Greeting } from "./Greeting";

function App () {

  const [language, setLanguage] = useState('en');

  const handleLanguage = ()=> {
    setLanguage((prev)=> (prev === 'en' ? 'fr' : 'en'));
  }

  return (
    <div>

   <LanguageContext.Provider value={language}>
    <h1>Language Context</h1>
    <button
    onClick={handleLanguage}
    >Switch To {language === 'en' ? 'French' : 'English'} </button>
    <Greeting/>
   </LanguageContext.Provider>

   </div>
  )
}
export default App
