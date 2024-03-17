import React from 'react'
import './header.css'


const Header = () => {

    const openLoginSignup = () =>{
        let ac = document.querySelector('.auth_container');
        ac.style.display = 'flex'
    }

    return (
        <div className='header-container'>
            <div className="header-left-section">
                <div>Learnkoods</div>
                <div>Home</div>
                <div>Find jobs</div>
                <div>Employers</div>    
                <div>Candidates</div>
                <div>Blog</div>
                <div>About Us</div>
            </div>
            <div className="header-right-section">
                <div>Upload your CV</div>
                <div className='login_register' onClick={openLoginSignup}>Login / Register</div>
                <div className='job_post_btn'>job Post</div>
            </div>
        </div>
    )
}

export default Header