/*import React, { useState } from 'react'

function UseStatetut() {

  const [inputValue, newChangeValue]= useState ("Qasim");

 const onChange = (event) => {

   const newval = event.target.value;

   newChangeValue  (newval)

  }

  return (
    <div>

      <h1>{inputValue}</h1>
     <input type='text' value={inputValue} onChange ={onChange}></input>

    </div>
  )
}

export default UseStatetut;*/


import React, { useState } from 'react'

function useStatetut() {

 const [channelname, setname] = useState ("Qasim usestate");
 const [count, setcount] = useState ("Subscribers");


 const  namechange = () =>{

   setname ("Qasim Rehmat")
   
   setcount ("50,000")

 }

  return (

    <div>
    {channelname}
    {count}
    <button onClick = {namechange}>Click here</button>
    </div>
  )
}
export default useStatetut;