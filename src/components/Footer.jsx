import React from 'react'
import '../styles/Footer.css'
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaTiktok , FaYoutube} from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
    <footer className="footer1">
        <div className="container1">
            <div className='spoon'>
            <img src="src/assets/greenspoon-logo.svg" alt="logo"></img>
            <h3>honestly delicious</h3>
            </div>
            <div className='location'>
              <ul>
                <li>+254 727 444 777</li>
                <li>shop@greenspoon.co.ke</li>
                <li>Nairobi, Kenya</li>
                <li>Need help?</li>
                <li><span><FaWhatsapp /></span> Chat with us on Whatsapp</li>
              </ul>
                <img src='src/assets/certified.webp' alt='cerified'></img>
            </div>
            </div>
            <div>
            <div className='about'>
              <div>
                <h3>ABOUT</h3>
                <ul>
                  <li>Producers</li>
                  <li>Why Greenspoon</li>
                  <li>The Green Life</li>
                </ul>
                </div>
                <div>
                <h3>SUPPORT</h3>
                <ul>
                  <li>Contacts</li>
                  <li>FAQs</li>
                  <li>Privacy Policy</li>
                  <li>Terms and Conditions</li>
                </ul>
                </div>
              
            </div>
            <div className='warning'>
            <h><b>WARNING: </b>Alcohol is harmful to your health and is not for sale to persons under the age of 18.</h>
            </div>
            <div className='connect'>
              <h>CONNECT WITH US</h>
              <div className='social'>
                <ul>
                  <li><FaFacebook /></li>
                  <li><FaInstagram /></li>
                  <li><FaLinkedin /></li>
                  <li><FaTiktok /></li>
                  <li><FaYoutube /></li>
                </ul>
              </div>
            </div>
            </div>
            <div className='newsletter'>
              <h>The Green Life</h>
              <h4>SIGN UP FOR NEWS AND DEALS!</h4>
              <p1>Treat yourself with weekly product releases, digital love, recipes, and exclusive deals.</p1>
              <div className='input'>
                <input type='text' placeholder='First Name' />
                <input type='text' placeholder='Email' />
                <button>SIGN UP</button>
              </div>
            </div>
    </footer>
    <div className='copyright'>
        <p>© Copyright 2024 Greenspoon | Privacy Policy | Terms and Conditions</p>
    </div>
  </div>
  )
}

export default Footer