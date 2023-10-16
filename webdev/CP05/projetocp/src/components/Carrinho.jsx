// Carrinho.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Carrinho({ ListaProdutos }) {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerDoCarrinho = (produto) => {
    const novoCarrinho = carrinho.filter((item) => item.id !== produto.id);
    setCarrinho(novoCarrinho);
  };

  return (
    <>
      <section>
        <h1>Carrinho de Compras</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>DESCRIÇÃO</th>
                <th>PREÇO</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {carrinho.map((item, indice) => (
                <tr key={indice}>
                  <td>{item.id}</td>
                  <td>{item.nome}</td>
                  <td>{item.desc}</td>
                  <td>{item.valor}</td>
                  <td>
                    <button onClick={() => removerDoCarrinho(item)}>Remover do Carrinho</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/produtos">Voltar para a Lista de Produtos</Link>
      </section>
    </>
  );
}

export default Carrinho;
