import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router'
import axios from 'axios';
import DeleteButton from './DeleteButton';

const AuthorList = () => {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {setAuthors(res.data)})
            .catch(err => console.log(err));
    }, [])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    return (
        <div>
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                <tr>
                    <th>Author Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {authors.map((author, idx) => (
                        <tr key={idx}>
                            <td>
                                <p>{author.authorName}</p>
                            </td>
                            <td>
                            <Link to={"/author/" + author._id + "/edit"} ><button className="button submit">Edit</button></Link>
                            <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default AuthorList;

