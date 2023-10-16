import {} from 'react';
import { BsFacebook as FaceBook } from "react-icons/bs"
import { AiFillInstagram as Instagram } from "react-icons/ai"
import { AiFillLinkedin as Linkedin } from "react-icons/ai"

function Footer (){
  return(
    <>
      <section >
      <h3>@2023-todos os direitos reservados</h3>
      </section>
      <FaceBook />
      <Instagram />
      <Linkedin />
    </>
  )
}
export default Footer