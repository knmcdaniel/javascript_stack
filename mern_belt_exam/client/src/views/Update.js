import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import PetForm from "../components/PetForm";


const Update = (props) => {

    const { id } = props;
    const [pet, setPet] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => {
                setPet(res.data);
                setLoaded(true);
            })
    }, [])

    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pet/' + id, data)
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
            
            <h1 className="smaller">Edit {pet.petName}</h1>
            <Link className="logout_button" to="/">back to home</Link>
            {errors.map((error, idx) => {
                return (
                    <p className="messages" key={idx}>{error}</p>
                )
            })}
            { loaded && (<PetForm onSubmitHandler={onSubmitHandler} initialPetName= {pet.petName}initialPetType={pet.petType} initialPetDesc={pet.petDesc} initialPetSkill1={pet.petSkill1} initialPetSkill2={pet.petSkill2} initialPetSkill3={pet.petSkill3} activity="Edit Pet"/>)}
        </div>
    )
}

export default Update;