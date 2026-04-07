# React Router
  React Router is a multi-strategy router for React bridging the gap from React 18 to React 19. You can use it maximally as a React framework or as minimally as you want.
   
   React router is used for nesting by Layout we can also call it root.
     <Outlet/>
  To make router we use a routerprovider.RouterProvider is a wrapper.
   <RouterProvider router={router} />
   const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      

    </Route>
  )
)

# Interview Question
  import {Link, NavLink} from 'react-router-dom'
  we use "Link" in place of "a-tag" because "a-tag" refreshes the whole page and in react we dont refresh.
  
  In react router "Outlet"
  acts as a base and uses the layout. 

  import { Outlet } from 'react-router'
