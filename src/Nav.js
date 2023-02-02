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
    <div className='left'>
      <div className="left-head">
        <a href="#Dashboard"><DashboardIcon style={{ fontSize: '50px'  }} /> <p>Dashboard </p></a>
      </div>
      <div className="left-body">
        <a href="#Home"><HomeIcon /> <p>Home </p></a>
        <a href="#Profile"> <PersonIcon /> <p>Profile</p> </a>
        <a href="#Messages"> <ModeCommentIcon /><p>Messages</p></a>
        <a href="#Histoy"> <AccessTimeIcon /> <p>Histoy </p></a>
        <a href="#Task"> <PlaylistAddCheckIcon /> <p>Task</p></a>
        <a href="#Communities"> <GroupsIcon /> <p>Communities</p></a>
        <a href="#Settings"> <SettingsIcon /><p>Settings</p></a>
        <a href="#Support"> <HeadsetMicIcon />  <p>Support</p></a>
        <a href="#Privacy"> <VerifiedUserIcon /> <p>Privacy</p></a>
      </div>
    </div >
  )
}

export default Nav