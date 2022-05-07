import React, { useEffect, useState } from 'react';

const useToys = () => {
    const [toys, setToys] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/toy')
        .then(res=>res.json())
        .then(data=>setToys(data))
    }, []);
    return [toys, setToys]
};

export default useToys;