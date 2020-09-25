import React, {Component} from 'react';
import {Card} from '@material-ui/core'
import Grid from "@material-ui/core/Grid/Grid";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Avatar from "@material-ui/core/Avatar/Avatar";
import TotalCasesIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Divider from "@material-ui/core/Divider/Divider";

class CovidCountryWiseData extends Component {
    render() {
        return (
            <div style={{maxWidth:600,margin:'auto',display:'block'}} >
                <Card style={{padding:20,margin:20}}>
                    <h1>{this.props.data.country}</h1>
                    <div style={{display:'flex',justifyContent:'space-between',textAlign:'center',marginBottom:14}}>
                        <div>
                            <div style={{fontWeight:700,fontSize:20}}>Todays Cases</div>
                            <div style={{fontWeight:600,fontSize:20,color:'#3241ee'}}> {this.props.data.todayCases}</div>
                            </div>
                        <div >
                            <div style={{fontWeight:700,fontSize:20}}>Total Deaths</div>
                            <div style={{fontWeight:400,fontSize:20,color:'#680b17'}}>{this.props.data.todayDeaths}</div>
                            </div>
                    </div>
                    <Divider/>
                    <div style={{display:'flex',justifyContent:'space-between',textAlign:'center',marginTop:14}}>
                        <div>
                            <div style={{fontWeight:700,fontSize:20}}>Total Cases</div>
                            <div style={{fontWeight:600,fontSize:20,color:'#3241ee'}}> {this.props.data.cases}</div>
                        </div>
                        <div >
                            <div style={{fontWeight:700,fontSize:20}}>Total Recovered</div>
                            <div style={{fontWeight:400,fontSize:20,color:'#680b17'}}>{this.props.data.recovered}</div>
                        </div>
                        <div >
                            <div style={{fontWeight:700,fontSize:20}}>Total Deaths</div>
                            <div style={{fontWeight:400,fontSize:20,color:'#680b17'}}>{this.props.data.deaths}</div>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default CovidCountryWiseData;
