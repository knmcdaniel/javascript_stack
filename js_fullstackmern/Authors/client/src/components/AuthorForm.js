import React, { useState } from "react";
import { Link } from "@reach/router";

const AuthorForm = (props) => {

    const { initialAuthorName, onSubmitProp } = props;
    const [authorName, setAuthorName] = useState(initialAuthorName);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({authorName});
    }

    return (
        <form onSubmit={onSubmitHandler}>
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
