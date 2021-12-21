import React, {useEffect,useState} from 'react'
import axios from 'axios'
import AuthorList from '../components/AuthorList'
import {Link} from '@reach/router';

const Main = () => {

    const [author, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            });
    },[])

    const removeFromDom = authorId => {
        setAuthors(author.filter(author => author._id !== authorId));
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/author/create">Add an Author</Link>
            {loaded && <AuthorList authors = {author} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;