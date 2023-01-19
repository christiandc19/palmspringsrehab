import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

import BgVideo from '../../assets/hero-vbg.mp4'
import HeroLogo from '../../assets/nav-logo.png'



const Hero = () => {
    return (
        <div className='hero'>
             <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />

            <div className="hero-container">
                <div className="content">
                    

                    <div className='hero-logo'>
                    <Fade left>
                    <img src={HeroLogo} width="200px" height="150px" alt="Palm Springs Rehab Logo" loading="lazy"/>
                    </Fade>
                    </div>

                
                    <Fade bottom>
                        <h2 className='subtitle'>SUBSTANCE ABUSE ADDICTION AND MENTAL HEALTH TREATMENT FACILITY</h2>
                    </Fade>
                        <p>Find your happiness and learn to put it first.</p>
                        <br />
                        <div className='hero-btn'>
                        <Link to="/treatment">
                        <button>Learn More</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero