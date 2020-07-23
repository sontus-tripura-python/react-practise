import React, {Component} from 'react';

class State2 extends Component {
    constructor() {
        super();
        this.state={
            name:"Sontus"
        }
    }
    changeName(a){
        this.setState({name:a})
    }
    render() {
        return (
            < div >
            <h2> {this.state.name }</h2>
            <button onClick={this.changeName.bind(this, "Bimal Tripura")}>Change Name </button>
            < /div>
    )
        ;
    }
}

export default State2;