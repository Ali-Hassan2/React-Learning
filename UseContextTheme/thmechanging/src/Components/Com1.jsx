import React from 'react'
import { useContext } from 'react'
import {ThemeContext} from '../Context/ThemeContext'


const Com1 = () => {
    const {theme,settheme} = useContext(ThemeContext) 

    const handletheme = () =>{
        if(theme === 'light'){
            settheme('dark');
        }
        else{
            settheme('light')
        }  
    }
  return (
    <div>
        <p>Theme: {theme}</p>
        <button onClick={handletheme}>
            Change Theme
        </button>
    </div>
  )
}

export default Com1
