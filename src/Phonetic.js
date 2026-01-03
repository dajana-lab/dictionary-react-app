import React from "react";
import "./Phonetic.css"

function Phonetic(props) {
    if(!props.phonetic.audio) {
return null
    } 
return (
        <div className="Phonetics">
            <a href={props.phonetic.audio} target="_blank"  rel="noreferrer" className="audio">
Listen: 
            </a>
            {props.phonetic.text}
        </div>
    )
    }
    

export default Phonetic