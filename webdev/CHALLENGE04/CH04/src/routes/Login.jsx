// Login.js

import { useRef } from 'react';
import Servicos from '../routes/Servicos';
import '../SCSS/Login.scss';

function Login() {
  const usuario = useRef();
  const senha = useRef();
  const getUsuario = sessionStorage.getItem('userData');
  const getSenha = sessionStorage.getItem('senhaData');

  const verifSubmit = () => {
    if (usuario.current.value === 'admin' && senha.current.value === '12345') {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem('userData', 'admin');
      sessionStorage.setItem('senhaData', token);
    } else {
      alert('usuário e senha inválidos !!!');
    }
  };

  return (
  <div className='Login'>
    <section>
      <h1>Login</h1>
      {getUsuario && getSenha ? (
        <Servicos />
      ) : (
        <form onSubmit={verifSubmit}>
          <p>
            Usuário:
            <input type="text" ref={usuario} />
          </p>
          <p>
            Senha:
            <input type='password' ref={senha} />
          </p>
          <button type='submit' className='btn'>
            Login
          </button>
        </form>
      )}
    </section>
  </div>

  );
}

export default Login;
