import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Link as LinkRoll } from 'react-scroll'


import PhpSection1 from '../../assets/PhpSection1.jpg'
import PhpSection2 from '../../assets/PhpSection2.jpg'
import PhpSection3 from '../../assets/PhpSection3.jpg'


const PhpSection = () => {
  return (
    <>
<div className='wrap'>
    <Fade left>
    <div className="box box-left">
        <h1 className='header'>WHAT IS PHP</h1>
        <br/>
        <p>A treatment plan that can be highly beneficial for those who have supportive family members at home and responsibilities that they must maintain during the week, the partial hospitalization program offers structured addiction treatment that runs several hours daily throughout the week. Through this treatment option, you can participate in treatment sessions during the day and return to your home at night. 
        <br /> <br />
        One of the first steps that you should take is to talk to our addiction treatment admissions team. They will provide a formal assessment to determine what level of treatment is right for your needs. For instance, we may recommend a partial hospitalization program if you meet these criteria:</p>
        <br />
        <ul>
            <li><p>You are medically stable.</p></li>
            <li><p>You’re not at risk of harming others or yourself.</p></li>
            <li><p>You have difficulty functioning at school, work, or home.</p></li>
            <li><p>You’re motivated to engage in our treatment program.</p></li>
            <li><p>You’re experiencing co-occurring substance use disorders and mental health concerns.</p></li>
            <li><p>You have sufficient support in your home life.</p></li>
        </ul>
        <br />
        <p>Our evaluation doesn’t just determine what level of care you need. It also allows us to choose what therapeutic options could be part of your treatment program.</p>

    </div>
    </Fade>
    <Fade right>
    <div className="box">
        <img src={PhpSection1} width="600px" height="500px" alt="Palm Springs Rehab Logo" loading="lazy" />
    </div>
    </Fade>
</div>
    

{/* SECTION 2 */}

<div className='wrap'>
<Fade left>
    <div className="box">
        <img src={PhpSection2} width="600px" height="380px" alt="Palm Springs Rehab Logo" loading="lazy" />
    </div>
    </Fade>


    <Fade right>
    <div className="box box-left">
        <h1 className='header'>WHAT TO EXPECT THROUGHOUT THE PROGRAM</h1>
        <br/> <br/>
        <p>Consisting of 5 hours of clinical services (5 days per week), the PHP has the highest level of care we provide. Throughout treatment, patients will participate in four daily group therapy sessions, as well as individual therapy at least once a week. Additionally, all patients meet with our medical director on a weekly basis to discuss medication management (if applicable).  
        <br /> <br />
        Patients are served lunch between group sessions and can participate in weekly recovery outings as well. For anyone starting their journey to sobriety, this level of care is recommended, as it is best to have a strong foundation of support built. </p>
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
            <li><p>Intensive Outpatient Program - IOP</p></li>
            <li><p>Outpatient Program - OP</p></li>
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
        <img src={PhpSection3} width="600px" height="450px" alt="Palm Springs Rehab Logo" loading="lazy" />
    </div>
    </Fade>
</div>
    



    </>
  )
}

export default PhpSection
