'use client';
import Auth from "@/component/Auth/Auth";
import Filter from "@/component/Filter";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import Jobs from "@/component/Jobs";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {

  const [jobsData, setJobsData] = useState([]);
  const [loading, setloading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  const scrollToTop = () => {
    // Smooth scroll to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // window.onscroll = function() {scrollFunction()};

  // function scrollFunction() {
  //   var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //     scrollToTopBtn.style.display = "block";
  //   } else {
  //     scrollToTopBtn.style.display = "none";
  //   }
  // }

  // function scrollToTop() {
  //   // Smooth scroll to the top
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   });
  // }

  return (
    <>
    <button id="scrollToTopBtn" style={{display : isVisible ? 'flex' : 'none'}}
      onClick={scrollToTop} title="Go to top"><i className="fa-solid fa-angle-up" ></i></button>
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
