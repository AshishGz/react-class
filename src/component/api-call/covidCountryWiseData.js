import React, {Component} from 'react';

class CovidCountryWiseData extends Component {
    render() {
        return (
            <div>
                <b>{this.props.index}</b>
                {this.props.data.country} : {this.props.data.cases}
            </div>
        );
    }
}

export default CovidCountryWiseData;
