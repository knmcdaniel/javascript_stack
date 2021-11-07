import React, {useState} from "react";


const NewUserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [disableCreate, setDisableCreate] = useState(true);
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false); 
    
    const createUser = (e) => {

        e.preventDefault();

        const newUser = { firstName, lastName, email, password, confirmPassword };

        console.log("Welcome", newUser);

        setFirstName ("")
        setLastName ("")
        setEmail ("")
        setPassword ("")
        setConfirmPassword ("")

        setHasBeenSubmitted( true );
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
            setDisableCreate(true);
        } else if (e.target.value.length < 2) {
            setFirstNameError("First Name must be longer than 2 characters!");
            setDisableCreate(true);
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
            setDisableCreate(true);
        } else if (e.target.value.length < 2) {
            setLastNameError("Last Name must be longer than 2 characters!");
            setDisableCreate(true);
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
            setDisableCreate(true);
        } else if (e.target.value.length < 2) {
            setEmailError("Email must be longer than 2 characters!");
            setDisableCreate(true);
        } else {
            setEmailError("");
        }
    }



    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
            setDisableCreate(true);
        } else if (e.target.value.length < 4) {
            setPasswordError("Your password must be longer than 4 characters!");
            setDisableCreate(true);
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(password !== e.target.value) {
            setConfirmPasswordError("Passwords must Match!");
            setDisableCreate(true);
        } else {
            setConfirmPasswordError("");
            setDisableCreate(false);
        }
    }

    
    return(
    <div className="userform">
        <form onSubmit={ createUser } >
            {
                hasBeenSubmitted ? 
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3> 
            }
            <div>
                <label className="label"> First Name: </label>
                <input className="input is-normal" type="text" onChange={ handleFirstName } />
                { firstNameError ? <p> {firstNameError} </p> : '' }
            </div>
            <div>
                <label className="label"> Username: </label>
                <input className="input is-normal" type="text" onChange={ handleLastName } />
                { lastNameError ? <p> {lastNameError} </p> : '' }
            </div>
            <div>
                <label className="label">Email Address: </label> 
                <input className="input is-normal" type="email" onChange={ handleEmail } />
                { emailError ? <p> {emailError} </p> : '' }
            </div>
            <div>
                <label className="label">Password: </label>
                <input className="input is-normal" type="password" onChange={ handlePassword } />
                { passwordError ? <p> {passwordError} </p> : '' }
            </div>
            <div>
                <label className="label">Confirm Password: </label>
                <input className="input is-normal" type="password" onChange={ handleConfirmPassword } />
                { confirmPasswordError ? <p> {confirmPasswordError} </p> : '' }
            </div>
            {
                disableCreate ?
                <input className="button submit" type="submit" value="Create User" disabled /> :
                <input className="button submit" type="submit" value="Create User"/>
            }
        </form>


    </div>
    );
};

export default NewUserForm;