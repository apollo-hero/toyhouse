import React from 'react';
import useToys from '../hooks/useToys';
import './ManageToys.css'

const ManageToys = () => {
    const [toys, setToys] = useToys();
    const handleDeleteItem = id => {
        const proceed = window.confirm('Are You Sure You Want to Remove this Item?')
        if (proceed) {
            const url = `http://localhost:5000/toy/${id}`;
            fetch(url, {
                method: 'DELETE'
            } )
            .then(res=> res.json())
            .then(data=>{
                const remaining = toys.filter(toy => toy._id !== id);
                setToys(remaining);
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 >Manage All Toys</h2>
            {
                toys.map(toy => <div key={toy._id}>
                    <div className='toy-items d-flex'>
                        <img src={toy.img} alt="" />
                        <h3>{toy.name} <button onClick={() => handleDeleteItem(toy._id)} >X</button></h3>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageToys;