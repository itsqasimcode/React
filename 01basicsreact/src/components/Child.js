import React, {memo} from 'react'

function Child({Countertwo, setCountertwo}) {

    console.log ("Child Component Rendered !")
  return (
    <h1>Child Component</h1>
  )
}

export default memo (Child);