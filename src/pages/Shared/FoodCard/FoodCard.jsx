import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const FoodCard = ({item}) => {
    const {image,name,recipe,price,_id}=item;
   
    const {user}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    // console.log(location)

    

    const handleAddtoCart=(item)=>{
        console.log(item)
        
        if (user && user.email)
        {
            const cartItem = {menuItemId:_id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(cartItem)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.insertedId)
                {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food added on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }

            })
        }

        
        else
        {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state:location})
                }
              })
        }

    }
    
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='bg-slate-900 text-white absolute right-0 px-4 py-4'>${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleAddtoCart(item)} className="btn btn-primary">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;