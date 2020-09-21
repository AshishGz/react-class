import React, {Component} from 'react';
import {AppBar,Toolbar,IconButton,Typography,Drawer,List,ListItem,ListItemText,ListItemIcon} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import {HeaderItems} from '../utils/headerItems';
import '../css/home.css';

class Header extends Component {
    state={
        openDrawer:false
    };
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu"  onClick={()=>{
                            this.setState({
                                openDrawer:true
                            })
                        }}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h5" >
                            News
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer anchor={'left'} open={this.state.openDrawer} onClose={()=>this.setState({
                    openDrawer:false
                })}>
                    <List>
                        {HeaderItems.map((menu,index) => (
                            <ListItem button key={index}>
                                <ListItemIcon>{menu.icon}</ListItemIcon>
                                <ListItemText primary={menu.name} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default Header;
