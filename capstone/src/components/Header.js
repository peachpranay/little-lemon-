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
                <p>we are the best place to get some new dishes here and there  are many things to try</p>
               
                <button onClick={()=>navigate("/booking")} >Reservation</button>
                <button onClick={()=>navigate("/Menu")} >Menue</button>
               
                
            </div>
            <div className='banner-img'>
                <img src={banner} alt='' className=''/>
            </div>
         </section>
           
        </header>
    );
};

export default Header;