import React from "react";


const BoxGenerator = (props) => {


    const { boxColorArray } = props;




        return(  
        <div className = "overflow">
                {
                boxColorArray.map( (color, index) => (
                    <div key={index} className="box" style={{ backgroundColor: color}}></div>
                    
                ))
                }
                {console.log(boxColorArray)}
        </div>
        );
};
 
export default BoxGenerator;