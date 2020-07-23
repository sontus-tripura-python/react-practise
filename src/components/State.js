import React, {Component} from 'react';

class State extends Component {
    constructor() {
        super();
        this.state ={
            name : "Sontus Tripura",
            age : "22",
            study : "bsc in eee"
        }
    }
    render() {
        return (
            < div >
            <ul>
            <li>{this.state.name }</li>
            <li>{this.state.age }</li>
            <li>{this.state.study }</li>
            </ul>
            < /div>
    )
        ;
    }
}

export default State;