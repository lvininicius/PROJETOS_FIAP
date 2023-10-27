import {} from 'react'
import Footer from './componentes/Footer'
import { Outlet } from 'react-router-dom'
 
function App(){
  return (
    <>
      <Outlet/>
      <Footer/>
    </>
  )
  }

export default App
