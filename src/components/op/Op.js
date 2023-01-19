import React from 'react'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const Op = () => {
    return (
        <div className='op submenu'>
            <div className="container">
                <div className="content">
                    <Fade top>
                    <h1>Outpatient Prorgam (OP)</h1>
                    </Fade>
                    <Fade bottom>
                    <p>The least intensive program we provide, the outpatient program does not require overnight stays at our facilities. And although there is less time required for therapy sessions per week, we instill a high level of accountability for our patients in order for them to succeed in their journey to sobriety.  
                    <br /> <br />
                    At Palm Springs Rehab Treatment Center, we recognize that overcoming addiction on your own may not be possible. Fortunately our treatment programs give you the path to healing/recovery. Through our outpatient program, we give you the tools to manage your addiction in the most healthy way possible. To learn more, reach out to us today.  </p>
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

export default Op
