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

  handleDelete = (lixeiraNome) => {
  axios
    .post('http://localhost:5000/excluir', { nomeLixeira: lixeiraNome })
    .then(response => {
      console.log('Resposta da API:', response.data);
      const updatedLixeiras = this.state.lixeiras.filter(lixeira => lixeira.nomeLixeira !== lixeiraNome);
      this.setState({ lixeiras: updatedLixeiras });

      // Recarregar a página após a exclusão bem-sucedida
      window.location.reload();
    })
    .catch(error => {
      console.error('Erro na solicitação da API:', error);
      // Adicione aqui o tratamento de erro, se necessário
    });
};
  render() {
    return (
      <div className="container mt-5 d-flex justify-content-center align-items-center">
        <div className="card bg-dark text-white">
          <h1 className="mt-3 text-center">Serviços</h1>
          {sessionStorage.getItem('userData') === 'admin' && (
            <div className="text-center ">
              <div className="my-5 d-flex justify-content-center align-items-center">
                <button className="btn btn-danger" onClick={this.handleLogout}>
                  Sair
                </button>
              </div>
              <h2 className="mb-4">Lista de Lixeiras:</h2>
              <ul className="list-group">
                {this.state.lixeiras.map((lixeira, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      {lixeira.nomeLixeira} - {lixeira.cidadeLixeira} - {lixeira.localLixeira}
                    </div>
                    <button
                      className="btn btn-danger ml-5"
                      onClick={() => this.handleDelete(lixeira.nomeLixeira)}
                    >
                      Excluir
                    </button>
                  </li>
                ))}
              </ul>
              <h2 className="mt-4 mb-3">Cadastrar Lixeira</h2>
              {this.state.errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {this.state.errorMessage}
                </div>
              )}
              <form onSubmit={this.handleSubmit} className="allign-items-center">
                <div>
                  <div className="mb-3">
                    <label htmlFor="nomeLixeira" className="form-label">
                      Nome da Lixeira:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nomeLixeira"
                      name="nomeLixeira"
                      value={this.state.nomeLixeira}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="cidadeLixeira" className="form-label">
                      Cidade da Lixeira:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cidadeLixeira"
                      name="cidadeLixeira"
                      value={this.state.cidadeLixeira}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="localLixeira" className="form-label">
                      Local da Lixeira:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="localLixeira"
                      name="localLixeira"
                      value={this.state.localLixeira}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={this.state.isLoading}
                  >
                    {this.state.isLoading ? 'Aguarde...' : 'Cadastrar'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
    </div>

    );
  }
}

export default Servicos;
