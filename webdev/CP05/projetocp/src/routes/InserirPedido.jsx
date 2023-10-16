import React, { useState } from 'react';
import { ListaProdutos } from '../components/ListaProdutos';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlinePlusCircle as Add } from 'react-icons/ai';
import { GrFormEdit as Editar } from 'react-icons/gr';
import { RiDeleteBin2Fill as Excluir } from 'react-icons/ri';

function Pedido() {
  const [carrinho, setCarrinho] = useState([]); // Estado do carrinho

  // Função para adicionar um item ao carrinho
  const adicionarAoCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
  };

  return (
    <>
      <h1>Pedidos</h1>
      {ListaProdutos.map((item, indice) => (
        <tr key={indice}>
          <td>{item.id}</td>
          <td>{item.nome}</td>
          <td>{item.desc}</td>
          <td>{item.valor}</td>
          <td>
            <button onClick={() => adicionarAoCarrinho(item)}>
              
              <Add />

            </button>
          </td>
          <td>
          <Link to={`/editarpedido/produtos/${item.id}`}>
            <Editar />
            </Link>{' '}
          <Link to={`/excluirproduto/produtos/${item.id}`}>
            <Excluir />
            {/*espaço entre os links '' */}
          </Link>{' '}
          </td>
        </tr>
      ))}

      <h2>Carrinho</h2>
      <ul>
        {carrinho.map((item, indice) => (
          <li key={indice}>
            {item.nome} - R$ {item.valor}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Pedido;
