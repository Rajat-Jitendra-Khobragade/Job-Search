import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const RouterProtected = (props) => {

    const { Component } = props;
    const navigate = useNavigate();
    const token = Cookies.get("jwtToken");

    useEffect(() => {
        if (token === undefined) {
            return navigate("/login");
        }
    })


    return ( <
        Component / >
    )


}

export default RouterProtected;