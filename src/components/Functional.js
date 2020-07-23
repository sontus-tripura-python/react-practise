import React from "react";


function myfun(props) {
    function doThis(read) {
       alert(read)
    }

return(

    <div>
    <button onClick={ doThis.bind(this, "passsing from functional..") }>Click </button>
    <h2> I am { props.name } and age: { props.age } </h2>

    </div>
);
}

export default myfun;