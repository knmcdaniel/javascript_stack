import React, {useEffect,useState} from 'react'
import axios from 'axios'
import ProductForm from '../components/productform';
import ProductList from '../components/productlist';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            });
    },[])

    return (
        <div>
            <ProductForm />
            <hr/>
            {loaded && <ProductList products = {products} />}
        </div>
    )
}

export default Main;