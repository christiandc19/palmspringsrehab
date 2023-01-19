import React from 'react'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const Iop = () => {
    return (
        <div className='iop submenu'>
            <div className="container">
                <div className="content">
                    <Fade top>
                    <h1>INTENSIVE OUTPATIENT PROGRAM (IOP)</h1>
                    </Fade>
                    <Fade bottom>
                    <p>Our IOP enables patients to continue their day-to-day regimen while simultaneously  undergoing our best possible care. Measured on a case-by-case basis, patients may live in our treatment center, in a sober living community, or at their own home. 
                    <br /> <br />
                    At Palm Springs Rehab Treatment Center, we recognize that overcoming addiction on your own may not be possible. Fortunately our treatment programs give you the path to healing/recovery. Through our intensive outpatient program, we give you the tools to manage your addiction in the most healthy way possible. To learn more, reach out to us today. </p>
                    </Fade>
                <div>
                <Link to="/treatment">
                    <button>Learn More</button>
                </Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Iop
