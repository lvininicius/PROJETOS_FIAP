import {} from 'react';
import Logo from '../assets/logo-removebg-preview.png';
import Nomelogo from '../assets/TYBA.png';
import Conceito from '../assets/apresentacao-removebg-preview.png';
import Lampada from '../assets/lampada.png'
import Engrenagem from '../assets/engrenagem.png'
import Dolar from '../assets/dolar-removebg-preview.png'
import '../CSS/Home.css';

function Home() {
  return (
    <div className="page-container">
      <div className="centro-container">
        <img src={Logo} alt="Logo1" />
      </div>
      <img src={Nomelogo} alt="Nomelogo" className='Nometyba' />
      <div>
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
        <img src={Engrenagem} alt="engrenagem" className="engrenagem"/>
        <p className="servicos">SERVIÇOS</p>
        <div className="planos-container">
          <section className="plano">
            <img src={Lampada} alt="lampada"/>
            <h2>Plano Básico</h2>
            <p>Perfeito para empresas que desejam dar os primeiros passos na reciclagem responsável.</p>
            <ul>
              <li>Instalação de contêineres inteligentes (quantidade limitada).</li>
              <li>Acesso à plataforma de monitoramento.</li>
              <li>Programa de recompensas básico.</li>
            </ul>
          </section>
          <section className="plano">
            <img src={Lampada} alt="lampada"/>
            <h2>Plano Intermediário</h2>
            <p>Para empresas comprometidas com a sustentabilidade.</p>
            <ul>
              <li>Mais contêineres e recursos avançados na plataforma.</li>
              <li>Incentiva participação ativa dos colaboradores e clientes.</li>
            </ul>
          </section>
          <section className="plano">
            <img src={Lampada} alt="lampada"/>
            <h2>Plano Avançado</h2>
            <p>Para empresas que querem liderar em sustentabilidade.</p>
            <ul>
              <li>Implantação completa de contêineres, acesso completo à plataforma e programa personalizado.</li>
              <li>Reconhecimento como líder ambiental e apoio dedicado.</li>
            </ul>
          </section>
        </div>
        <section className="carteira-pontos">
          <img src={Dolar} />
          <p>
            Carteira de pontos ?<br /><br/>
            SIM, SIM, SIM!!<br /><br />
            Quem não gosta daquele descontinho na hora de pagar alguma coisa em ?<br /><br />
            Imagine ter o poder de transformar seus esforços em prol do meio ambiente em recompensas tangíveis. Com um sistema de pontos inovador, sua contribuição para a economia de energia e água pode se traduzir em benefícios diretos. Nossa carteira de pontos permite que você acumule recompensas e as utilize para pagar despesas de luz e água. Isso não é apenas uma forma de economizar, mas também de reforçar seu compromisso com a sustentabilidade. Vamos explorar como esses pontos podem tornar sua vida mais econômica e ecológica ao mesmo tempo.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home;