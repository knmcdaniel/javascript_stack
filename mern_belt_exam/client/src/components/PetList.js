import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router'
import axios from 'axios';

const PetList = () => {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {setPets(res.data)})
            .catch(err => console.log(err));
    }, [])


    return (
        <div>
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                <tr>
                    <th>Pet Name</th>
                    <th>Type</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {pets.map((pet, idx) => (
                        <tr key={idx}>
                            <td>
                                <p>{pet.petName}</p>
                            </td>
                            <td>
                                <p>{pet.petType}</p>
                            </td>
                            <td>
                                <Link to={"/pet/" + pet._id} ><span className="spanlinks">Details |</span></Link>
                                <Link to={"/pet/" + pet._id + "/edit"} ><span className="spanlinks"> Edit</span></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default PetList;

