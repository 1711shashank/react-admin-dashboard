import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import './Nav.css';


const Nav = () => {
  return (
    <div className='Nav'>
      <div className="left-head">
        <a href="#Dashboard"><DashboardIcon /> Dashboard </a>
      </div>
      <div className="left-body">
        <a href="#Home"><HomeIcon /> Home </a>
        <a href="#Profile"> <PersonIcon /> Profile </a>
        <a href="#Messages"> <ModeCommentIcon />Messages</a>
        <a href="#Histoy"> <AccessTimeIcon /> Histoy </a>
        <a href="#Task"> <PlaylistAddCheckIcon /> Task</a>
        <a href="#Communities"> <GroupsIcon /> Communities</a>
        <a href="#Settings"> <SettingsIcon />Settings</a>
        <a href="#Support"> <HeadsetMicIcon />  Support</a>
        <a href="#Privacy"> <VerifiedUserIcon /> Privacy</a>
      </div>
    </div >
  )
}

export default Nav