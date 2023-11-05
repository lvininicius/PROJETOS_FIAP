import React from 'react';
import Footer from './componentes/Footer';
import Nav from './componentes/Nav';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav /> 
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
