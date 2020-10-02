import React, {Component} from 'react';
import Profile from "./profile";
import '../css/home.css';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import StateExample from "./stateExample";
class Home extends Component {
    constructor(props)
    {
         super(props);
        this.state={
            userPrimary:true,
            name:'ram'
        }

    }


    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            name:nextProps.name,
            number:nextProps.number,

        })
    }

    changeName=()=>{
        this.setState({
            name:'This is name'
        })
    };
    render() {
        return (
            <div>
                <Button variant="contained" color={this.state.userPrimary?"primary":"secondary"} onClick={()=>this.setState({
                    userPrimary:!this.state. userPrimary,name:'ashihs'
                })}>
                    Primary
                </Button>
                This is Hiome Route{this.state.name}
                {/*<div className="test">{this.state.name}</div>*/}
                {/*<div className="test">{this.state.number}</div>*/}
                {/*<div className="test">{this.props.name}</div>*/}
                {/*<div className="test">{this.state.number}</div>*/}
            {/*<div style={{background:'#2ba02b',*/}
                {/*paddingTop:20}}>*/}
                {/*Home*/}
                {/*<Profile/>*/}
                {/*<button onClick={this.changeName}>Change</button>*/}
            {/*</div>*/}
                <StateExample use={this.state.name}/>

                <Link to={'/profile'}>GO to profile</Link>
            </div>
        );
    }
}

export default Home;


