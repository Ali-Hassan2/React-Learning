
import './App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Navbar from './components/Navbar'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: 
      <div>
        <Navbar/>
        <Home/>
      </div>
    }
,
    {
      path:"/about",
      element:
      <div>
      <Navbar/>
      <About/>
    </div>
    }
    ,
    {
      path:"/ContactUs",
      element: 
      <div>
      <Navbar/>
      <ContactUs/>
    </div>
    }
  ]
)


function App() {
  return(
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
