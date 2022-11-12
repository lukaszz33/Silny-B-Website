import React from 'react'
import Oferta from '../../assets/oferta.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Oferta} download className='btn'>Zobacz Ofertę</a>
        <a href="#contact" className='btn btn-primary'>Porozmawiajmy</a>
    </div>
  )
}

export default CTA