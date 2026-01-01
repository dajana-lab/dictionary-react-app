import React, {useState} from "react";
import "./Dictionary.css"


function Dictionary(){
const [text, setText] = useState("") // state drži ono što je u inputu

// riješi submit forme, ovdje ide API
function search(event) {
    event.preventDefault() //sprječava refresh
    alert(`Searching for ${text}`) // tu da se prikaže text
}
// prati vrijednosti koje se upisuju u input polje od strane korisnika i ažurira ih
function handleChange(event) {
    setText(event.target.value) //trenutni text iz inputa -to je ključ
}

    return (
     <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" 
            value={text} // kontrolirano polje
            onChange={handleChange} 
            autoFocus={true} />
        </form>
     </div>
    )
}

export default Dictionary
