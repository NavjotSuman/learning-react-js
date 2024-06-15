import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import { GithubLoaderInfo } from './components/Github/Github.jsx'

/*
// first way to create route
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      }, {
        path: "about",
        element: <About />
      }, {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])
*/



// Secoond way to create router 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='CONTACT' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route
        loader={GithubLoaderInfo}
        path='github'
        element={<Github />} />
    </Route>
  )

)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
