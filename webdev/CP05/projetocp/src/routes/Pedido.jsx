import React, { } from 'react';
import { Link } from 'react-router-dom';

function Pedido() {

  return (
    <>
      <h1>Pedidos</h1>      {/* Botão que leva o usuário para a página de inserir pedido */}
      <Link to="/InserirPedido">Fazer Pedido</Link>
    </>
  );
}

export default Pedido;
