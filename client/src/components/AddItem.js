
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        const url = `http://localhost:5000/toy/`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            alert('Item is Added Successfully');
            

        } )

    };


    return (
        <div className='w-50 mx-auto'>
            <h3>Add Item</h3>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                
                <input className='mb-2' placeholder= 'Item name' {...register('name')}  />
                <textarea className='mb-2' placeholder= 'Item Details' type="text" {...register('details')}  />
                <input className='mb-2' placeholder= 'Price' type="number" {...register('price')} />
                <input className='mb-2' placeholder= 'Quantity' type="number" {...register('quantity')}  />
                <input className='mb-2' placeholder= 'Seller' type="text" {...register('seller')}  />
                <input className='mb-2' placeholder= 'Image URL' type="text" {...register('img')}  />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;