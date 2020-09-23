import React, {Component} from 'react';
import StateExample from "./stateExample";

export  default class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        var i=1;
        var abbc='this is me';
        return (
            <div>
                {i==0?'Ashish':'Gautam'}
                {abbc}


            </div>
        );
    }
}


