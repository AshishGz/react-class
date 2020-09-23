import React, {Component} from 'react';
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Avatar from "@material-ui/core/Avatar/Avatar";
import TotalCasesIcon from "@material-ui/icons/InsertEmoticon"
import DeathCasesIcon from "@material-ui/icons/DesktopAccessDisabled"
import RecoveredCasesIcon from "@material-ui/icons/RemoveShoppingCart"
import Grid from "@material-ui/core/Grid/Grid";

class CovidAllData extends Component {
    render() {
        return (
            <div style={{marginTop:30}}>
                        <Grid container justify="center" spacing={2}>
                                <Grid item>
                                    <Card style={{background:'#60ddee'}}>
                                        <CardHeader
                                            avatar={
                                                <Avatar aria-label="recipe" >
                                                    <TotalCasesIcon/>
                                                </Avatar>
                                            }
                                            title="Total Cases"
                                            subheader={this.props.cases}
                                        />
                                    </Card>
                                </Grid>
                            <Grid item>
                                <Card style={{background:'#54a066'}}>
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="recipe" >
                                                <RecoveredCasesIcon/>
                                            </Avatar>
                                        }
                                        title="Total Recoverd"
                                        subheader={this.props.recovered}
                                    />
                                </Card>
                                </Grid>
                            <Grid item>
                            <Card style={{background:'#975155'}}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" >
                                            <DeathCasesIcon/>
                                        </Avatar>
                                    }
                                    title="Total Death"
                                    subheader={this.props.death}
                                />
                            </Card>
                                </Grid>
                        </Grid>



            </div>
        );
    }
}

export default CovidAllData;
