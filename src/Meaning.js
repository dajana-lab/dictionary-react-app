import React from "react";
import Synonyms from "./Synonyms";


function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3 className="text-uppercase mb-3 p-2">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            
              <p className="p-2 mt-3"><strong>Definition: </strong>{definition.definition}</p>
             <p className="p-2 mt-3"><strong>Synonyms: </strong></p>
          <Synonyms synonyms={definition.synonyms}/>
          </div>
          
        );
      })}
    </div>
  );
}
export default Meaning