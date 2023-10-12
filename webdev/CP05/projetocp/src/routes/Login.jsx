import { useRef } from 'react';
import Produtos from './Produtos';

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
    <section>
      <h1>Login</h1>
      {getUsuario && getSenha ? (
        <Produtos />
      ) : (
        <form onSubmit={verifSubmit}>
          <p>
            Usuário:
            <input type="text" ref={usuario} />
          </p>
          <br />
          <p>
            Senha:
            <input type="password" ref={senha} />
          </p>
          <br />
          <input type="submit" value="Login" />
        </form>
      )}
    </section>
  );
}

export default Login;
