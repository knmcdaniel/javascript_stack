import React, { useState } from "react";
import { Link } from "@reach/router";

const AuthorForm = (props) => {

    const { onSubmitHandler, initialAuthor } = props;
    const [authorName, setAuthorName] = useState(initialAuthor);

    return (
        <form onSubmit={ e => onSubmitHandler (e, {authorName} )}>
            <p>
                <label className="label">Author Name:</label><br/>
                <input className="input is-normal" type="text" value={authorName} onChange = {(e)=>setAuthorName(e.target.value)}/>
            </p>
                <input className="button submit" type="submit" />
                <Link to="/"><button className="button submit" >Back</button></Link>
        </form>
    )


}

export default AuthorForm;
