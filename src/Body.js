import React from 'react'
import Header from './Header'
import ProjectBox from './ProjectBox'
import './Body.css'

function Body() {
  return (
    <div className='mainBody'>
      <Header />
      <div className='body-left'>
        <p className='project-heading'>Project</p>
        <div className='project-body'>
          <ProjectBox/>
          <ProjectBox/>
          <ProjectBox/>
          <ProjectBox/>
          <ProjectBox/>
          <ProjectBox/>
        </div>
      </div>
      <div className='body-right'>
        <div className='announcements'>
          <p className='announcements-heading'>Announcements</p>
          <div className='announcements-card'>
            <p className='announcements-card-heading'>Site Maintenance</p>
            <p className='announcements-card-description'>Lorem ipsum dolor sit amet elit. Unde, explicabo maiores id qui eveniet exercitationem ratione sunt, cupiditate ducimus libero neque dignissimos perspiciatis, labore non modi. Ut odio animi rerum.</p>
            <hr /> 
            <p className='announcements-card-heading'>Site Maintenance</p>
            <p className='announcements-card-description'>Lorem ipsum dolor sit amet elit. Unde, explicabo maiores id qui eveniet exercitationem ratione sunt, cupiditate ducimus libero neque dignissimos perspiciatis, labore non modi. Ut odio animi rerum.</p>
            <hr /> 
            <p className='announcements-card-heading'>Site Maintenance</p>
            <p className='announcements-card-description'>Lorem ipsum dolor sit amet elit. Unde, explicabo maiores id qui eveniet exercitationem ratione sunt, cupiditate ducimus libero neque dignissimos perspiciatis, labore non modi. Ut odio animi rerum.</p>
            
          </div>
        </div>
        <div className='trending'>
          <p className='trending-heading'>Trending</p>
          <div className='trending-card'>
            <div className='trending-card-profile'>
              <img src="https://avatars.githubusercontent.com/u/34642119?v=4" height="70px" width="70px" />
              <div class="trending-account-info">
                <p class="trending-id">@shashank</p>
                <p class="trending-name">Kumar Shashank</p>
              </div>
            </div>
            <div className='trending-card-profile'>
              <img src="https://avatars.githubusercontent.com/u/34642119?v=4" height="70px" width="70px" />
              <div class="trending-account-info">
                <p class="trending-id">@shashank</p>
                <p class="trending-name">Kumar Shashank</p>
              </div>
            </div>
            <div className='trending-card-profile'>
              <img src="https://avatars.githubusercontent.com/u/34642119?v=4" height="70px" width="70px" />
              <div class="trending-account-info">
                <p class="trending-id">@shashank</p>
                <p class="trending-name">Kumar Shashank</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body