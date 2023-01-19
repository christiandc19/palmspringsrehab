import React from "react";
import Fade from 'react-reveal/Fade';
import ContactForm from "../contact/ContactForm";



const About = () => {

    return (
            <>
            <div className='about main-menu'>
                    <div className="container">
                        <div className="main-menu-content">
                            <Fade top>
                                <h1>WHO WE ARE?</h1>

                                <p>Palm Springs Rehab Treatment Center lets you taper in a safe, structured manner. We use evidence-based medical practices for controlling withdrawal symptoms and watch over you on a 24-7 basis. Our nursing team is adept at administering medications for gradual tapering. And whenever you feel up to it, you also have the chance to participate in therapy and peer support groups to explore the underlying triggers of addiction and associated mental health disorders. </p>
                            </Fade>
                        </div>
                    </div>
            </div>
                                            {/* aboutUsContainer */}
                                <div className="main-menu-header">
                                <br/>
                                    <h1>ABOUT US</h1>

                                    <Fade top>
                                    <p className="container">
                                    <br/>
                                    In many cases, medically supervised detox near Los Angeles is the right starting point for overcoming addiction to alcohol or dependence of prescription drugs or narcotics. Palm Springs Rehab Treatment Center strives to make this step less stressful by focusing on your comfort and safety first. Our compassionate staff utilizes established medical treatments to decrease withdrawal effects in an empathetic environment. In the meantime, you’ll receive behavioral health care from experienced counselors to boost your chances for an effective recovery. Detoxing by yourself or going abruptly is often dangerous. 
                                    </p><br/>
                                    </Fade>
                                </div>



            <ContactForm />
            </>
    )

    }
export default About
