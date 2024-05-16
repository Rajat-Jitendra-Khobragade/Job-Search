import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './index.css'
import Cookies from 'js-cookie'

const Login = () => {

  const navigate = useNavigate();

  const [data, setdata] = useState({
    username: "",
    password: "",
    showErrorMsg: false,
    errorMsg: "",
  })

  const fetchuserDetails = async (event) => {
    event.preventDefault();

    const userDetails = {
      username: data.username,
      password: data.password,
    }

    const url = "https://apis.ccbp.in/login";
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options);
    const fetchData = await response.json();


    if (response.ok === true) {

      setdata({ ...data, showErrorMsg: false })
      Cookies.set("jwtToken", fetchData.jwt_token);
      navigate("/");
    }
    else {
      setdata({ ...data, showErrorMsg: true, errorMsg: fetchData.error_msg })
    }

  };



  const onchangeusername = (event) => {
    setdata({ ...data, username: event.target.value });

  }

  const onchangepassword = (event) => {
    setdata({ ...data, password: event.target.value })
  }


  const token = Cookies.get("jwtToken");
  useEffect(() => {
    if (token !== undefined) {
      navigate("/");
    }
  })





  return (

    <>

      <form action="#" className='px-3' id='form-div' onSubmit={fetchuserDetails}>
       
       <div className='logo-cont'>
        <img src="job-icon-img.png" alt="logo" id='logo' />
        </div>
        <br />
        <label htmlFor="username"> Username </label>
        <br />
        <input className='form-control ' type="text" name="username" id='username' placeholder='rahul' onChange={onchangeusername} />
        <br />
        <label htmlFor="password"> Password </label>
        <br />
        <input className='form-control' type="password" name="password" id='password' placeholder='rahul@2021' onChange={onchangepassword} />
        <br />
        <button type='submit' className='btn btn-primary px-4'>LOGIN</button>

        {data.showErrorMsg ? (<p>*{data.errorMsg}</p>) : null}
      </form>



    </>
  )
}

export default Login;
