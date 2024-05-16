import React from 'react'
import './index.css'

import { FaStar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { Link } from 'react-router-dom'


const JobsCard = (props) => {

  const { jobsDetails } = props;
  return (
    <Link to={`/jobs/${jobsDetails.id}`} className='jobcart-link'>
      
      <div className='job-card-cont'>

        <div id='icon-title-cont'>

          <img src={jobsDetails.company_logo_url} alt="company-log" id='company-logo' />


          <div id='title-star-cont'>
            <h5>{jobsDetails.title}</h5>
            <span><FaStar className='icon' /></span>
            <span>{jobsDetails.rating}</span>

          </div>

        </div>

        <div id='location-package'>

          <div className='location-emp-cont'>
            <FaLocationDot className='icon' />
            <span>{jobsDetails.location}</span>
            <FaBriefcase className='icon' />
            <span>{jobsDetails.employment_type}</span>

            <h5 className='package'>{jobsDetails.package_per_annum}</h5>


          </div>

        </div>

        <div id='discription-cont'>
          <p id='disc-name'>Description</p>
          <p id='disc-para'>{jobsDetails.job_description}</p>
        </div>



      </div>
    </Link>
  )
}

export default JobsCard;
