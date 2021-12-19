import React from 'react'
// import axios from 'axios'
import ProductForm from '../components/productform';

const Main = () => {
    // const [ message, setMessage ] = useState("Loading ...")
    // useEffect (() => {
    //     axios.get("http://localhost:8000/api")
    //         .then(res=>setMessage(res.data.message))
    // }, []);

    return (
        <div>
            <ProductForm />
        </div>
    )
}

export default Main;