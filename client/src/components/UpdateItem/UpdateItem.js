import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateItem.css';

const UpdateItem = () => {
    const {id} = useParams();
    const [toy, setToy] = useState({});

    useEffect( () =>{
        const url= `http://localhost:5000/toy/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setToy(data));

    }, []);

    const handleUpdateItem = event =>{
        
        event.preventDefault();
        const name = event.target.name.value;
        const details = event.target.details.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const seller = event.target.seller.value;
        const img = event.target.img.value;

        const updateToy = {name, details, price, quantity, seller, img};
        const url = `http://localhost:5000/toy/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
        .then(res=>res.json())
        .then(result=>{
            alert('Item is Updated Successfully');
            
        } )

    };

    return (
        <div className='w-50 mx-auto'>
            <h3>Update This Toy {toy.name}</h3>
            
            <form onSubmit={handleUpdateItem} >
                <input className='w-100' defaultValue={toy.name}  type="text" name="name"   placeholder='Item Name' required />
                <br />
                <input className='w-100' defaultValue={toy.details} type="textarea" name="details" placeholder='Item Details' required />
                <br />
                <input className='w-100' defaultValue={toy.price} type="number" name="price" placeholder='Item Price' required />
                <br />
                <input className='w-100' defaultValue={toy.quantity} type="number" name="quantity" placeholder='Item Quantity' required />
                <br />
                <input className='w-100' defaultValue={toy.seller}  type="text" name="seller" placeholder='Seller Name' required />
                <br />
                <input className='w-100' defaultValue={toy.img}  type="text" name="img" placeholder='Img URL' required />
                <br />
                <br />
                <input className='w-100' type="submit" value="Update" />


            </form>

        </div>
    );
};

export default UpdateItem;