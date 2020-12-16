import React from 'react'
import './Header.css'

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Avatar } from '@material-ui/core';
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}]=useStateValue();
    return (
        <div className='header'>
            <div className="header_left">
                <Avatar className='header_avatar' src={user?.photoURL} alt={user?.displayName} style={{marginRight:"10px"}}/>
                {user?.displayName}
                <AccessTimeIcon/>
            </div>
            <div className="header_search">
            <SearchIcon/>
            <input placeholder='write here'/>
            </div>
            <div className="header_right">
            <HelpOutlineIcon/>
            </div>
            
        </div>
    )
}

export default Header
