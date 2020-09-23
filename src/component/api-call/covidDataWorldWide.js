import React, {Component} from 'react';
import axios from "axios";
import {HeaderItems} from "../../utils/headerItems";
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import CovidCountryWiseData from "./covidCountryWiseData";

class CovidDataWorldWide extends Component {
    state={
        covidAllData:[],
        isLoading:true
    };

    componentDidMount() {
        let self=this;
        axios.get('https://coronavirus-19-api.herokuapp.com/countries').then(function (res) {
            self.setState({
                covidAllData:res.data,
                isLoading:false
            })
        }).catch(function (error) {

        })
    }
    render() {
        return (
            <div>
                {this.state.isLoading?'loading...':
                <div>
                    {this.state.covidAllData.map((data,index) => (
                        <CovidCountryWiseData data={data} index={index}/>
                    ))}
                </div>
                }
            </div>
        );
    }
}

export default CovidDataWorldWide;
