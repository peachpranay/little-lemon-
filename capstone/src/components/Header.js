//Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner from './images/banner.jpg';
const Header = () => {
    const navigate = useNavigate();
   
    return (
        
        <header className='header'>
         <section>
            
            <div className='banner'>
                <h2>Little Lemon</h2>
                <h3>India</h3>
                <p>Vibrant flavors and aromatic spices fill the air in this cozy eatery, offering authentic Indian cuisine and warm hospitality.</p>
               
                <button onClick={()=>navigate("/booking")} >Reservation</button>
              
                
            </div>
            <div className='banner-img'>
                <img src={banner} alt='' className=''/>
            </div>
         </section>
           
        </header>
    );
};

export default Header;