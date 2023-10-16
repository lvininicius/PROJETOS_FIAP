import {} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';
import { GrFormEdit as Editar } from 'react-icons/gr';
import { RiDeleteBin2Fill as Excluir } from 'react-icons/ri';


function Produtos() {
  const navigate = useNavigate();
  const handleLogout = async()=>{
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('senhaData');
    alert("Saindo da sessão");
    navigate('/');
  }

  return (
    <>
      <section>
        <h1>LISTA DE PRODUTOS</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>DESCRIÇÃO</th>
                <th>PREÇO</th>
                <th>EDITAR / EXCLUIR</th>
              </tr>
            </thead>
            <tbody>
              {/* ele faz a leitura de todos os elementos do array, executa uma função callback para cada um e devolve como retorno um novo array */}
              {ListaProdutos.map((item, indice) => (
                <tr key={indice}>
                  <td>{item.id}</td>
                  <td>{item.nome}</td>
                  <td>{item.desc}</td>
                  <td>{item.valor}</td>
                  <td>
                    {' '}
                    {/*Link para chamar a tela de editar produtos */}
                    <Link to={`/editarproduto/produtos/${item.id}`}>
                      <Editar />
                    </Link>{' '}
                    | {/*Link para chamar a tela de excluir produtos */}
                    <Link to={`/excluirproduto/produtos/${item.id}`}>
                      <Excluir />
                      {/*espaço entre os links '' */}
                    </Link>{' '}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
export default Produtos
