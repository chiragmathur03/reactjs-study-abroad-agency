import React from 'react'

//components
import CompanyHero from '../components/CompanyHero'
import AboutInfo from '../components/AboutInfo'
import ProgramBenefits from '../components/ProgramBenefits'
import ContactUs from '../components/ContactUs'

// mt-36 mb-36 p-6 mx-auto max-w-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl space-y-40
const Company = () => {
  return (
    <div className='mb-36'>
      <CompanyHero />
      <div className='mt-32 sm:mt-12 p-6 mx-auto max-w-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl space-y-40'>
        <AboutInfo />
        <ProgramBenefits />
        <ContactUs />
      </div>
    </div>
  )
}

export default Company