import React from "react";

const NumberWordComponent = props => {

    const path = props.id;

    if (isNaN(path)) {
        return (
            <h1>The word is: {path}</h1>
        )
    }
    return (
        <h1>The number is: {path}</h1>
    )
}

export default NumberWordComponent;