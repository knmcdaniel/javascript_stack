import React from "react";

const CSSComponent = props => {

    const word = props.word;
    const text = props.textColor;
    const bgcolor = props.backgroundColor;


    return (
        <h1 style={{color: text, backgroundColor:bgcolor}}>The word is: {word}</h1>
    )
}


export default CSSComponent;