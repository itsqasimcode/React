/*import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App () {


  const [length, setLength ]  = useState(8);
  const [numberAllowed, setnumberAllowed ] = useState (false);
  const [charAllowed, setcharAllowed] = useState (false);
  const [password, setPassword] = useState ("");


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  
  if (numberAllowed) str += "0123456789"
  if (charAllowed) str += "!@#$%^&*(){}_-+'~"

  for (let i = 1; i <= length; i++) {
    let char = Math.floor (Math.random() * str.length + 1)
    
    pass += str.charAt(char)

  }
     setPassword(pass)
  }, [length, numberAllowed,charAllowed, setPassword])



useEffect(() => {
  passwordGenerator()
}, [length, numberAllowed, charAllowed, passwordGenerator])



const passwordRef = useRef(null)



const passwordcopytoClipboard = useCallback(() => {
  passwordRef.current?.select()
  passwordRef.current.setSelectionRange(0, 7)
  
  window.navigator.clipboard.writeText(password)}, [password])
    
 return (

  
  
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-800 bg-gray-800">
    <h1 className="text-center text-white my-3">Password Generator</h1>
  
  <div className="flex shadow rounded-lg overflow-hidden mb-4 w-full max-w-md mx-auto">
     <input type="text" 
    value={password}
    className="outline-none w-full py-1 px-3"
    placeholder="password"
    readOnly
    ref={passwordRef}
    />
    <button 
    onClick={passwordcopytoClipboard}
    className="bg-blue-800 text-white px-3 py-1 shrink-0">Copy</button>
  </div>

  <div className="flex text-sm gap-x-2">

    <div className="flex items-center gap-x-1">
    <input type="range"
      min={6}
      max={100}
      value={length}
      className="cursor-pointer"
      onChange={(e) => {setLength(e.target.value)}}
       />
       <label> length : {length} </label>
    </div>

    <div className="flex items-center gap-x-1">
      <input type="checkbox"
      defaultChecked={numberAllowed}
      id="numberInput"
      onChange={() => {setnumberAllowed((prev) => !prev)}}
       />
       <label> Numbers {numberAllowed} </label>
    </div>

    <div className="flex items-center gap-x-1">
      <input type="checkbox"
      defaultChecked={charAllowed}
      id="characterInput"
      onChange={() => {setcharAllowed((prev) => !prev)}}
       />
       <label> Characters {charAllowed} </label>
    </div>

  </div>
  </div>
)

}

export default App*/






















































































































































/*import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

const [length, setLength] = useState(8)
const [numberAllowed, setNumberAllowed] = useState(false);
const [charAllowed, setCharAllowed] = useState(false);
const [password, setPassword] = useState("");

// useRef hook

const passwordRef = useRef(null)


// useCallback hook

const passwordGenerator = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numberAllowed) str +=  "0123456789"
  if(charAllowed) str +=  "!@#$%^&*(){}_-+'~"

  for (let i = 1; i <= length; i++){
    
    let char = Math.floor (Math.random() * str.length + 1)

    pass += str.charAt(char)
    
  }

  setPassword(pass)

}, [length, numberAllowed, charAllowed, setPassword])

const passwordcopytoClipboard = useCallback(() => {
  passwordRef.current.select()
  passwordRef.current.setSelectionRange(0, 5)
  
  window.navigator.clipboard.writeText(password)}, [password])

// useEffect hook

useEffect(() => {

  passwordGenerator()

}, [length, numberAllowed, charAllowed, passwordGenerator])



  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8  text-orange-800  bg-gray-800 '>

      <h1 className='text-white text-center my-3'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        
        <input type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly 
          ref={passwordRef}
         
        />

        
        <button
         onClick={passwordcopytoClipboard}
        className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0'>Copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1 '>
        
        <input 
        type="range"
        min={6}
        max={100}
        value = {length}
        className='cursor-pointer' 
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label> length :{length} </label>

      </div>
      <div className='flex items-center gap-x-1 '>

          <input 
        type="checkbox"
        defaultChecked = {numberAllowed}
        id='numberInput'
        onChange={() => {setNumberAllowed((prev) => !prev);

        }}
        /> 
        <label> Numbers {Number} </label>
      </div>

        <div className='flex items-center gap-x-1 '>

          <input 
        type="checkbox"
        defaultChecked = {charAllowed}
        id='characterInput'
        onChange={() => {setCharAllowed((prev) => !prev);

        }}
        /> 
        <label> Characters {charAllowed} </label>
      </div>
        
      </div>
     </div>
    </>
  )
}

export default App*/



