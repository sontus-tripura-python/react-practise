import React, {Component} from 'react';

class Index extends Component {

    doThis(){
        alert("this button cliked from class button")
    }
    render() {
        return (
           <div>

           <button onClick={ this.doThis }> button from class </button>
            <h2> Hell I am { this.props.name } and { this.props.age} years old</h2>



            </div>

    )
        ;
    }
}

export default Index;