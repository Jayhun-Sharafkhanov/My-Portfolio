import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/jeyhun-sharafkhanov-102814234/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Jayhun-Sharafkhanov" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials