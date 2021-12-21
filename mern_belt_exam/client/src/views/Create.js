import React, {useState} from "react";
import { Link, navigate } from "@reach/router";
import PetForm from "../components/PetForm";
import axios from "axios";


const Create = () => {

    const [errors, setErrors] = useState([]);

    const onSubmitHandler = (e, pet) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pet/create', pet)
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
            <h1 className="smaller">Know a pet needing a home?</h1>
            <Link className="logout_button" to="/">back to home</Link>
            {errors.map((error, idx) => {
                return (
                    <p key={idx}>{error}</p>
                )
            })}
            <PetForm onSubmitHandler = {onSubmitHandler} initialPetName="Name" initialPetType="Type" initialPetDesc="Description" initialPetSkill1="" initialPetSkill2="" initialPetSkill3="" activity="Add Pet"/>
        </div>
    )
}

export default Create;