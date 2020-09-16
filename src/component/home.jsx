import React, {Component} from 'react';
import Profile from "./profile";
import '../css/home.css';
class Home extends Component {
    constructor(props)
    {
        super(props);
        console.log(props);
        this.state={
            name:props.name,
            number:props.number
        }

    }
    changeName=()=>{
        this.setState({
            name:'This is name'
        })
    };
    render() {
        return (
            <div>
                <div className="test">{this.state.name}</div>
                <div className="test">{this.props.name}</div>
                <div className="test">{this.state.number}</div>
            <div style={{background:'#2ba02b',
                paddingTop:20}}>
                Home
                <Profile/>
                <button onClick={this.changeName}>Change</button>
            </div>
            </div>
        );
    }
}

export default Home;
