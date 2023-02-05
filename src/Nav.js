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
      <a href="#Dashboard"><DashboardIcon className='mui-icon dashboard-icon' /> <p>Dashboard </p></a>
      <a href="#Home"><HomeIcon className='mui-icon' size="small" /> <p>Home </p></a>
      <a href="#Profile"> <PersonIcon className='mui-icon'/> <p>Profile</p> </a>
      <a href="#Messages"> <ModeCommentIcon className='mui-icon'/><p>Messages</p></a>
      <a href="#Histoy"> <AccessTimeIcon className='mui-icon'/> <p>History </p></a>
      <a href="#Task"> <PlaylistAddCheckIcon className='mui-icon'/> <p>Task</p></a>
      <a href="#Communities"> <GroupsIcon className='mui-icon'/> <p>Communities</p></a>
      <a href="#Settings"> <SettingsIcon className='mui-icon'/><p>Settings</p></a>
      <a href="#Support"> <HeadsetMicIcon className='mui-icon'/>  <p>Support</p></a>
      <a href="#Privacy"> <VerifiedUserIcon className='mui-icon'/> <p>Privacy</p></a>
    </div >
  )
}

export default Nav