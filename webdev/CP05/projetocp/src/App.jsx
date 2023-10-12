import {} from 'react'
import Nav from './componentes/Nav'
import {Outlet} from 'react-router-dom'
import Footer from './componentes/Footer'

function App() {
  return (
    <> 
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
