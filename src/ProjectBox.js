import React from 'react'
import './ProjectBox.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectBox = () => {
  return (
    <div className='projectBox'>
        <div className='heading'>Super Cool Project</div>
        <p className='description'> Lorem ipsum dolor sit amet elit. Unde, explicabo maiores id qui eveniet exercitationem ratione sunt, cupiditate ducimus libero neque dignissimos perspiciatis, labore non modi. Ut odio animi rerum. </p>
        <div className='links'>
            <a href="#"> <RemoveRedEyeIcon/> </a>
            <a href="#"> <GitHubIcon/>  </a>
        </div>

    </div>
  )
}

export default ProjectBox