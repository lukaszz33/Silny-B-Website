import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'
import {ImInstagram} from 'react-icons/im'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Silny Bądź - Łukasz Zacharzewski</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">O mnie</a></li>
        <li><a href="#experience">Doświadczenie</a></li>
        <li><a href="#services">Doświadczenie</a></li>
        <li><a href="#portfolio">Potrfolio</a></li>
        <li><a href="#testimonials">Opinie</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://facebook.com" target="_blank"><GrFacebook/></a>
        <a href="https://instagram.com" target="_blank"><ImInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Silny Bądź - Łukasz Zacharzewski. Wszystkie prawa zastrzezone.</small>
      </div>
    </footer>
  )
}

export default Footer