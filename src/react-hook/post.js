import React from 'react';

export default function Post(post) {

    return (
        <div>
            <div style={{margin:24}}>Number of Post is <span style={{fontSize:20,fontWeight:'bold',color:'#090d60'}}>{post.count}</span></div>
        {post.post.map((data)=>
                <div style={{margin:24,background:'#eeeeee',padding:20,borderRadius:10}}>
                    <div>{data.title}</div>
                    <div>{data.body}</div>
                </div>
            )}
        </div>
    )
}
