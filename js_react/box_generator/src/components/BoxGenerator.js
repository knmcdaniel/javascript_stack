import React, {useState} from "react";


const BoxGenerator = (props) => {

    const [boxColor, setBoxColor] = useState("");
    const [boxColorError, setBoxColorError] = useState("");
    let boxArray = ["red"];
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false); 

    const createBox = (e) => {

        e.preventDefault();

        const newBox =  {boxColor};

        console.log(newBox);

        boxArray.push(newBox);
        console.log(boxArray);

        setBoxColor ("");

        setHasBeenSubmitted( true );

    }

    const handleBoxColor = (e) => {
        setBoxColor(e.target.value);
        if(e.target.value.length < 1) {
            setBoxColorError("You must enter a color");
        } else {
            setBoxColorError("");
        }
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
                <input className="input is-normal" type="text" onChange={ handleBoxColor } />
                { boxColorError ? <p> {boxColorError} </p> : '' }
            </div>
            <input className="button submit" type="submit" value="Create Box" />
            </form>
            <div className="half">
                {
                boxArray.map( (colorForBox) =>
                    <div className="box" Style="background-color:{colorForBox};"></div>
                )
                }
            </div>
        </div>
        );
}
 
export default BoxGenerator;