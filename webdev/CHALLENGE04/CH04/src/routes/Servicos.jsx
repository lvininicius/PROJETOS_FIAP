import React, { Component } from 'react';
import axios from 'axios';

class Servicos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lixeiras: [],
      nomeLixeira: '',
      cidadeLixeira: '',
      localLixeira: '',
      isLoading: false,
      errorMessage: '',
    };
  }

  componentDidMount() {
    this.fetchLixeiras();
  }

  fetchLixeiras = () => {
    axios.get('http://localhost:5000/consultar')
    axios.get('http://{{url}}:4041/iot/about')
      .then(response => {
        if (Array.isArray(response.data)) {
          this.setState({ lixeiras: response.data });
        } else {
          console.error('Resposta da API não é um array:', response.data);
        }
      })
      .catch(error => {
        console.error('Erro ao consultar a API:', error);
      });
  }

  handleLogout = () => {
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('senhaData');
    window.location.href = '/login';
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const lixeiraData = {
      nomeLixeira: this.state.nomeLixeira,
      cidadeLixeira: this.state.cidadeLixeira,
      localLixeira: this.state.localLixeira,
    };

    this.setState({ isLoading: true, errorMessage: '' });

    axios
      .post('http://localhost:5000/cadastro', lixeiraData)
      .then(response => {
        console.log('Resposta da API:', response.data);
        this.setState({
          nomeLixeira: '',
          cidadeLixeira: '',
          localLixeira: '',
        });
        this.fetchLixeiras(); // Atualiza a lista após cadastrar uma nova lixeira
      })
      .catch(error => {
        console.error('Erro na solicitação da API:', error);
        this.setState({ errorMessage: 'Erro ao cadastrar a lixeira. Por favor, tente novamente.' });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleDelete = (lixeiraId) => {
    axios
      .delete(`http://localhost:5000/excluir/${lixeiraId}`)
      .then(response => {
        console.log('Resposta da API:', response.data);
        const updatedLixeiras = this.state.lixeiras.filter(lixeira => lixeira.id !== lixeiraId);
        this.setState({ lixeiras: updatedLixeiras });
      })
      .catch(error => {
        console.error('Erro na solicitação da API:', error);
        // Adicione aqui o tratamento de erro, se necessário
      });
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
                  {lixeira.nomeLixeira} - {lixeira.cidadeLixeira} - {lixeira.localLixeira}
                  <button onClick={() => this.handleDelete(lixeira.id)}>Excluir</button>
                </li>
              ))}
            </ul>
            <h2>Cadastrar Lixeira</h2>
            {this.state.errorMessage && <div style={{ color: 'red' }}>{this.state.errorMessage}</div>}
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Nome da Lixeira:</label>
                <input
                  type="text"
                  name="nomeLixeira"
                  value={this.state.nomeLixeira}
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <label>Cidade da Lixeira:</label>
                <input
                  type="text"
                  name="cidadeLixeira"
                  value={this.state.cidadeLixeira}
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <label>Local da Lixeira:</label>
                <input
                  type="text"
                  name="localLixeira"
                  value={this.state.localLixeira}
                  onChange={this.handleInputChange}
                />
              </div>
              <button type="submit" disabled={this.state.isLoading}>
                {this.state.isLoading ? 'Aguarde...' : 'Cadastrar'}
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Servicos;
