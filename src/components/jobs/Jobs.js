import React from 'react'
import Fade from 'react-reveal/Fade';

const Jobs = () => {
    return (
        <div className='jobs submenu'>
            <div className="container">
                <div className="content">
                    <Fade top>
                    <h1>Jobs Prorgam</h1>
                    </Fade>
                    <Fade bottom>
                    <p>We strive to assist participants to acquire the knowledge and skills needed to obtain self-sufficiency through the enhancement of their capacity for civic engagement, community leadership by securing meaningful and gratifying employment that will empower themselves, their families, which will create stronger and safer communities.  
                    <br /> <br />
                    Our jobs program starts with getting an ID, to helping with a resume, to coaching for the interview, transportation to the actual work site, and coaching on how to keep the job and appropriate behavior. Work is NOT an option.  </p>
                    <br /> <br />
                    </Fade>

                    <div className='job-link'>
                        <p>For more information for our Jobs Program, visit <a href='https://www.transitionsfortomorrow.org/'>here.</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs