import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";


const Update = (props) => {

    const { id } = props;
    const [pet, setPet] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => {
                setPet(res.data);
            })
    }, [])

    const deletePet = e => {
        axios.delete('http://localhost:8000/api/pet/' + pet._id)
            .then(res=>{ 
                console.log(res);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <button onClick={deletePet} className="button submit adopt_button">Adopt {pet.petName}!</button>
            <h1 className="smaller">Details about: {pet.petName}</h1>

            <Link className="logout_button" to="/">back to home</Link>
            

            <div className="content views_box">
                <div className="quarter">
                <label className="label">Pet Type:</label> <br/>
                <label className="label">Pet Description:</label> <br/>
                <label className="label">Skills:</label> <br/>
                </div>
                <div className="quarter">
                <p>{pet.petType}</p>
                <br/>
                <p>{pet.petDesc}</p>
                <br/>
                <p>{pet.petSkill1}</p>
                <p>{pet.petSkill2}</p>
                <p>{pet.petSkill3}</p>
                </div>
            </div>
            
            
        </div>
    )
}

export default Update;