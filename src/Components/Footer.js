import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by HAMZA RAOUAH</h4>
      <h4>Copyright &copy; 2024 DS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Hamzarhaouah" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/hamza-raouah-623882257/" target='_blank'><FaLinkedin/></a>
        <a href='https://mail.google.com/mail/u/0/#inbox' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer