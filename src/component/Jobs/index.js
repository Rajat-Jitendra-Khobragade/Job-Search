import React from 'react'
import Header from '../Header'

import Filter from '../Filter'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import JobsCard from '../JobsCard'
import './index.css'
import { IoSearch } from "react-icons/io5";


const Jobs = () => {

  const [allValues, setallValues] = useState({
    allJobsList: [],
    searchInput: "",
    salary: "",
    empType: [],
  });

  useEffect(() => {
    const fetchalldata = async () => {

      const token = Cookies.get("jwtToken");


      const url = `https://apis.ccbp.in/jobs?employment_type=${allValues.empType}&minimum_package=${allValues.salary}&search=${allValues.searchInput}`;
      const options = {
        method: 'Get',
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }


      const response = await fetch(url, options);
      const fetchdata = await response.json();




      if (response.ok === true) {
        setallValues({ ...allValues, allJobsList: fetchdata.jobs });
      }


    };


    fetchalldata();


  }, [allValues.searchInput, allValues.empType, allValues.salary]);

  // -------------  search field  --------------- 
  const userSearch = (event) => {


    //  if(event.key === "Enter"){
    //   setallValues({...allValues, searchInput: event.target.value });

    //  }

    setallValues({ ...allValues, searchInput: event.target.value });


  }

  // -------------- filter field ----------------

  const onchangeEmpType = (value, isChecked) => {
    if (isChecked) {
      setallValues({ ...allValues, empType: [...allValues.empType, value] });
    }

    else {
      setallValues({ ...allValues, empType: allValues.empType.filter(each => each !== value) });
    }
  }

    // ------------------- salry range field ---------------------

    const onchangeSalary = (value, isChecked) => {
      if (isChecked) {
      // setallValues({...allValues, salary:[...allValues.salary,value] });
      setallValues({...allValues,  salary:value });

      }

      else {
        setallValues({ ...allValues, salary: allValues.salary.filter(each => each !== value) });
      }

    }

  return (
    <div className='jobs-main-cont' >
      <Header />

      <div className='row'>

      </div>

      <div className='search-cont'>
        <input type="text" name="search" id="search" className='form-control' placeholder='Search' autoComplete='off' onChange={userSearch} />
        <IoSearch id='search-icon' />
      </div>

     
        <div className='filter-job-cont row'>

          <div className='filter-cont col-md-4' >

            <Filter changeEmpType={onchangeEmpType} salaryRange={onchangeSalary} />
          </div>

          <div className='job-cont col-md-8'>

            <ul>

              {
                allValues.allJobsList.map(each =>
                  <JobsCard jobsDetails={each} key={each.id} />
                )
              }

            </ul>

          </div>


        </div>
      

    </div>






  )
}

export default Jobs
