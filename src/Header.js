import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-up'>
                <MoreVertOutlinedIcon/>
                <input />
                <NotificationsActiveOutlinedIcon />
            </div>
            <div className='header-down'>
                <div className='header-down-left'>
                    <img src="https://avatars.githubusercontent.com/u/34642119?v=4" height="70px" width="70px" />
                    <div class="header-down-leftText">
                        <p class="text-message">Hi there,</p>
                        <p class="text-nameId"><span>Kumar Shashank</span> (@shashank)</p>
                    </div>
                </div>

                <div className='header-down-right'>
                    <button class="new-button">New</button>
                    <button class="upload-button">Upload</button>
                    <button class="share-button">Share</button>
                </div>
            </div>

        </div>
    )
}

export default Header