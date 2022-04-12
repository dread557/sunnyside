import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Marketing.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Marketing() {

    useEffect(() => {
        Aos.init({ duration: 4000 })
    })

    return (
        <div data-aos="fade-right" class="main">
            <div className='group one'>
                <div className='main-text'>
                    <div className='text-wrapper'>
                        <h2>Transform your brand</h2>
                        <p> We are a full-service creative agency specializing
                            in helping brands grow fast. Engage your clients
                            through compelling visuals that do most of the
                            marketing for you.</p>
                        <Link to="/" >Learn more</Link>
                    </div>
                </div>
                <div data-aos="fade-left" className='main-img x'>
                    <img src='.././assets/image-transform.jpg' alt='transform' />
                </div>
            </div>
            <div data-aos="fade-up-right" className='group two'>
                <div className='main-text'>
                    <div className='text-wrapper'>
                        <h2>Stand out to the right audience</h2>
                        <p> Using a collaborative formula of designers,
                            researchers, photographers, videographers,
                            and copywriters, we'll build and extend your
                            brand in digital places.</p>
                        <Link to="/" >Learn more</Link>
                    </div>
                </div>
                <div data-aos="fade-up-left" className='main-img'>
                    <img src='.././assets/image-stand-out.jpg' alt='stand out' />
                </div>
            </div>
            <div className='group three'>
                <div data-aos="flip-left" className='main-text bg a'>
                    <div className='text-wrapper'>
                        <h2>Graphic design</h2>
                        <p> Great design makes you memorable. We deliver
                            artwork that underscores your brand message
                            and captures potential clients' attention.</p>
                    </div>

                </div>
                <div data-aos="flip-right" className='main-text bg b'>
                    <div className='text-wrapper'>
                        <h2>Photograhy</h2>
                        <p>Increase your credibility by getting the most
                            stunning, high-quality photos that improve
                            your business image.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Marketing