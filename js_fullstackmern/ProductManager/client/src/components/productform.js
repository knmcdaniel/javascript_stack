import React, {useState} from "react";
import axios from 'axios';

const ProductForm = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState ("");
    const [desc, setDesc] = useState("");

    const onSubmitHandler = e => {

        e.preventDefault();

        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            desc
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label className="label">Title:</label><br/>
                <input className="input is-normal" type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label className="label">Price:</label><br/>
                <input className="input is-normal" type="text" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label className="label">Description:</label><br/>
                <input className="input is-normal" type="text" onChange = {(e)=>setDesc(e.target.value)}/>
            </p>
            <input className="button submit" type="submit"/>
        </form>
    )

}

export default ProductForm;