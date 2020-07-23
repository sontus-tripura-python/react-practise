import React, {Component} from 'react';

class Index extends Component {

    doThis(pass){
        alert(pass)
    }
    render() {
        return (
           <div>

           <button onClick={ this.doThis.bind(this, "passing arguemnt from class ") }> button from class </button>
            <h2> Hell I am { this.props.name } and { this.props.age} years old</h2>



            </div>

    )
        ;
    }
}

export default Index;