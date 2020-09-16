import React, {Component} from 'react';

class Profile extends Component {
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

export default Profile;
