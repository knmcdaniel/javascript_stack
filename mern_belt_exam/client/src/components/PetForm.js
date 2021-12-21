import React, { useState } from "react";
import { Link } from "@reach/router";

const PetForm = (props) => {

    const { onSubmitHandler, initialPetName, initialPetType, initialPetDesc, initialPetSkill1, initialPetSkill2, initialPetSkill3, activity } = props;

    const [petName, setPetName] = useState(initialPetName);
    const [petType, setPetType] = useState(initialPetType);
    const [petDesc, setPetDesc] = useState(initialPetDesc);
    const [petSkill1, setPetSkill1] = useState(initialPetSkill1);
    const [petSkill2, setPetSkill2] = useState(initialPetSkill2);
    const [petSkill3, setPetSkill3] = useState(initialPetSkill3);

    return (
        <form className="formborder" onSubmit={ e => onSubmitHandler (e, {petName, petType, petDesc, petSkill1, petSkill2, petSkill3} )}>
        <div className="content">
            <div className="half">
            <p>
                <label className="label">Pet Name:</label>
                <input className="input is-normal" type="text" value={petName} onChange = {(e)=>setPetName(e.target.value)}/>
            </p>
            <p>
                <label className="label">Pet Type:</label>
                <input className="input is-normal" type="text" value={petType} onChange = {(e)=>setPetType(e.target.value)}/>
            </p>
            <p>
                <label className="label">Pet Description:</label>
                <input className="input is-normal" type="text" value={petDesc} onChange = {(e)=>setPetDesc(e.target.value)}/>
            </p>
            </div>
            <div className="half">
                <label className="label">Skills (optional):</label>
            <p>
                <label className="label">Skill 1:</label>
                <input className="input is-normal" type="text" value={petSkill1} onChange = {(e)=>setPetSkill1(e.target.value)}/>
            </p>
            <p>
                <label className="label">Skill 2:</label>
                <input className="input is-normal" type="text" value={petSkill2} onChange = {(e)=>setPetSkill2(e.target.value)}/>
            </p>
            <p>
                <label className="label">Skill 3:</label>
                <input className="input is-normal" type="text" value={petSkill3} onChange = {(e)=>setPetSkill3(e.target.value)}/>
            </p>
            </div>
        </div>
            <div className="half">
                <input className="button submit petform_activity" type="submit" value={activity}/>
            </div>
        </form>
    )


}

export default PetForm;
