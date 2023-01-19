import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Insurance from '../components/insurance/Insurance'
import Footer from '../components/footer/Footer'
import InsuranceSection from '../components/insurance/InsuranceSection';




const InsurancePage = () => {
    return (
        <>
           <Navbar /> 
           <Insurance />
           <InsuranceSection />
           <Footer />
        </>
    )
}

export default InsurancePage
