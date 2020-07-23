import React from "react";


function myfun(props) {
    function doThis() {
       alert("button working..")
    }

return(

    <div>
    <button onClick={ doThis }>Click </button>
    <h2> I am { props.name } and age: { props.age } </h2>

    </div>
);
}

export default myfun;