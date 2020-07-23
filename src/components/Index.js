import React, {Component} from 'react';

class Index extends Component {
    render() {
        return (
           <div>


            <h2> Hell I am { this.props.name } and { this.props.age} years old</h2>



            </div>

    )
        ;
    }
}

export default Index;