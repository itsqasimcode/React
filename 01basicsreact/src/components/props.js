import React  from 'react'

function Props  ({name , last, children}) {

    console.log(name);

  return  <div>Hello {name} {last}
  {children}
  </div>
  
}

export default Props
