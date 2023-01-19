import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Link as LinkRoll } from 'react-scroll'


import OpSection1 from '../../assets/OpSection1.jpg'
import OpSection2 from '../../assets/OpSection2.jpg'
import OpSection3 from '../../assets/OpSection3.jpg'


const OpSection = () => {
  return (
    <>
<div className='wrap'>
    <Fade left>
    <div className="box box-left">
        <h1 className='header'>WHAT TO EXPECT DURING THE PROGRAM</h1>
        <br/>
        <p>Considered the final step in the treatment plan, the outpatient program has patients attend three group therapy sessions per week with one individual session as well. Other therapeutic options that are involved:</p>
        <br />
        <ul>
            <li><p>Cognitive-behavioral therapy</p></li>
            <li><p>Family therapy</p></li>
            <li><p>Art therapy</p></li>
            <li><p>Hypnotherapy</p></li>
        </ul>
        <br />
        <p>Near conclusion, patients and their case manager work together to plan a proper discharge. For most cases, it is advised that the outpatient program should not be the first step in one’s journey to recovery. For other options, please visit our full list of treatment options. </p>
    
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
        <img src={OpSection1} width="600px" height="500px" alt="Palm Springs Rehab Logo" loading="lazy" />
    </div>
    </Fade>
</div>
    

{/* SECTION 2 */}

<div className='wrap'>

<Fade left>
    <div className="box">
        <img src={OpSection2} width="600px" height="380px" alt="Palm Springs Rehab Logo" loading="lazy" />
    </div>
    </Fade>


    <Fade right>
    <div className="box box-left">
        <h1 className='header'>SOBER LIVING</h1>
        <br/> <br/>
        <p>For many reasons, patients don’t always have a stable home-environment to return to after treatment. For these cases, we offer sober living homes in which patients can continue to strengthen themselves even further post-treatment.   
        <br /> <br />
        At our sober living homes, structure and accountability are at the patients’ side. The combination of our outpatient program with a transition to sober living communities boosts the success of our patients’ journey to sobriety.  </p>
        <br />

    </div>
    </Fade>
</div>

{/* SECTION 3 */}


<div className='wrap'>
    <Fade left>
    <div className="box box-left">
        <h1 className='header'>LEARN ABOUT OUR OTHER PROGRAMS</h1>
        <br/><br/>

        <p>
        At Palm Springs Rehab Treatment Center, we provide several other avenues of addiction treatment. In addition to our partial hospitalization program, we offer:</p>
        <br />
        <ul>
            <li><p>Partial Hospitalization Program - IOP</p></li>
            <li><p>Intensive Outpatient Program - OP</p></li>
            <li><p>Jobs Program</p></li>
        </ul>
        <br />
        <p>Contact us today and start your journey to recovery. We are eager to help you overcome your addiction</p> 
        <br />
    
        <div className='box-btn'>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
            <Link to="/contact">
               <button>Call Us</button>
            </Link>
        </LinkRoll>
        </div>    

    </div>
    </Fade>
    <Fade right>
    <div className="box">
        <img src={OpSection3} width="600px" height="450px" alt="Palm Springs Rehab Logo" loading="lazy" />
    </div>
    </Fade>
</div>
    



    </>
  )
}

export default OpSection
