import React from "react";

function Synonyms(props) {
if(!props.synonyms|| props.synonyms.length === 0) {
    return null
} else {
    return (
    <div className="Synonyms">
    {props.synonyms.map(function(synonym, index){
return(
    <span key={index}>{synonym}</span>
)
    })}
    </div>
)
      
}   
    
}


export default Synonyms