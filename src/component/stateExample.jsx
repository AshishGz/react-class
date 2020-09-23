import React, {Component} from 'react';

class StateExample extends Component {
    constructor(props){
        super(props);
        this.state={
            firstState:'This is my first State',
            secondState:'This is my Second State',
            use:props.use
        };
       // this.changeValue=this.changeValue().bind(this);
    }

    changeValue=()=>{
        this.setState({
            firstState:'OK I got it',
            secondState:'ok second value'
        })
    };
    componentDidMount() {
        console.log('this is component did mount');

    }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevState);
        console.log(prevProps);
        if (prevState.use !== this.state.use) {
            this.setState({use:prevState.use});
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log(nextProps);
        if(nextProps.use!==prevState.use){
console.log('jkjk');
            return {path : nextProps.use};
        }
        else return null;
    }


    render() {

        return (
            <div>
                {this.state.firstState}
                {this.state.secondState}
                {this.state.use}
                <button onClick={this.changeValue}>Chnage State</button>
            </div>
        );
    }
}

export default StateExample;
