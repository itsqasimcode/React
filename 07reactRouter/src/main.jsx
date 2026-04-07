import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      

    </Route>
  )
)



/*const router = createBrowserRouter([
  {
    path: "/",          
    element: <Layout />,
    children: [         
     {
      index: true,   // 🔥 makes it default
      element: <Home />
    },

      {
        path: "about",
        element: <About />
      },
      
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])*/

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)