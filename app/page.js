'use client';
import Auth from "@/component/Auth/Auth";
import Filter from "@/component/Filter";
import Header from "@/component/Header/Header";
import Jobs from "@/component/Jobs";
import { useState } from "react";

export default function Home() {

  const [jobsData, setJobsData] = useState([]);
  const [loading, setloading] = useState(false);

  return (
    <>
    <Auth/>
      <Header />
      <br/><br/><br/>
      <section className="banner-container">
        <div>
          <h1>
            Find Jobs
          </h1>
          Home / Jobs
        </div>
      </section>
      <section className="main-container">
        <div className="filter_section">
          <Filter jobsData={jobsData} setJobsData={setJobsData} loading={loading} setloading={setloading}/>
        </div>
        <div className="jobs_section" >
         <Jobs jobsData={jobsData} setJobsData={setJobsData} loading={loading} setloading={setloading}/>
        </div>
      </section>
    </>
  );
}
