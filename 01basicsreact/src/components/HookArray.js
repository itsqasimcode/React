import React, { useState } from 'react'

function HookArray() {
    
    const [items, setitems] = useState ([]);  // Array destructuring
                                             // item = value
                                             // setitems = function   
    const additem = () =>{

        setitems ([...items, {
         
            value : Math.floor (Math.random() * 10)

        }]

        )
    }

  return (
    
    <div>
          <button onClick={additem}>Add a random number</button>
        <ul>
         
           {items.map (item => (<li key={item.value}> {item.value}</li>)
           )}
           

        </ul>
    </div>
  )
}

export default HookArray;