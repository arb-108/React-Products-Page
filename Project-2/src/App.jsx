import React from 'react'
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router=createBrowserRouter([
  {
    path:"/",
    element:<><Navbar/><Home/></>
  },
  {
    path:"/Services",
    element:<><Navbar/><Services/></>
  },
  {
    path:"/About",
    element:<><Navbar/><About/></>
  },
  {
    path:"/Contact",
    element:<><Navbar/><Contact/></>
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
export default App;

