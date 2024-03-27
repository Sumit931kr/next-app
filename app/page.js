'use client';
import Auth from "@/component/Auth/Auth";
import Filter from "@/component/Filter";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import Jobs from "@/component/Jobs";
import { useState } from "react";

export default function Home() {

  const [jobsData, setJobsData] = useState([]);
  const [loading, setloading] = useState(false);

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }

  function scrollToTop() {
    // Smooth scroll to the top
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <>
    <button onClick={scrollToTop} id="scrollToTopBtn" title="Go to top"><i className="fa-solid fa-angle-up"></i></button>
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
      <br/>
      <Footer/>
    </>
  );
}
