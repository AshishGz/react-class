import React, {Component} from 'react';
import Home from './component/home';
import Profile from "./component/profile";
import StateExample from "./component/stateExample";
class App extends Component {

    state={
        name:'Ashish'
    };

    render() {
        return (
            <div>
              React Class
                <Home name={this.state.name} number={12}/>
                <Profile/>
                <StateExample/>
            </div>
        );
    }
}

export default App;
