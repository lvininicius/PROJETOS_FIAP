import {} from 'react'; // Certifique-se de importar 'React' corretamente
import Logo from '../assets/logo-removebg-preview.png';
import Nomelogo from '../assets/TYBA.png';
import Conceito from '../assets/apresentacao-removebg-preview.png'
import '../CSS/Home.css';

function Home() {
  return (
    <div className="page-container"> 
      <div className="centro-container">
        <img src={Logo} alt="Logo1" />
      </div>
      <img src={Nomelogo} alt="Nomelogo" className='Nometyba' />
    <div>
    </div>
    <section className='QuemSomos'>
        <div className="conteudo">
            <p>
            Quem somos ? <br /><br />
            O grupo TYBA-I.O.T tem como foco impulsionar a inovação em busca de soluções para desafios ambientais. 
            O projeto TYBA-I.O.T é nossa resposta à questão global do descarte inadequado de resíduos.
            Com tecnologia inteligente, transformamos a reciclagem em uma atividade recompensadora, promovendo um mundo mais limpo e consciente. 
            <br />
            <br />
            Junte-se a nós na revolução da reciclagem.
            </p>
            <img src={Conceito} alt="Conceito" className='conceito' />
        </div>
    </section>
    </div>
  );
}

export default Home;