import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout, { layout } from "./Layout.jsx";
// import Home from './components/Home/Home.jsx'
// import { Home, About } from "./components/index.jsx";
import { Home } from "./components/Home/Home.jsx";
import { About } from "./components/About/About.jsx";



const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      Children: [
        {
          path: "",
          Element: <Home />
        },
        {
          path: "about",
          Element: <About />
        },

      ]
    }

  ]
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* routerProvider takes only one pargument which is- router */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
