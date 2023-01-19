import React from "react";
import Fade from 'react-reveal/Fade';

import ContactForm from "./ContactForm";


const Contact = () => {

    return (
      <>

<div className='contact-hero main-menu'>
       <div className="container">
            <div className="main-menu-content">
            <Fade top>
                    <h1>HAVE SOME QUESTIONS?</h1>
            </Fade>
            </div>
     </div>
</div>

      <ContactForm />

      </>
    )
}

export default Contact