import image from '../../images/job-icon-img.png'
import './index.css'
import React from 'react'
import { Link } from 'react-router-dom'

import Cookies from 'js-cookie'


const Header = (props) => {
     
     const logout = () => {
        Cookies.remove("jwtToken")

     }


    return (
        <>

            <div className ='cont sticky-top'>
                <ul>

                    <li>
                        <Link to='/' className='web-logo-cont'>
                        
                            <img src={image} alt="web-logo" className='web-logo' />


                        </Link>
                    </li>

                    <li id='nav-tabs'>
                    <Link to='/' className='nav-tabs-link' >
                    <span className='nav-tab'>Home</span>
                        <i className="fa-solid fa-house fa-2xl nav-icon"></i> 
                        </Link>

                        <Link to='/jobs'  className='nav-tabs-link'>
                      <span className='nav-tab'>Jobs</span>  
                         <i className="fa-solid fa-briefcase fa-2xl nav-icon"></i> 
                        </Link>
                    </li>

                    <li>
                    <Link to='/login'>
                        <button onClick={logout} className='btn btn-primary buttons'>Logout</button>
                     <i onClick={logout} className="fa-solid fa-right-from-bracket fa-2xl m-4 logout"></i> 
                        </Link>
                    </li>

                </ul>
            </div>

        </>
    )
}

export default Header;
