import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from "@reach/router"

const Update = (props) => {
    const { id } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState ("");
    const [desc, setDesc] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDesc(res.data.desc);
            })
            .catch(err => console.log(err))
    }, [])
    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,    
            price,
            desc   
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label className="label">Title:</label><br/>
                    <input className="input is-normal" type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
                </p>
                <p>
                    <label className="label">Price:</label><br/>
                    <input className="input is-normal" type="text" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
                </p>
                <p>
                    <label className="label">Description:</label><br/>
                    <input className="input is-normal" type="text" value={desc} onChange = {(e)=>setDesc(e.target.value)}/>
                </p>
                <input className="button submit" type="submit" />
                <Link to="../"><button className="button submit" >Back</button></Link>
            </form>
        </div>
    )
}

export default Update;