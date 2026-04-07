# lifecycle Methods

 constructor()
 super()
componentDidMount()
render()

In ES5 and ES6 we use "bind" to access but now we are using "arrow function".

 <h1> {this.state.count} </h1>
 <button onClick={this.increment.bind(this)}>Click me</button>

  componentDidUpdate (prevprops, prevstate)
    {
        if (prevprops.number !== this.props.number)
            console.log ("component updated")
    }

# HOC Flow

   App.js
  |
  | subjects(Student)
  v
HOC function runs
  |
  | creates Subject component
  v
<StudentWithSubject />
  |
  v
Subject component renders
  |
  v
<Student hocSub="Java" />
  |
  v
Student receives prop
  |
  v
this.props.hocSub = "Java"
  |
  v
Output:
Subject: Java

#  props

   import React from 'react'

function Props  (prop ) {

    console.log(prop);

  return  <div>Hello {prop.name} </div>
  
}

    export default Props

Props cannot originate inside the same component.
Props must come from a parent component.
If You Want Data Inside the Component
Use state instead of props.


function Props() {
  const [name, setName] = useState("Qasim");

  return <div>Hello {name}</div>;
}

export default Props;

# UseMemo

   let i= 0;
    while (i< 200000000000) i++;

    this will slow down the react component thats why we use UseMemo.

# HookArray

      Array destructring 

    const [qitems, setitems] = usestate([]); 
                                            item = value
       setitems = function
       ...items = spread operator
       items.map = to get value from array

 # Hooks Revision

      In functional components we use hooks whereas in class components we use react lifecycle components like:

      ComponentDidMount
      ComponentDidUpdate
      ComponentWillUnmount

    