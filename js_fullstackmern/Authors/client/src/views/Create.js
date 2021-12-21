import React, {useState} from "react";
import { Link, navigate } from "@reach/router";
import AuthorForm from "../components/AuthorForm";
import axios from "axios";


const Create = () => {

    const [author, setAuthor] = useState([]);

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/author/create', author)
            .then(res=> {setAuthor(res.data)});
    }


    return (
        <div>
            <h1>Favorite Author</h1>
            <h2> Add a Favorite Author</h2>
            <AuthorForm onSubmitProp= {createAuthor} initialAuthorName="Name" />
        </div>
    )
}

export default Create;