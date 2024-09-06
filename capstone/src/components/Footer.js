//Footer.js
import React from 'react';
import logo from './images/logo.svg'

const Footer = () => {
  return (
<footer>
    <section>
        <div className='company-info'>
            <img src={logo} alt=''/>
            <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
        </div>
        <div>
            <h3>Links</h3>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/Menu'>Menu</a></li>
             
                <li><a href='/Booking'>Reservation</a></li>
                
                
            </ul>
        </div>

        <h3>Contact</h3>
            <ul>
                <li>Address: <br/> 1234 Delhi, India</li>
                <li>Telephone:<br/> +91 9876567890</li>
                <li>Email: <br/> littlelemon@mail.com</li>
            </ul>

        <div>
            <h3>Social Media</h3>
            <ul>
            <li><a href='/'>Facebook</a></li>
            <li><a href='/'>Instagram</a></li>
            <li><a href='/'>Twitter</a></li>
            </ul>
        </div>
    </section>
</footer>
  );
}

export default Footer;