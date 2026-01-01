import React from "react";
import "./Results.css"

function Results(props) {
console.log(props.results)
if(!props.results) {
    return null
} else {  
    return (
        <div className="Results">
    <h1>{props.results.word}</h1>
    <h3>
       Definition is:
       </h3>
       <p>
       {props.results.meanings?.[0]?.definitions?.[0]?.definition}
      </p>
    
<h3>Example:</h3> 
    <p>{props.results.meanings?.[0]?.definitions?.[0]?.example}</p>


        </div>
    )
}

}

  

export default Results