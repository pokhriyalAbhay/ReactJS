import { createContext , useContext } from "react";
export const ThemeContext = createContext({
    thememode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})
export  const Themeprovider = ThemeContext.Provider
export default function useTheme() // custom hooks
{
    return useContext(ThemeContext)

}