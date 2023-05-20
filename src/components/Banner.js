import React from 'react'
import banner from "../images/banner.jpeg";

const Banner = () => {
    return (
        <div className="container">
            <img src={banner} alt="Join Us" />
            <h2 className="centered">Join Us</h2>
        </div>
    )
}

export default Banner;
