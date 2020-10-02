import React from 'react';
export default function User(user) {

    return (
        <div>
            <div style={{margin:24}}>Number of user is <span style={{fontSize:20,fontWeight:'bold',color:'#090d60'}}>{user.user.length}</span></div>
            {user.user.map((data)=>
                <div style={{margin:24,background:'#eeeeee',padding:20,borderRadius:10}}>
                    <div>{data.name}</div>
                    <div>{data.username}</div>
                </div>
            )}
        </div>
    )
}
