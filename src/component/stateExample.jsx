import React, {Component} from 'react';

class StateExample extends Component {
    constructor(props){
        super(props);
        this.state={
            firstState:'This is my first State',
            secondState:'This is my Second State',
        };
       // this.changeValue=this.changeValue().bind(this);
    }

    changeValue=()=>{
        this.setState({
            firstState:'OK I got it',
        })
    };
    render() {

        return (
            <div>
                {this.state.firstState}
                {this.state.secondState}
                <button onClick={this.changeValue}>Chnage State</button>
            </div>
        );
    }
}

export default StateExample;
