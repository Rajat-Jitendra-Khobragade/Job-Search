import { useParams } from 'react-router-dom'
import Header from '../Header'
import Cookies from 'js-cookie'
import React, { useState, useEffect } from 'react'

import './index.css'

import { FaStar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import SimilarJobs from '../SimilarJobs'

const JobDetails = () => {

    const [allvalues, setvalues] = useState({
        jobDetails: {
            skills: [],
            life_at_company: {},
        },

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
            const jobDetails = data.job_details;




            if (response.ok === true) {
                setvalues({ ...allvalues, jobDetails: data.job_details })
            }

        }

        Fetchalldata();

    }, []);


    const renderJobDetails = () => (

        <div className='jobDetails-skill-cont container'>

            <div id='icon-title-rating-cont'>

                <img className='jobDetails-icon' src={allvalues.jobDetails.company_logo_url} alt="company-log" id='company-logo' />


                <div id='title-star-cont'>
                    <h5>{allvalues.jobDetails.title}</h5>
                    <span><FaStar className='icon' /></span>
                    <span>{allvalues.jobDetails.rating}</span>

                </div>

            </div>

            <div id='location-package'>

                <div className='location-emp-cont'>
                    <FaLocationDot className='icon' />
                    <span>{allvalues.jobDetails.location}</span>
                    <FaBriefcase className='icon' />
                    <span>{allvalues.jobDetails.employment_type}</span>

                    <h5 className='package'>{allvalues.jobDetails.package_per_annum}</h5>


                </div>

            </div>

            <div id='discription-cont'>
                <p id='disc-name'>Description</p>
                <div id='visit-cont'>
                    <a id='visit' href={allvalues.jobDetails.company_website_url}>Visit <BsBoxArrowUpRight className='fa-box-arrow' />  </a>
                </div>
                <p id='disc-para'>{allvalues.jobDetails.job_description}</p>
            </div>

            <div id='skills-cont'>

                <h4 id='skills-heading'>Skills</h4>

                {allvalues.jobDetails.skills.map(eachSkill => {
                    const { image_url, name } = eachSkill
                    return (

                        <ul className="skill-list" >
                        
                            <li className="skill-item" key={name}>
                                <img src={image_url} alt={name} className="skill-image" />
                                <span className="skill-name">{name}</span>
                          
                            </li>
                        </ul>
                    )
                })}

            </div>


            <div className='life-at-company-cont'>
                <h5 id='life-at-company-name'>Life at Company</h5>

                <div id='life-para-image-cont'>

                    <p id='life-para'>{allvalues.jobDetails.life_at_company.description}</p>


                    <img id='life-image' src={allvalues.jobDetails.life_at_company.image_url} alt="company-image" />
                </div>

            </div>

        </div>

    );





    return (
        <>
            <Header></Header>


            {renderJobDetails()}

            <h3 className='similar-heading'>Similar Jobs</h3>

            <SimilarJobs />


        </>
    )
}

export default JobDetails;
