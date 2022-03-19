import React from 'react'
import Gallery from './Gallery'
import HeroSection from './HeroSection'
import Marketing from './Marketing'
import Testimonial from './Testimonial'

function Home() {
    return (
        <>
            <HeroSection />
            <Marketing />
            <Testimonial />
            <Gallery />
        </>

    )
}

export default Home