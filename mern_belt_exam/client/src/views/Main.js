import React, {useEffect,useState} from 'react'
import axios from 'axios'
import PetList from '../components/PetList'
import {Link} from '@reach/router';

const Main = () => {

    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
            .then(res=>{
                setPets(res.data);
                setLoaded(true);
            });
    },[])



    return (
        <div>
            <h1 className="smaller">These pets are looking for a good home</h1>
            <Link className="logout_button" to="/pet/create">add a pet to the shelter</Link>
            {loaded && <PetList pets = {pets} />}
        </div>
    )
}

export default Main;