import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <>
            <div className='header-container'>
                <div className='header-left'>
                    <img src="https://avatars.githubusercontent.com/u/34642119?v=4" alt="" height="70px" width="70px" />
                    <div class="header-leftText">
                        <p class="text-message">Hi there,</p>
                        <p class="text-nameId"><span>Kumar Shashank</span> (@shashank)</p>
                    </div>
                </div>

                <div className='header-right'>
                    <button class="new-button"> New </button>
                    <button class="upload-button">Upload</button>
                    <button class="share-button">Share</button>
                </div>

            </div>
        </>
    )
}

export default Header