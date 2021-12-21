import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import AuthorForm from "../components/AuthorForm";
import DeleteButton from "../components/DeleteButton";


const Update = (props) => {

    const { id } = props;
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])

    const updateAuthor = e => {
        
        axios.put('http://localhost:8000/api/author/' + id, e.name)
            .then(res=> console.log(res));
    }

    return (
        <div>
            <h1>Edit Favorite Author</h1>
            { loaded && (<AuthorForm onSubmitProp={updateAuthor} initialAuthorName= {author.name}/>)}
            <DeleteButton personId={author._id} successCallback={() => navigate("/")} />
        </div>
    )
}

export default Update;