'use client';
import React, { useState, useEffect } from 'react';
import './filter.css'

// const Filter = ({ jobs }) => {
const Filter = ({ jobsData, setJobsData, setloading }) => {

    const handleChange = (e) => {
        let data = JSON.parse(localStorage.getItem('localJobsData'));
        setloading(false)
        let value = e.target.value;
        if (value == "") {
            setJobsData(data);
        }
        else {
            if (jobsData.length > 0) {
                const filteredData = data.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
                setJobsData(filteredData);
            }
        }
        setTimeout(() => {
            setloading(true);
        }, 800)
    }

    return (
        <div className='filter-container'>
            <div className="filter-box">
                <h4>
                    Search by keywords
                </h4>
                <div style={{ position: 'relative' }}>
                    <input type="text" className='filter_search' onChange={handleChange} placeholder='Job title' />
                    <div className='search_icon'><i className="fa-solid fa-magnifying-glass"></i></div>
                </div>
            </div>
        </div>
    )
}


export default Filter