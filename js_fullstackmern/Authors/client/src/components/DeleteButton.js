import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
const DeleteButton = (props) => {

    const { authorId, successCallback } = props;


    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res=>{ 
                successCallback();
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <button onClick={deleteAuthor} className="button submit">
            Delete
        </button>
    )
}
export default DeleteButton;

