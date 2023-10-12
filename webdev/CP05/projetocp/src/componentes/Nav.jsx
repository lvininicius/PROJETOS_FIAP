import {} from 'react';
import { Link,useNavigate } from 'react-router-dom';

function Nav() {
  
/*Hooks navigate */
  const navigate = useNavigate();
  return (
    <>
      <header>
        <h2>Projeto</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/Produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/Sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
