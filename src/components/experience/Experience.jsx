import React from 'react'
import './experience.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>Moje Specjalizacje</h5>
    <h2>Moje Doświadczenie</h2>

    <div className='container experience__container'>
      <div className="experience__strenght">
        <h3>Trening Siłowy</h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <BsCheckCircleFill />
            <h4>Kettlebells</h4>
            <small className='text-light'>Zaawansowany</small>
          </article>
          <article className='experience__details'>
            <BsCheckCircleFill />
            <h4>TRX</h4>
            <small className='text-light'>Zaawansowany</small>
          </article>
          <article className='experience__details'>
            <BsCheckCircleFill />
            <h4>Trójbój Siłowy</h4>
            <small className='text-light'>Zaawansowany</small>
          </article>
          <article className='experience__details'>
            <BsCheckCircleFill />
            <h4>Kulturystyka</h4>
            <small className='text-light'>Zaawansowany</small>
          </article>
        </div>
      </div>
      <div className="experience__condition">
      <h3>Kondycyjny</h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <BsCheckCircleFill />
            <h4>Triatlon</h4>
            <small className='text-light'>Zaawansowany</small>
          </article>
          <article className='experience__details'>
            <BsCheckCircleFill />
            <h4>Maratony</h4>
            <small className='text-light'>Zaawansowany</small>
          </article>
          <article className='experience__details'>
            <BsCheckCircleFill />
            <h4>Crossfit</h4>
            <small className='text-light'>Zaawansowany</small>
          </article>
          <article className='experience__details'>
            <BsCheckCircleFill />
            <h4>Pływanie</h4>
            <small className='text-light'>Zaawansowany</small>
          </article>
        </div>
        </div>
    </div>

    </section>
  )
}

export default Experience