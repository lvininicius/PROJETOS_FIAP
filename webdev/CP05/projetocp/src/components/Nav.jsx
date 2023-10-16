import {} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../CSS/Nav.css'
import nome from '../medias/yoshida_bg.png'

function Nav() {
  
/*Hooks navigate */
  const navigate = useNavigate();
  return (
    <>
      <header>
        
        <nav>
        <img id="nome" src={nome} alt="" />
          <ul>
            <li><a><Link to="/">Home</Link></a></li>
            <li><a><Link to="/Produtos">Produtos</Link></a></li>
            <li><a><Link to="/Pedido">Pedido</Link></a></li>
            <li><a><Link to="/Sobre">Sobre</Link></a></li>
            <li><a><Link to="/Login">Login</Link></a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
