import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Home = ({ setAuthenticate }) => {
    const navigate = useNavigate();

    const goProductPage = () => {
        navigate('/products?q=pants');
    }


    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home