import React from 'react';

const DishCard = ({ name, description, image, price, available }) => {


    return (
        <div className='dishCard shadow-lg'>
            <img className='shadow-lg p-0' src={image} />
            <h2 className='dishName'>{name}</h2>
            <p className='dishDescription'>{description}</p>
            <p className='dishPrice'>{price}€</p>
            {available ? (<p className='addToCart animate-pulse'>Add to Cart</p>) : null}
        </div>
    )
}

export default DishCard;