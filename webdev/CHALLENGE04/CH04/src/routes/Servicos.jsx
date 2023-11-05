import React from 'react';

function Servicos() {
  const handleLogout = () => {
    // Limpe os dados de sessão que simulam o login
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('senhaData');
    
    // Redirecione o usuário para a página de login usando a função window.location
    window.location.href = '/login';
  };

  return (
    <div>
      <h1>ASDASD</h1>
      {sessionStorage.getItem('userData') === 'admin' && (
        <div>
          <button onClick={handleLogout}>Sair</button>
          {/* Conteúdo dos serviços para o usuário admin */}
        </div>
      )}
    </div>
  );
}

export default Servicos;
