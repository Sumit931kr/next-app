import React, { useEffect } from 'react'
import './jobs.css'
import moment from 'moment'

const Job = ({ jobsData, loading, setloading }) => {

    useEffect(() => {

    })

    return (
        <>
            {
                loading && jobsData.length > 0 ?
                    jobsData.map((el, index) => (
                        // let jobPosting = moment(+new Date(el.created_at)).format("Do MMM");
                        <div className='job_container' key={index}>
                            <div className='job_img_container'>
                                <img src="/vercel.svg" alt="" />
                            </div>
                            <div className='job_details'>
                                <div className="job_title">{el.job_title}</div>
                                <div className='companyinfo'>
                                    <div className='company_name'>
                                        <i class="fa-solid fa-briefcase"></i>{el.company}
                                    </div>
                                    <div className='company_location'>
                                        <i class="fa-solid fa-location-dot"></i> {el.location}
                                    </div>
                                    <div className='job_posting'>
                                        <i class="fa-regular fa-clock"></i>
                                        {/* {jobPosting} */}
                                        {moment(+new Date(el.created_at)).format("Do MMM")}
                                    </div>
                                    <div className='salary_container'>
                                        <i class="fa-solid fa-money-bills"></i>
                                        {el.min_salary ? el.min_salary : "$35k "} - {el.max_salary ? el.max_salary : " $45k"}
                                    </div> 
                                </div>
                                <div className='job_info'>
                                    <div className='job_type'>
                                        {el.job_type ? el.job_type : "Full Time"}
                                    </div>
                                    <div className='jprivate'>
                                        Private
                                    </div>
                                    <div className='jurgent'>
                                        Urgent
                                    </div>
                                </div>
                            </div>
                            <div className='saved_icon'>
                                <i class="fa-regular fa-bookmark"></i>
                            </div>
                        </div>
                    ))
                    :

                    <div className='job_container'>
                        {/* <div className='job_img_container'>
                            <img src="/vercel.svg" alt="" />
                        </div>
                        <div className='job_details'>
                            <div className="companyname">Software Engineer (Android), Libraries</div>
                            <div className='companyinfo'>
                                segment
                            </div>
                            <div className='companyother'>
                                <div>Full Time</div>
                            </div>
                        </div>
                        <div className='saved_icon'>
                            <i class="fa-regular fa-bookmark"></i>
                        </div> */}
                        Loading...
                    </div>
            }
        </>
    )
}

export default Job