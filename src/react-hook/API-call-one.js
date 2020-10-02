import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import Post from "./post";
import User from "./user";
import ControlledChild from "./controlledChild";

export default function APICallExample() {
    // Declare a new state variable, which we'll call "count"

    const [post,setPost]=useState([]);
    const [user,setUser]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [refresData,setRefreshData]=useState(0);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(()=>{
        getApiDATA();
        getUserDATA();
    },[refresData]);

        function getApiDATA() {
            axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
                setPost(response.data);
                setIsLoading(false);
            })
        }
        function getUserDATA() {
            axios.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
                setUser(response.data);
                setIsLoading(false);
            })
        }
        function onRefreshdata() {
            setIsLoading(true);
            setRefreshData(refresData+1);
        }
    return (
        <div>
            <div>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Post" />
                        <Tab label="User"  />
                        <Tab label="Controlled Child"  />
                    </Tabs>
                </AppBar>
                <button onClick={onRefreshdata}>Refresh</button>
                <div>Data refreshed {refresData} times.</div>
                {value==0?<div>

                        {isLoading?<div>Loading ....</div>:<div>
                            <Post post={post} count={post.length}/>
                        </div>}
                    </div>:''}
                {value==1?
                <div>

                    {isLoading?<div>Loading ....</div>:<div>
<User user={user}/>

                    </div>}
                </div>:''}
                {value==2?<ControlledChild refreshCount={refresData}/>:''}
            </div>
        </div>
    );
}
