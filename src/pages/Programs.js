import React from 'react'

//components
import ProgramHero from '../components/ProgramHero'
import WhyPrograms from '../components/WhyPrograms'
import Benefits from '../components/Benefits'
import Testimonial from '../components/Testimonial'
import PCTA from '../components/PCTA'

const Programs = () => {
    return (
        <>
            <div className='mb-36 space-y-40'>
                <ProgramHero />
                <div className='p-6 mx-auto max-w-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl space-y-40'>
                    <WhyPrograms />
                    <Benefits />
                </div>
                <Testimonial />
                <PCTA />
            </div>
        </>
    )
}

export default Programs