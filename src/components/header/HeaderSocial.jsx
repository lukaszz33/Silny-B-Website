import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'
import {ImInstagram} from 'react-icons/im'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://facebook.com" target="_blank"><GrFacebook/></a>
        <a href="https://instagram.com" target="_blank"><ImInstagram/></a>
    </div>
  )
}

export default HeaderSocial