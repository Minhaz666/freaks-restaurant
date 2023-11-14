import React from 'react';

const FoodCard = ({item}) => {
    
    const {image,name,recipe,price}=item;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='bg-slate-900 text-white absolute right-0 px-4 py-4'>${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;