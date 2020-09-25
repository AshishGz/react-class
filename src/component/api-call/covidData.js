import React, {Component} from 'react';
import axios from 'axios';
import CovidAllData from "./covidAllData";
import CovidDataWorldWide from "./covidDataWorldWide";

class CovidData extends Component {

    state={
        covidAllData:{},
        isLoading:true
    };
    componentDidMount() {
        let self=this;
        axios.get('https://coronavirus-19-api.herokuapp.com/all').then(function (res) {
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
                {this.state.isLoading ? 'Loading ...' :
                    <div>
                    <CovidAllData
                        cases={this.state.covidAllData.cases}
                        death={this.state.covidAllData.deaths}
                        recovered={this.state.covidAllData.recovered}

                    />
                        <CovidDataWorldWide/>
                    </div>

                }
            </div>
        );
    }
}

export default CovidData;
