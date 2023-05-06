import React from 'react'
import SuchanaContext from '../context/SuchanaContext'
import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Check() {
    var navigate = useNavigate()

    var { user, isAuthenticated } = useAuth0()
    var [userData, setUserData] = useState({})



    function sendData() {

        fetch('api/users/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: user }),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.phone)
                    // navigate('/dashboard')
                    console.log('verified')
                else
                    navigate('/auth/phone')
            }
            )
    }

    useEffect(() => {
        console.log(user)

        if (user)
            sendData()
    }, [user])


    return (

        <div>
            <h1>Checking</h1>
        </div>
    )
}

export default Check