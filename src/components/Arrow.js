import React from 'react';

/*
function Arrow() {
    return (
        < div >
        <button> Button </button>

        < /div>
)
    ;
}
*/

const messageAlart=(go)=>{
    alert(go)
}

const AlartMe=(event)=>{
    alert(event)
}
const Arrow=()=>{
    return(
        <div>

 <h2> Arrow functioon </h2>
    <button onClick={ AlartMe.bind(this, "button clicked from arrow function")}>button </button>
        <button onClick={ messageAlart.bind(this, "button clicked from arrow function to messsage alart")}>button </button>
        </div>
    );
}
export default Arrow;