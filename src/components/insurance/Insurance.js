import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'



const Insurance = () => {
    return (
        <>
            <div className='insurance main-menu'>
                <div className="container">
                    <div className="main-menu-content">
                        <Fade left>
                            <h1>ACCEPTED INSURANCE</h1>
                        </Fade>
                        <Fade right>
                            <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>
                        </Fade>

                        <div>
                            <Link to="/contact">
                                <button>Contact Us</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='divider'></div>
            
            
        </>

    )
}

export default Insurance
