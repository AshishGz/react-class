import React, {Component} from 'react';
import axios from "axios";
import {HeaderItems} from "../../utils/headerItems";
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import CovidCountryWiseData from "./covidCountryWiseData";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";

class CovidDataWorldWide extends Component {
    state={
        covidAllData:[],
        originalData:[],
        isLoading:true,
        searchData:[]
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
    handleChange=(event)=>{
        this.setState({
            [event.target.id]:event.target.value
        });

    };
    handleSearch=()=>{
        let search=this.state.searchData;
       let filterData=this.state.covidAllData.filter((data)=>{
           return data.country.toLowerCase()===search.toLowerCase()
       });
      this.setState({
          originalData:this.state.covidAllData,
          covidAllData:filterData
      })

    };
    render() {
        return (
            <div>
                {this.state.isLoading?'loading...':
                <div style={{maxWidth:600,margin:'14px auto',display:'block'}}>

                    <TextField
                        id="searchData"
                        fullWidth={true}
                        value={this.state.searchData}
                        label="Search Data"
                        onChange={this.handleChange}
                        variant="filled" />
                    <Button color="primary" onClick={this.handleSearch} >Search</Button>
                    {this.state.searchData!=''?
                    <Button color="primary"
                            onClick={()=>this.setState({covidAllData:this.state.originalData,searchData:''})}>
                        Clear Search</Button>:''}
                    {this.state.covidAllData.length?
                        this.state.covidAllData.map((data,index) => (
                        <CovidCountryWiseData data={data} index={index}/>
                        )):<div>No data found</div>}
                </div>
                }
            </div>
        );
    }
}

export default CovidDataWorldWide;
