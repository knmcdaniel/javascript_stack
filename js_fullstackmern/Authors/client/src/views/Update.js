import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import AuthorForm from "../components/AuthorForm";
import DeleteButton from "../components/DeleteButton";


const Update = (props) => {

    const { id } = props;
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])

    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/' + id, data)
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
            <h1>Edit Favorite Author</h1>
            {errors.map((error, idx) => {
                return (
                    <p key={idx}>{error}</p>
                )
            })}
            { loaded && (<AuthorForm onSubmitHandler={onSubmitHandler} initialAuthor= {author.authorName}/>)}
            <DeleteButton authorId={author._id} successCallback={() => navigate("/")} />
        </div>
    )
}

export default Update;