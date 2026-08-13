import React, { useContext } from 'react'
import LanguageContext from './LanguageContext'

export const Greeting = () => {

    const language = useContext(LanguageContext);

    const style = {
        backgroundColor : 'lightBlue',
        color : 'red',
        margin : '20px'

    }

  return (
    
    <p style={style}>
        {language === 'en' ? 'Hello!' : 'Bonjour!'}
    </p>
    
  )
}
