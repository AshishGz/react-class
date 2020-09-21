import React, {Component} from 'react';
import RoutePage from "./route";
import Header from "./component/header";
class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <RoutePage/>
            </div>
        );
    }
}

export default App;
