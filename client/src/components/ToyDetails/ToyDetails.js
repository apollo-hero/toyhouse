import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './ToyDetails.css';

const ToyDetails = () => {
    const addQuantityRef = useRef('');
    const {toydetailId} = useParams();
    const [toy, setToy] =  useState({});
    useEffect( () =>{
        const url = `http://localhost:5000/toy/${toydetailId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setToy(data));
    },[]);
    const {_id, name, price, seller, details, quantity, img } = toy;
    const navigate =  useNavigate()
    const handleUpdate = id =>{
        navigate(`/updateitem/${id}`);

    };

    const handleDeliver = id => {
        const newquantity =  quantity - 1;
        const updateToy = {name, details, price, newquantity, seller, img};
        const url = `http://localhost:5000/toy/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
        .then(res=>res.json())
        .then(result=>setToy(result));

    };

    const handleAddQuantity = event =>{
        event.preventDefault();
        const addQuantity =  addQuantityRef.current.value;
        const updateToy = {name, details, price, addQuantity, seller, img};
        const url = `http://localhost:5000/toy/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
        .then(res=>res.json())
        .then(result=>setToy(result));
        
    }
    

    return (
        <div className='text-center toy-img'>
            <h3>{toy.name}</h3>
            <img src={toy.img} alt="" />
            <h4>Price: ${toy.price}</h4>
            <h4>Quantity: {toy.quantity}</h4>
            <h3 className='p-5'>{toy.details}</h3>
            <Button onClick={() => handleDeliver(_id)} >Deliver Now</Button>
            <br />
            or
            <br />
            
            <form onSubmit={handleAddQuantity}>
                <input type="number" ref={addQuantityRef} name="" id="" />
                <br />
                <input className='bg-primary text-white' type="submit" value="Add Quantity" />
            </form>
            or
            <br />
            <Button onClick={() => handleUpdate(_id)} >Update Item Now</Button>
            
        </div>
    );
};

export default ToyDetails;