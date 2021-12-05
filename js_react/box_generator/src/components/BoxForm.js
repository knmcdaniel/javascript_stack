import React, {useState} from "react";


const BoxForm = (props) => {

    const [boxColor, setBoxColor] = useState("");
    const [boxColorError, setBoxColorError] = useState("");
    const {boxColorArray, setBoxColorArray} = props;
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false); 

    const createBox = (e) => {

        e.preventDefault();

        setBoxColorArray([...boxColorArray, boxColor ]);
        
        setBoxColor("");

        setHasBeenSubmitted( true );

    }

    const handleBoxColor = (e) => {
        if(e.target.value === "") {
            setBoxColorError("You must enter a color");
        } else {
            setBoxColorError("");
        }
        setBoxColor(e.target.value);
    }

        return(  
        <div>
            <form onSubmit={createBox}>
            {
                hasBeenSubmitted ? 
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3> 
            }
            
            <div>
                <label className="label"> Color: </label>
                <input className="input is-normal" type="text" onChange={ handleBoxColor } value={boxColor} />
                { boxColorError ? <p> {boxColorError} </p> : '' }
            </div>
            <input className="button submit" type="submit" value="Create Box" />
            </form>
        </div>
        );
}
 
export default BoxForm;