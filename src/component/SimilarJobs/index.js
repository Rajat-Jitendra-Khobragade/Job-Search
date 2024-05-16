import { useParams } from 'react-router-dom'

import Cookies from 'js-cookie'
import React, { useState, useEffect } from 'react'

import './index.css'

import { FaStar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

const SimilarJobs = () => {

    const [allvalues, setvalues] = useState({

        similarJobs: []

    });


    const { id } = useParams();

    useEffect(() => {

        const Fetchalldata = async () => {

            const token = Cookies.get("jwtToken");

            const url = `https://apis.ccbp.in/jobs/${id}`;
            const options = {
                method: 'Get',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }

            const response = await fetch(url, options);
            const data = await response.json();
          
            const similarJobs = data.similar_jobs;



            if (response.ok === true) {
                setvalues({ ...allvalues, similarJobs: data.similar_jobs })
            }

        }

        Fetchalldata();

    }, []);


   

    const renderSimilarJobs = () => {
        return (
            <>


                {allvalues.similarJobs.map(eachJob => {
                    const { title, company_logo_url, employment_type, job_description, location, rating } = eachJob 
                 
                    return (
                       

                        <div className='container similarjob-cont'>

                            <div id='icon-title-rating-cont'>

                                <img className='jobDetails-icon' src={company_logo_url} alt="company-log" id='company-logo' />


                                <div id='title-star-cont'>
                                    <h5>{title}</h5>
                                    <span><FaStar className='icon' /></span>
                                    <span>{rating}</span>

                                </div>

                            </div>

                            <div id='location-package'>

                                <div className='location-emp-cont'>
                                    <FaLocationDot className='icon' />
                                    <span>{location}</span>
                                    <FaBriefcase className='icon' />
                                    <span>{employment_type}</span>

                                </div>

                            </div>

                            <div id='discription-cont'>
                                <p id='disc-name'>Description</p>
                                
                                <p id='disc-para'>{job_description}</p>
                            </div>

                        </div>

                    )
                })}



            </>
        )
    }



    return (
        <>
          


            {renderSimilarJobs()}



        </>
    )
}

export default SimilarJobs;
