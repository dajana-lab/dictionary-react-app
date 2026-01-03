import React from "react";

function Phonetic(props) {
    if(!props.phonetic.audio) {
return null
    } 
return (
        <div className="Phonetics">
            <a href={props.phonetic.audio} target="_blank">
Listen  
            </a>
            {props.phonetic.text}
        </div>
    )
    }
    

export default Phonetic