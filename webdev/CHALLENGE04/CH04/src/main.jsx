import {} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Footer from './componentes/Footer.jsx'
import Nav from './componentes/Nav.jsx'
import Login from './routes/Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router=createBrowserRouter([
  {
  path:'/',
  element:<App/>,

  children:[
    {path:'/',element:<Home/>},
    {path:'/Nav',element:<Nav/>},
    {path:'/Login',element:<Login/>},
    {path:'/Footer',element:<Footer/>},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
);