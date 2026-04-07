import React, { useEffect, useState } from 'react'

function Functioncounterone() {

 const [count, setCount] = useState (0);

 useEffect (() => {


    document.title = 'clicked $ (count) times '

 })


  return (
   
   <div onClick={ () => setCount (count + 1) }> Click { count} Times </div>

  )
}

export default Functioncounterone