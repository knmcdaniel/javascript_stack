import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


const Person = (props) => {
    const [ seeAge, setSeeAge] = useState(props.age);

    return (
        <div>
            <h1> {props.lastName}, {props.firstName}</h1>
            <p>Age: {seeAge}</p>
            <p>Hair Color: {props.hairColor} </p>

            <Button variant="outline-light" size="lg" onClick={ (event)=> setSeeAge(seeAge +1) }>Birthday button for {props.firstName} {props.lastName}</Button>

        </div>
    )
}


export default Person;