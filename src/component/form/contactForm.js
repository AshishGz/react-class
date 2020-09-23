import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";



//
//
// {
//     "Name":"",
//     "Enmail":"",
//     "Numbaer:":"",
//     "User feed abck":"",
// }
class ContactForm extends Component {
    state={
        name:"Ashish",
        email:"",
        phone:"",
        feedback:"",
        feedbackList:localStorage.getItem('_feedback')
            ?JSON.parse(localStorage.getItem('_feedback')):[]
    };

    handleChange=(event)=>{
        this.setState({
            [event.target.id]:event.target.value
        });

    };
    onHandleSubmit=()=>{
        let list=this.state.feedbackList;
        let feedback={
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            feedback:this.state.feedback,
        };

        list.push(feedback);
        localStorage.setItem('_feedback',JSON.stringify(list));
    };
    render() {

        return (
            <div style={{maxWidth:700,margin:'auto',display:'block'}}>
                <form  style={{display:'grid'}} noValidate autoComplete="off">


                    <TextField
                        id="name"
                        value={this.state.name}
                        label="Name"
                        onChange={this.handleChange}
                        variant="filled" />
                    <TextField
                        id="email"
                        value={this.state.email}
                        label="Email"
                        onChange={this.handleChange}
                        variant="filled" />
                    <TextField
                        id="phone"
                        value={this.state.phone}
                        label="Phone Number"
                        onChange={this.handleChange}
                        variant="filled" />
                    <TextField
                        id="feedback"
                        value={this.state.feedback}
                        label="Feedback"
                        onChange={this.handleChange}
                        variant="filled" />

                </form>
                <Button variant="contained" color="primary"
                onClick={()=>this.onHandleSubmit()}
                >

                    Submit Data
                </Button>
            </div>
        );
    }
}

export default ContactForm;
