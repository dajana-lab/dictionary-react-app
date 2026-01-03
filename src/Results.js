import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

 function Results(props) {
  if (!props.results  || !props.results.meanings) {
    return null;
  }

  return (
    <div className="Results">
      <h3>
        {props.results.word}
      </h3>
      {props.results.phonetics.map(function(phonetic, index){
        return(
      <div key={index}>
          <Phonetic key={index} phonetic={phonetic}/>
        </div>
        )

      })}

      {props.results.meanings.map(function (meaning, index) {
        return <Meaning key={index} meaning={meaning} />;
      })}
    </div>
  );
}
export default Results