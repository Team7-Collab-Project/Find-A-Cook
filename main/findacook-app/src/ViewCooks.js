import React, {useState} from 'react';
import Box from '@mui/material/Box';
import BackButton from './components/BackButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

function ViewCooks() {


    return (
        <><BackButton />
        <div id='viewcooks'>
            <br />
            <h1>List of Cooks</h1>
            <div id='cooklist'>
                <List>
                <ListItem disablePadding className="ListItem">
                    <ListItemButton className="ListItemButton">
                        <img src='./images/cook1.jpg'/>
                        <h2>Joane</h2>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <img src='./images/cook2.jpg'/>
                        <h2>Fahad</h2>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <img src='./images/cook3.png'/>
                        <h2>David</h2>
                    </ListItemButton>
                </ListItem>
                </List>
            </div>
        </div>
            </>
        
    );
}

export default ViewCooks;