import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <>
        <div className='footer_container'>
            <div className='address_container'>
                <div className="company_name_logo">Learnkoods</div>
                <div>
                    <b>
                        <h4 style={{marginBottom:"10px"}}>
                            Call Us
                        </h4>
                    </b>
                    {/* <br /> */}
                    <span style={{ color: "var(--primary-color)", marginTop:'10px' }}>
                       <b> 123 456 7890 </b>
                    </span>
                </div>
                <div className='address'>
                    <p>329 Queensberry Street, North Melbourne VIC</p>
                    <p>3051, Australia.</p>
                    <p>support@learnkoods.com</p>
                </div>
            </div>
            <div className='other_links_container'>
                <div>
                    <h4> <b> For Candidates </b></h4>
                    <div className="links">
                        <ul>
                            <li>Browse jobs</li>
                            <li>Browse Categories</li>
                            <li>Candidates Dashboard</li>
                            <li>Job Alerts</li>
                            <li>My Bookmarks</li>
                        </ul>
                    </div>
                </div>
                <div>

                    <h4> <b> For Employers </b></h4>
                    <div className="links">
                        <ul>
                            <li>Browse Candidates</li>
                            <li>Employer Dashboard</li>
                            <li>Add Job</li>
                            <li>Job Packages</li>
                        </ul>
                    </div>
                </div>
                <div>

                    <h4> <b> About Us </b></h4>
                    <div className="links">
                        <ul>
                            <li>About Us</li>
                            <li>Job Page Invoice</li>
                            <li>Terms Page</li>
                            <li>Blogs</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div>

                    <h4> <b> Helpful Resources </b></h4>
                    <div className="links">
                        <ul>
                            <li>Site Map</li>
                            <li>Terms of Use</li>
                            <li>Privacy Center</li>
                            <li>Security Center</li>
                            <li>Accessibility Center</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer_last'>
            <div>© 2024 Learnkoods by Epic . All Right Reserved.</div>
            <div className="social_media">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
            </div>
        </div>
        </>
    )
}

export default Footer