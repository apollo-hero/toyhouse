import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Toy.css';

const Toy = ({toy}) => {
    const {_id, name, price, seller, details, quantity, img } = toy;
    const navigate =  useNavigate()
    const handleToyDetails = id =>{
        navigate(`/toydetails/${id}`);

    }
    return (
        <div className='toy'>
            <img className='toy-image' src={img} alt="" />
            <h4>{name}</h4>
            <p>Seller: {seller}</p>
            <h4>Price: ${price}</h4>
            <h5>Available Quantity: {quantity}</h5>
            <p className='p-2'>Details: {details.slice(0,70)}</p>
            <Button onClick={() => handleToyDetails(_id)} className='update-button'>Update</Button>

        </div>
    );
};

export default Toy;