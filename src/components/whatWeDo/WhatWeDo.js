import React from 'react'
import './WhatWeDoStyles.css'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Link as LinkRoll } from 'react-scroll'


import WhatWeDoImg from '../../assets/whatwedo.jpg'

const WhatWeDo = () => {
  return (
    <>
<div className='wrap'>
    <Fade left>
    <div className="box left">
        <h1 className='title'>WHAT WE DO</h1>
        <br/>
        <p>At Palm Spring Rehab, we offer different levels of care based on each individual’s needs. Our programs consist of an intensive outpatient program (IOP) and a more demanding and structured partial hospitalization program (PHP). <br /> <br />You can be confident that our caring and professional staff will recommend the right level of care for you or your loved one.</p>
        <br />
        <h1 className='header'>TREATMENT</h1>
        <br/>
        <p>All treatment clients will have a recovery/treatment plan developed within 30 days of admission. Measurement and reassessment of treatment plan progress happen on a weekly basis through the weekly summary. <br/><br/> In the weekly summary, the drug and alcohol counselor will ensure that action steps to be taken by client or counselor are on target and that the action step achievements will enable resolution of the objective. All treatment plans are reviewed by and signed off on by the clinical director.</p>
    
        <div className='box-btn'>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
            <Link to="/treatment">
               <button>Learn More</button>
            </Link>
        </LinkRoll>

        </div>    
    </div>
    </Fade>

    <Fade right>
    <div className="box">
        <img src={WhatWeDoImg} width="600px" height="480px" alt="Conselling Session with a patient" loading="lazy" />
    </div>
    </Fade>
</div>
    
    </>
  )
}

export default WhatWeDo
