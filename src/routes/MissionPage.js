import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Mission from '../components/mission/Mission'
import MissionSection from '../components/mission/MissionSection'

const MissionPage = () => {
    return (
        <>
           <Navbar /> 
           <Mission />
           <MissionSection />
           <Footer />
        </>
    )
}

export default MissionPage
