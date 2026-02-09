
import { createBrowserRouter , RouterProvider } from "react-router-dom"
import './App.css'
import Layout from './Layout/Layout'
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Cart from "./pages/Cart/Cart";
import DeatailsProShop from "./Components/DeatailsProShop/DeatailsProShop";

function App() {

  const routes = createBrowserRouter([
    {path: "/", element:<Layout />,children:[
      {index:true, element:<Home />},
      {path:'Shop', element:<Shop />},
      {path:'Shop/DeatailsProShop', element:<DeatailsProShop />},
      {path:'Blog', element:<Blog />},
      {path:'About', element:<About />},
      {path:'Contact', element:<Contact />},
      {path:'Cart', element:<Cart />},

      {path:'*', element:<h1>404 Not Found</h1>}
    ]},
  ])
  
  return (
    <RouterProvider router={routes} />
  )
}

export default App
