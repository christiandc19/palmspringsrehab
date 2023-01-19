import React from 'react'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const Php = () => {
    return (
        <div className='php submenu'>
            <div className="container">
                <div className="content">
                    <Fade top>
                    <h1>Partial Hospitalization Prorgam (PHP)</h1>
                    </Fade>
                    <Fade bottom>
                    <p>Addiction can take a heavy toll on your life. It can disrupt your eating and sleeping patterns, stealing your health from you. They can cause you to do things that you would never have expected, such as lying about your substance use or stealing to fund your dependence. As a result of these actions, you may fear that you have permanently damaged your relationships with your loved ones. In such cases, you may feel that you have gone so far, done so many things, that it is impossible to go back.
                    <br /><br/>
                    Fortunately, our treatment programs give you the path to healing/recovery. Through our PHP program, we give you the tools to manage your addiction in the most healthy way possible. To learn more, reach out to us today. </p>
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

export default Php
