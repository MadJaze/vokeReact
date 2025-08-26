import { createContext, useState, useEffect } from "react";

// Cria o contexto do tema
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {


const [isDarkMode, setIsDarkMode] = useState(false);

// Função para alternar o modo claro/escuro

useEffect(() => {

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

        const  handleChange = (e) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);


}, []);

const toggleTheme = () => setIsDarkMode(prev => !prev);


return (

<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
    {children}
    </ThemeContext.Provider>

);

}