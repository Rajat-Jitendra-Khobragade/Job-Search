import React from 'react'
import Header from '../Header'
import './index.css'
import {Link} from 'react-router-dom'



const Home = () => {
  return (
    <>

      <Header></Header>

      <div id='home-container'>
        <h2 id='home-name'> Get The Right Job You Deserve </h2>

        <p id='home-para'> Millions of people are searching for jobs,
          salary information, company reviews. Find the job that fits
          your abilities and potential.

        </p>

        <Link to='/jobs'>
        <button className='btn btn-primary'> Find Jobs </button>
        </Link>

      </div>

      <div id='home-img-cont'>
        
        <img id='home-img' src="home job img.png" alt="home-img" />
        
      </div>

    </>
  )
}

export default Home;
