import {  createContext , useContext, useEffect, useState } from "react";

export const themeContext = createContext({
  themeMode: "light",
    lightMode: ()=>{},
    darkMode: ()=>{}
})

export const ThemeProvider =({children}) =>{
  const [themeMode , setThemeMode] = useState('light')

  const lightMode = () => setThemeMode("light")
  const darkMode = () => setThemeMode("dark")
  useEffect(() => {
    document.body.className = themeMode === "dark" ? "dark" : "light"
  },[themeMode])

  return (
    <themeContext.Provider value={{themeMode , lightMode ,darkMode}}>
      {children}
    </themeContext.Provider>
  )

}

export default function useTheme  (){
    return useContext(themeContext)
}
