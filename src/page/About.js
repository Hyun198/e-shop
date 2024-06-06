import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    const gotohome = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>About</h1>
            <button onClick={gotohome}>Go to home</button>
        </div>
    )
}

export default About