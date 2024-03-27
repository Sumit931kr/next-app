import React, { useEffect } from 'react'
import './jobs.css'
import moment from 'moment'
import Link from 'next/link'

const Job = ({ jobsData, loading, setloading }) => {
console.log(jobsData)

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
                               <Link href={el.url} style={{textDecoration:'none', color:'black'}}> <div className="job_title">{el.title}</div> </Link>
                                <div className='companyinfo'>
                                    <div className='company_name'>
                                        <i className="fa-solid fa-briefcase"></i>{el.company}
                                    </div>
                                    <div className='company_location'>
                                        <i className="fa-solid fa-location-dot"></i> {el.location}
                                    </div>
                                    <div className='job_posting'>
                                        <i className="fa-regular fa-clock"></i>
                                        {/* {jobPosting} */}
                                        {moment(+new Date(el.created)).format("Do MMM")}
                                    </div>
                                    <div className='salary_container'>
                                        <i className="fa-solid fa-money-bills"></i>
                                        ${el['min salary'] ? (el['min salary']/1000).toFixed(2)+'k' : "$35k "} 
                                        -
                                         ${el['max salary'] ? (el['max salary']/1000).toFixed(2)+'k'  : " $45k"}
                                    </div> 
                                </div>
                                <div className='job_info'>
                                    <div className='job_type'>
                                        {el.type ? el.type : "Full Time"}
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
                                <i className="fa-regular fa-bookmark"></i>
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
                            <i className="fa-regular fa-bookmark"></i>
                        </div> */}
                        Loading...
                    </div>
            }
        </>
    )
}

export default Job