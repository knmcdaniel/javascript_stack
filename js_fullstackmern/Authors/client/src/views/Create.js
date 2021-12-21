import React, {useState} from "react";
import { Link, navigate } from "@reach/router";
import AuthorForm from "../components/AuthorForm";
import axios from "axios";


const Create = () => {

    const [errors, setErrors] = useState([]);

    const onSubmitHandler = (e, author) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author/create', author)
            .then(res=> {
                console.log(res.data);
                navigate("/");}
                )
            .catch((err) =>{
                console.log(err);
                const errorResponse = err.response.data.errors;
                const errorArr = [];

                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })
    }


    return (
        <div>
            <h1>Favorite Author</h1>
            {errors.map((error, idx) => {
                return (
                    <p key={idx}>{error}</p>
                )
            })}
            <AuthorForm onSubmitHandler = {onSubmitHandler} initialAuthor= 'Name'/>
        </div>
    )
}

export default Create;