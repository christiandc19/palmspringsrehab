import React from 'react'
import './Cards.css'
import ServicesCards from '../props/CardProps';

import Fade from 'react-reveal/Fade';


import Card1 from '../../assets/card1.jpg'
import Card2 from '../../assets/card2.jpg'
import Card3 from '../../assets/card3.jpg'


const Cards = () => {
  return (
    <>

            <div className="cards-header container">
                <h1>WE OFFER VARIOUS SERVICES </h1>
                <br/>
                <p>At Palm Springs Rehab Treatment Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment. </p>
            </div>

        <div className='cards'>
            <div className='card-container'>
                <Fade bottom>
                    <ServicesCards
                        Image={Card1}
                        CardName="MENTAL HEALTH TREATMENT​"
                        Description="Clients suffer from both mental health disorders and addiction. Therefore, we provide treatment for co-occurring disorders, addressing both conditions simultaneously."
                    />
                </Fade>

                <Fade top>
                    <ServicesCards
                        Image={Card2}
                        CardName="SUBSTANCE USE TREATMENT"
                        Description="We treat a multitude of substance use disorders. Whether the client is suffering from an alcohol addiction, prescription drug addiction, we can help."
                    />
                </Fade>

                <Fade bottom>
                    <ServicesCards
                        Image={Card3}
                        CardName="EMPLOYMENT / JOB ASSISTANCE"
                        Description="There are a variety of programs and organizations that fall under the umbrella of employment-based recovery support services. Jobs Assistance is available."
                    />
                </Fade>
            </div>
        </div>
    </>
  )
}

export default Cards
