import React from 'react'
import './services.css'
import {GoCheck} from 'react-icons/go'

const Servises = () => {
  return (
    <section id='services'>
    <h5>Moja Oferta</h5>
    <h2>Usługi</h2>

    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>Trening Personalny</h3>
        </div>

        <ul className='service__list'>
          <li>
            <GoCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GoCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GoCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GoCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </article>
      {/* /*END OF  TRENING PERSONALNY */}
      <article className="service">
        <div className="service__head">
          <h3>Plan Treningowy Online</h3>
        </div>

        <ul className='service__list'>
          <li>
            <GoCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GoCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GoCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GoCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GoCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GoCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </article>
      {/* /*END OF PLAN TRENINGOWY ONLINE */}
      <article className="service">
        <div className="service__head">
          <h3>Szkolenia i Kursy</h3>
        </div>

        <ul className='service__list'>
          <li>
            <GoCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GoCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GoCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GoCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </article>
      {/* END OF SZKOLENIA I KURSY */}
    </div>
    </section>
  )
}

export default Servises