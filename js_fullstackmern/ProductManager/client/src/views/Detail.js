import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router'


const Detail = (props) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.desc}</p>
            <Link to='../'><button className="button submit">Home</button></Link>
        </div>
    )
}
export default Detail;

