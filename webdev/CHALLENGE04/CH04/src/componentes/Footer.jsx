import {} from 'react'
import '../SCSS/Footer.scss';
import insta from '../assets/icons8-instagram-256.png'
import whats from '../assets/icons8-whatsapp-400.png'
import linkdin from '../assets/icons8-linkedin-128.png'
function Footer (){
    return(
        <>
        <footer>
                <p className='pFooter'>Albion Online é um MMORPG SandBox em que você escreve sua própria história, Invés de seguir um caminho pré-determinado. Explore um vasto mundo aberto que consiste de 5 ecosistemas únicos. Tudo que você faz gera um impacto no mundo, já que em Albion a economia é produzida pelo jogador.</p>
                <img src={insta}/>
                <img src={whats}/>
                <img src={linkdin}/>
        </footer>
        </>
    );
}

export default Footer