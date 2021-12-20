import React from 'react';
import { Link } from '@reach/router'
import axios from 'axios';

const ProductList = (props) => {

    const { removeFromDom, products} = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            {props.products.map((product, idx)=>{
                return ( <div key={idx}>
                        <Link to={"/product/" + product._id}><button className="button submit">{product.title}</button></Link>
                        <Link to={"/product/" + product._id + "/edit"} ><button className="button submit">Edit</button></Link>
                        <button className="button submit" onClick={(e)=>{deleteProduct(product._id)}}>
                            Delete
                        </button>
                        </div>)
            })}
        </div>
    )
}
export default ProductList;

