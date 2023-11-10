import {} from 'react'
import '../SCSS/Footer.scss';
import insta from '../assets/icons8-facebook-250.png'
import whats from '../assets/icons8-instagram-250.png'
import linkdin from '../assets/icons8-linkedin-250.png'
function Footer (){
    return(
        <>
        <footer>
                <p className='pFooter'>Copyright © 2023 TYBA-IOT

Todos os direitos reservados. Este software é protegido por leis de direitos autorais e tratados internacionais. Nenhuma parte deste website pode ser reproduzida, distribuída ou transmitida de qualquer forma ou por qualquer meio, incluindo fotocópia, gravação ou outros métodos eletrônicos ou mecânicos, sem a permissão prévia por escrito do TYBA-IOT, exceto no caso de breves citações incorporadas em análises críticas e outros usos não comerciais permitidos por leis de direitos autorais.

Para obter permissões relacionadas ao uso deste website, entre em contato com os proprietarios.
</p>
                <img src={insta}/>
                <img src={whats}/>
                <img src={linkdin}/>
        </footer>
        </>
    );
}

export default Footer