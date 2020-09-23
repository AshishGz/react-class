import React, {Component} from 'react';
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

class ViewContactList extends Component {
    state={
        feedbackList:localStorage.getItem('_feedback')
            ?JSON.parse(localStorage.getItem('_feedback')):[]
    };


    render() {
        return (
            <div style={{maxWidth:700,margin:'auto',display:'block'}}>
                <List>


                {
                   this.state.feedbackList.length?
                       this.state.feedbackList.map((feedback)=>(
                           <ListItem>
                               <ListItemAvatar>
                                   <Avatar>
                                       {feedback.name.charAt(0).toUpperCase()}
                                   </Avatar>
                               </ListItemAvatar>
                               <ListItemText primary={feedback.name} secondary={<div>{feedback.email}
                               <br/>
                                   <span style={{color:'#014d28',fontWeight:900}}>{feedback.feedback}</span>
                               </div>} />
                           </ListItem>
                       )):''}

                </List>

            </div>
        );
    }
}

export default ViewContactList;
