'use Client';

import React, { useEffect, useRef, useState } from 'react'
import './jobs.css'
import Job from './Job'
import axios from 'axios';

const Jobs = ({ jobsData, setJobsData, loading, setloading }) => {
    const [urls, setUrls] = useState({"next":"","previous":""})

    const jobSortRef = useRef(null);

    const getJobsData = async (url) => {
        setloading(false);
        // let val = 
        // const response = await axios.get(`${url? url : 'https://learnkoodsapi.onrender.com/jobs_api/'}`)
        const response = await axios.get(`${url? url : 'https://learnkoods-task.onrender.com/job_api/'}`)
        // console.log(response)
        setUrls({"next":response.data.next,"previous":response.data.previous})

        let data = response.data.results;
        setJobsData(data);
        setloading(true);
        localStorage.setItem('localJobsData', JSON.stringify(data));
    }

    useEffect(() => {
        getJobsData();
    }, [])
    // console.log(urls)

    const handleSelect = () => {
        setloading(false)
        let value = jobSortRef.current.value;
        // console.log(value)


        if (value == "1") {
            let sortedData = jobsData.sort((a, b) => {
                return new Date(a.created).getTime() - new Date(b.created).getTime()
            })
            setJobsData(sortedData);
        }
        else if (value == "2") {
            let sortedData = jobsData.sort((a, b) => {
                return new Date(b.created).getTime() - new Date(a.created).getTime()
            })
            setJobsData(sortedData);
        }
        else{
            let data = localStorage.getItem('localJobsData')
            if(data){
                setJobsData(JSON.parse(data));
            }
        }
        setTimeout(() => {
            setloading(true);
            console.log("90")
        }, 800)
    }


    return (
        <div className='jobs_container'>
            <section className='jobs_first_section'>
                <div>Show {jobsData.length} jobs</div>
                <div>
                    <select name="" id="sortbytime" ref={jobSortRef} onChange={handleSelect}>
                        <option value="0">Sort by (default)</option>
                        <option value="1">Newest</option>
                        <option value="2">Oldest</option>
                    </select>
                </div>
            </section>
            <section>
                <Job jobsData={jobsData} loading={loading} setloading={setloading} />
            </section>
            <section>
                <div className="pagination">
                    <div onClick={()=>getJobsData(urls.previous)}>&laquo;</div>
                    {/* <div className='selected_page'>1</div> */}
                    <div onClick={()=>getJobsData(urls.next)}>&raquo;</div>
                </div>
            </section>
        </div>
    )
}

export default Jobs