import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Współpraca Online</h5>
      <h2>Programy Treningowe</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Forma w Domu / Kettlebells</h3>
          <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' target='__black'>Kup Program</a>
           <a href="https://github.com" className='btn btn-primary' target='__black'>7 Dni FREE</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Forma w Domu / Bodyweight</h3>
          <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' target='__black'>Kup Program</a>
           <a href="https://github.com" className='btn btn-primary' target='__black'>7 Dni FREE</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>Forma w Domu / TRX & Kettlebells</h3>
          <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' target='__black'>Kup Program</a>
           <a href="https://github.com" className='btn btn-primary' target='__black'>7 Dni FREE</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>Forma na Siłowni / Powerbuilding</h3>
          <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' target='__black'>Kup Program</a>
           <a href="https://github.com" className='btn btn-primary' target='__black'>7 Dni FREE</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>Forma na siłowni / Pośladki 3.0</h3>
          <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' target='__black'>Kup Program</a>
           <a href="https://github.com" className='btn btn-primary' target='__black'>7 Dni FREE</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt="" />
          </div>
          <h3>Forma na siłowni / FBW</h3>
          <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' target='__black'>Kup Program</a>
           <a href="https://github.com" className='btn btn-primary' target='__black'>7 Dni FREE</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio