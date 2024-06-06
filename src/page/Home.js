import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/about">Go to about page</Link>
            <br></br>
            <Link to="/products">Go to products page</Link>
        </div>
    )
}

export default Home