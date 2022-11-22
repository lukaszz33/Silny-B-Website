import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Porozmawiajmy</h5>
      <h2>Napisz do mnie</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kontakt@silnybadz.pl</h5>
            <a href="mailto:kontakt@silnybadz.pl" target="_blank">Wyślij Wiadomość</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Silny Bądź</h5>
            <a href="https://m.me/silnybadz" target="_blank">Wyślij Wiadomość</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+48 507160389</h5>
            <a href="https://api.whatsapp.com/send?phone=+48507160389" target="_blank">Wyślij Wiadomość</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name='name' placeholder='Imię i Nazwisko' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="10" placeholder='Twoja Wiadomość' required ></textarea>
          <button type='submit' className='btn btn-primary'>Wyślij Wiadomość</button>
        </form>
      </div>

    </section>
  )
}

export default Contact