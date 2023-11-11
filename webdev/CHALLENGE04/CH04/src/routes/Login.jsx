// Login.js

import { useRef } from 'react';
import Servicos from '../routes/Servicos';
import '../SCSS/Login.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <section class="vh-50 gradient-custom">
      {getUsuario && getSenha ? (
        <Servicos/>
      ) : (
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-md-5">
            <div class="card bg-dark text-white">
              <div class="card-body p-5 text-center d-flex justify-content-center align-items-center flex-column  ">
                <form onSubmit={verifSubmit} >
    
                  <div class="mb-md-5 mt-md-4 pb-5">
      
                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                    <p class="text-white-50 mb-5">Por favor insira seu login e senha</p>
      
                    <div class="form-outline form-white mb-4">
                      <input type="text" ref={usuario} class="form-control form-control-lg" />
                      <label class="form-label" for="typeEmailX">Usuário</label>
                    </div>
      
                    <div class="form-outline form-white mb-4">
                      <input type="password" ref={senha} class="form-control form-control-lg" />
                      <label class="form-label" for="typePasswordX">Senha</label>
                    </div>  
                    <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button> 
              
                   </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     )}
  </section>

  );
}

export default Login;
