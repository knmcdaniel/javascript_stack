import React, {useState} from "react";


const NewUserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); 
    
    const createUser = (e) => {

        e.preventDefault();

        const newUser = { firstName, lastName, email, password, confirmPassword };

        console.log("Welcome", newUser);

        setFirstName ("")
        setLastName ("")
        setEmail ("")
        setPassword ("")
        setConfirmPassword ("")
    };
    
    return(
    <div>
        <form onSubmit={ createUser }>
            <div>
                <label class="label"> First Name: </label>
                <input class="input is-normal" type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label class="label"> Username: </label>
                <input class="input is-normal" type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label class="label">Email Address: </label> 
                <input class="input is-normal" type="email" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label class="label">Password: </label>
                <input class="input is-normal" type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label class="label">Confirm Password: </label>
                <input class="input is-normal" type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input class="button" type="submit" value="Create User"/>
        </form>
        
        <h1> Form Data </h1>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email} </p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>

    </div>
    );
};

export default NewUserForm;