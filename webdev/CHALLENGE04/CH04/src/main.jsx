import {} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Servicos from './routes/Servicos.jsx'
import Footer from './componentes/Footer.jsx'
import Nav from './componentes/Nav.jsx'
import Login from './routes/Login.jsx'
import Contatos from './routes/Contatos.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/Nav', element: <Nav /> },
      { path: '/Contatos', element: <Contatos /> },
      { path: '/Login', element: <Login /> }, // Corrigido para '/Login'
      { path: '/Servicos', element: <Servicos /> }, // Corrigido para '/Servicos'
      { path: '/Footer', element: <Footer /> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
);