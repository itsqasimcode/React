import React, {useCallback, useState} from 'react'
import Child from './Child';

function Parent() {

    const [counterOne, setCounterOne] = useState (0);
    const [countertwo, setCountertwo] = useState ([]);


    const incrementOne = () =>{
     
    setCounterOne (counterOne + 1)

}

const fun = useCallback( () =>{
    console.log ("Hello Qasim")
},countertwo)

  return (
     <div>  
        <Child Countertwo = {countertwo} fun = {fun}/>
        <button onClick={incrementOne}>CounterOne - {counterOne}</button>
     </div>

  )
}

export default Parent;