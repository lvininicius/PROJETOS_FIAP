import React, { Component } from 'react';
import axios from 'axios';

class Servicos extends Component {
  state = {
    lixeiras: [],
  };

  componentDidMount() {
    // Faça uma solicitação GET para a API Flask que retorna as lixeiras
    axios.get('http://localhost:5000/consultar')
      .then(response => {
        // Atualize o estado com os dados da API (lixeiras)
        this.setState({ lixeiras: response.data });
      })
      .catch(error => {
        console.error('Erro ao consultar a API:', error);
      });
  }

  handleLogout = () => {
    // Limpe os dados de sessão que simulam o login
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('senhaData');

    // Redirecione o usuário para a página de login usando a função window.location
    window.location.href = '/login';
  };

  render() {
    return (
      <div>
        <h1>Serviços</h1>
        {sessionStorage.getItem('userData') === 'admin' && (
          <div>
            <button onClick={this.handleLogout}>Sair</button>
            <h2>Lista de Lixeiras</h2>
            <ul>
              {this.state.lixeiras.map((lixeira, index) => (
                <li key={index}>
                  {lixeira[0]} - {lixeira[1]}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Servicos;
