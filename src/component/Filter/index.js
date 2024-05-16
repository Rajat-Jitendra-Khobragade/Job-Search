import React, { useState, useEffect } from 'react'
import './index.css'


const employesTypeList = [
  {
    label: "Full Time",
    employmentTypeId: "FULLTIME",
  },

  {
    label: "Part Time",
    employmentTypeId: "PARTTIME",
  },

  {
    label: "Freelance",
    employmentTypeId: "FREELANCE",
  },

  {
    label: "Internship",
    employmentTypeId: "INTERNSHIP",
  }
]

const salaryList = [

  {
    label: "10 LPA and above",
    salaryId: "1000000",

  },


  {
    label: "20 LPA and above",
    salaryId: "2000000",

  },


  {
    label: "30 LPA and above",
    salaryId: "3000000",

  },


  {
    label: "40 LPA and above",
    salaryId: "4000000",

  }



]


const Filter = (props) => {

  const { changeEmpType } = props;

  const {salaryRange } = props;

  const [allvalues, setvalues] = useState({
    profileDetails: {},
  });

  //  ------------------ fetch profile api ------------

  useEffect(() => {

    const getProfileDetails = async () => {

      const profileApi = "https://apis.ccbp.in/profile";
      const options = {
        method: "Get",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU `
        }
      }


      const response = await fetch(profileApi, options);
      const data = await response.json();
      

      if (response.ok === true) {
        setvalues({ ...allvalues, profileDetails: data.profile_details })
      }

    }

    getProfileDetails();

  }, [])

  // --------------- profile api UI ---------------------

  const renderProfileDetails = () => (
    <div id='profile-details-cont'>
      <img src={allvalues.profileDetails.profile_image_url} alt="profile-img" id='profile-img' />
      <h2 id='profile-name'>{allvalues.profileDetails.name}</h2>
      <p id='profile-bio'>{allvalues.profileDetails.short_bio}</p>
    </div>
  );

  // ---------------- fetch types of employment ----------------

  const employesTypeListData = () => {

    const onchangeEmpType = (event) => {
      changeEmpType(event.target.value, event.target.checked);

    }

    return employesTypeList.map(eachType => {
      return (
        <li key={eachType.employmentTypeId}>

          <input type="checkbox"
            className="checkbox-radio-btn"
            value={eachType.employmentTypeId}
            id={eachType.employmentTypeId}
            onChange={onchangeEmpType} />

          <label id='filter-lable' htmlFor={eachType.employmentTypeId}>
            {eachType.label}
          </label>

        </li>
      );

    });

  };


  // ------------------ types of employment UI ------------------

  const renderEmpType = () => (

    <div id='emp-cont'>
      <h5 id='filter-heading'>Types of Employment</h5>
      <ul id='checklist-radio'>{employesTypeListData()}</ul>
    </div>

  );

  // ------------------ fetch salary range ------------------

  const salaryRangeData = () => {

    const onchangeSalary = (event) => {
      salaryRange(event.target.value , event.target.checked );
      
    };

    return salaryList.map(eachRange => {

     
  

      return (

        <li key={eachRange.salaryId}>
          <input type="radio" 
          name="salary-range" 
          value={eachRange.salaryId} 
          className="checkbox-radio-btn"
          onChange={onchangeSalary}
          />

          <label id='filter-lable' htmlFor={eachRange.salaryId}>
            {eachRange.label}
            </label>


        </li>

      );

    });

  };


  const renderSalery = () => (

    <div id='salary-cont'>
      <h5 id='filter-heading'>Salary Range</h5>
      <ul id='checklist-radio'>{salaryRangeData()}</ul>

    </div>

  );




  return (


    <div>

      {renderProfileDetails()}
      <hr className='hr' />

      {renderEmpType()}

      <hr className='hr' />

      {renderSalery()}

      <hr className='hr' />

    </div>


  )
}

export default Filter;
