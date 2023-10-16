import {} from 'react'
import Nav from './components/Nav'
import {Outlet} from 'react-router-dom'
import Footer from './components/Footer'

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
