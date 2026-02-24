import Card from './components/card'

import './App.css'

function App() {

  let myObj = {
    username: "Qasim",
    age: 21 
    
  }

  let newArr = [1,2,3,4,5]
  

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl' >Tailwind Test</h1>
    <Card channel = "chaiaurcode" someObj= {newArr}/>
    <Card/>
   
    </>
  )
}

export default App
