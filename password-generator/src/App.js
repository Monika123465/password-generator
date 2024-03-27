import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css';

function App() {
  const [length, setLength] = useState('8')
  const [password, setPassword] = useState('')
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const passwordref = useRef(null)

  const passwordGenerator = useCallback(
    () => {
      let pass = ""
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      if (numberAllowed) pass += '1234567890'
      if (charAllowed) pass += '!@#$%^&*()_+-='

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        //console.log(char)
        // console.log(str)

        pass += str.charAt(char)
      }
      setPassword(pass)
    },
    [length, numberAllowed, charAllowed, setPassword],
  )
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  const passwordcopytoClipboard = useCallback((e) => {
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0, 5)
    window.navigator.clipboard.writeText(password)

  }
    , [password])


  return (
    < >
      <div className='container'>
        <div className='inputContainer'>
          <input
            placeholder='enter password'
            value={password}
            type='text'
            readOnly
            ref={passwordref}
          /></div>
        <button onClick={passwordcopytoClipboard}>Copy</button>
      </div>
      <div className='input-length'>
        <div>
          <input type='range' defaultChecked={length} id='length' maxLength={32} minLength={8} onChange={(e) => { setLength(e.target.value) }} />
          <label>Length:{length}</label>
        </div>
        <div>
          <input type='checkbox' defaultChecked={numberAllowed} id='number' onChange={(e) => { setNumberAllowed((prev) => !prev) }} />
          <label htmlFor='inputNumber' >Number</label>
        </div>
        <div>
          <input type='checkbox' defaultChecked={charAllowed} id='char' onChange={(e) => { setCharAllowed((prev) => !prev) }} />
          <label htmlFor='inputchar'>Char</label>
        </div>

      </div>


    </>


  );
}

export default App;
