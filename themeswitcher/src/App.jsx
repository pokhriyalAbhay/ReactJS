import { useState } from 'react'
import { Themeprovider } from './context/theme'
import { useEffect } from 'react'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [thememode, setThememode] = useState("light") // hmm value mai jo pass kiya same name ke function bante jisse usme unki functionality chali jaye
  const lightTheme = () =>
  {
    setThememode("light")
  }
  const darkTheme = () =>
  {
    setThememode("dark")
  }
  // acutal change in theme
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(thememode)
    
  },[thememode])

  return (
    <Themeprovider value={{thememode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Button/>

          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>

          </div>
        </div>
      </div>
    </Themeprovider>

  )
}

export default App
