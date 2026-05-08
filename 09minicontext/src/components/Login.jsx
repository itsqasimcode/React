import React, {useContext} from "react";
import UserContext from "../context/UserContext";
import { useState } from "react";
 


 function Login() {

  const [username, setUsername] = useState(" ")
  const [password , setPassword] = useState (" ")

  const {setUser} = useContext (UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})

  }


  return (

    <div>

       <h2>Login</h2>

       <input type="text"
       name="username"
       value={username}
       placeholder="Enter a Username"
       onChange={(e) => setUsername (e.target.value)} />

      {" "}

       <input type="text"
       name="password"
       value={password}
       placeholder="Enter a Password"
       onChange={(e) => setPassword (e.target.value)} />

       <button onSubmit={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login;

























/*import React from 'react'
import { useContext, useState } from 'react'
import { UserContext} from '../context/UserContext'

function Login() {

  const [username , setUsername] = useState (" ")
  const [password , setPassword] = useState (" ")

  const {setUser} = useContext (UserContext)

  const handleSubmit = (e) => {
     e.preventDefault()
     setUser({username, password})

  }

  return (
    <div>

    <h2>Login</h2>

    <input type='text'
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    placeholder='Enter Username'
    />
   
   {" "}

    <input type='text'
    value={password}
    onChange={(e) => setPassword(e.target.value)}
     placeholder='Enter Password'
    />
    <button onClick={handleSubmit}>Submit</button>
    </div>

  )
}

export default Login*/