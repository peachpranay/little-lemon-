// Menu.js
import React from 'react';
import recipes from './recipe';
import Swal from 'sweetalert2';


const Menu = () => {

    const handleOrder = (id) => {
        console.log(id, "id is clicked");

        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
          title: 'Do you want to Add this Item?',
          text:"You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: false,
          confirmButtonText: 'Yes, Order it!',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              'Added!',
              'Your Item has been Ordered.',
              'success'
            )
          }
        })

  }
    return (
      <div className="menu-container">
        <div className="menu-header">
          <h2>This weeks specials!</h2>
          <button>Online Menu</button>
        </div>
        <div className="cards">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="menu-items">
              <img src={recipe.image} alt="" />
              <div className="menu-content">
                <div className="heading">
                  <h5>{recipe.title}</h5>
                  <p>Rs.{recipe.price}</p>
                </div>
                <p>{recipe.description}</p>
                <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Menu;





