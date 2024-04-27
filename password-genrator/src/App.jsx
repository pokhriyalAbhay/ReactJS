import { useState, useCallback,useEffect,useRef} from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numberallowed, setnumberallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState("")
  //useref hook
  const passwordref = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str += "0123456789"
    if (charallowed) str += "!@#$%^&*()_-+~`"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass+= str.charAt(char)
    }
    setpassword(pass)


  }, [length, numberallowed, charallowed, setpassword])
  useEffect(()=>{
    passwordGenerator()
  },[length,numberallowed,charallowed,passwordGenerator])
   const copyPasswordToClipboard = useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
   },[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>password generator</h1>
        <div className='flex-shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordref}
          />
          <button
          onClick={copyPasswordToClipboard}
           className='outline-none bg-blue-700 text-white px-3 py-0 shrink-0'>copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }} />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberallowed}
              id='numberInput'
              onChange={() => {
                setnumberallowed((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-centergap-x-1'>
            <input
              type='checkbox'
              defaultChecked={charallowed}
              id='characterInput'
              onChange={() => {
                setcharallowed((prev) => !prev);
              }}
            />

            <label htmlFor='characterInput'>characters</label>

          </div>

        </div>

      </div>
    </>
  )
}

export default App
