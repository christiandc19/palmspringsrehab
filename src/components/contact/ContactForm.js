import React, { useRef } from "react";
import { BsFillPinMapFill } from 'react-icons/bs';
// import { AiOutlinePhone } from 'react-icons/ai';
// import { AiOutlineMail } from 'react-icons/ai';


import './ContactForm.css';
import emailjs from 'emailjs-com'


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        //    Service Id        Template Id                 Public Key (Account Tab) 
        emailjs.sendForm('service_9v2gipl', 'template_rxc8sbg', form.current, 'Rj5e7bWJla-kOEL0H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <>
        <div className="contactForm-mainContainer">
            <div className='contactForm'>
                <div className="map">
                    <div className="location">
                        <h1>GET IN TOUCH</h1><br />
                        {/* <p><AiOutlinePhone /><a href="tel:3234521224"> +1 (323) 452-1224  </a></p><br />  */}
                        {/* <p><AiOutlineMail /> info@domainName.com  </p><br /> */}
                        <p><BsFillPinMapFill /> 68487 E Palm Canyon Dr, STE 44, Cathedral City CA 92234 </p><br />
                        <p className="admission">Please call our admission department or fill out the form if you have any questions.</p>
                    </div>

                    <div className="iframe">
                        <iframe title="map" width="700" height="250" id="gmap_canvas" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=68487%20E%20Palm%20Canyon%20Dr,%20Cathedral%20City%20CA%2092234+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe>
                    </div>
                </div>

                <div className="container contact-container">
                    <form ref={form} onSubmit={sendEmail}>
                        <h1>SEND A MESSAGE</h1>
                        <input className="user-input" type="text" name='name' placeholder='Name' required />
                        <input className="user-input" type="text" name='email' placeholder='Email' required />
                        <input className="user-input" type="tel" name='phone' placeholder='Phone' required />
                        <input className="user-input" type="text" name='subject' placeholder='Subject' required />
                        <textarea className="user-input email-input" name="message" rows="4" placeholder="How can we help?" required ></textarea>
                        <div className="submit-btn">
                            <button type='submit' className="btn-modal btn btn-primary">Send</button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
        </>
    )
}

export default ContactForm