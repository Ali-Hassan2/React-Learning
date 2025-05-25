import React, { useEffect } from 'react'
import { createContext, useState } from 'react'

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [theme, settheme] = useState('light')

    useEffect(()=>{
        document.body.style.backgroundColor = theme === 'light' ? 'white':'black'
        document.body.style.color = theme === 'light' ? 'black' : 'white'
    },[theme])
    return (
        <ThemeContext.Provider value={{ theme, settheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
