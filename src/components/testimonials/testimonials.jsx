import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Anna Bąk',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione quaerat vitae illo ducimus voluptates in eaque a asperiores corporis exercitationem officiis accusantium accusamus fuga iusto adipisci cum magni neque.'
  },
  {
    avatar: AVTR2,
    name: 'Daniel Katar',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione quaerat vitae illo ducimus voluptates in eaque a asperiores corporis exercitationem officiis accusantium accusamus fuga iusto adipisci cum magni neque.'
  },
  {
    avatar: AVTR3,
    name: 'Marcin Tymon',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione quaerat vitae illo ducimus voluptates in eaque a asperiores corporis exercitationem officiis accusantium accusamus fuga iusto adipisci cum magni neque.'
  },
  {
    avatar: AVTR4,
    name: 'Karolina Tylas',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione quaerat vitae illo ducimus voluptates in eaque a asperiores corporis exercitationem officiis accusantium accusamus fuga iusto adipisci cum magni neque.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Opinie moich Podopiecznych</h5>
      <h2>Testymoniale</h2>

    <Swiper className="container testimonials__container"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="" />
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className="client__review">{review}</small>
          </SwiperSlide>
          )
        })
      }
    </Swiper>
    </section>
  )
}

export default Testimonials