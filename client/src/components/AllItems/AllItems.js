import React, { useEffect, useState } from 'react';
import Toy from '../Toy/Toy';

const AllItems = () => {

    const [toys, setToys] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/toy')
        .then(res=>res.json())
        .then(data=>setToys(data))
    }, [])

    return (
        <div className='container toys-background'>
            <h2 className='items'>Available Items</h2>
            <div className='toys'>
            {
                toys.map(toy => <Toy key={toy._id} toy={toy} ></Toy>)
            }
            </div>
        </div>
    );
};

export default AllItems;