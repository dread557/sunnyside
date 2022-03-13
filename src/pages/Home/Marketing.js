import React from 'react'
import { Link } from 'react-router-dom'
import './Marketing.scss'

function Marketing() {
    return (
        <div class="main">
            <div className='group one'>
                <div className='main-text'>
                    <h2>Transform your brand</h2>
                    <p>We are a full-service creative agency specializing
                        in helping brands grow fast. Engage your clients
                        through compelling visuals that do most of the
                        marketing for you.</p>
                    <Link to="/" >Learn more</Link>
                </div>
                <div className='main-img x'>
                    <img src='.././assets/image-transform.jpg' alt='transform' />
                </div>
            </div>
            <div className='group two'>
                <div className='main-text'>
                    <h2>Stand out to the right audience</h2>
                    <p> Using a collaborative formula of designers,
                        researchers, photographers, videographers,
                        and copywriters, we'll build and extend your
                        brand in digital places.</p>
                    <Link to="/" >Learn more</Link>
                </div>
                <div className='main-img'>
                    <img src='.././assets/image-stand-out.jpg' alt='stand out' />
                </div>
            </div>

            <div className='main-text bg a'>
                {/* <img src='./../../assets/image-graphic-design.jpg' alt='cherry' /> */}
                <h2>Graphic design</h2>
                <p> Great design makes you memorable. We deliver
                    artwork that underscores your brand message
                    and captures potential clients' attention.</p>
            </div>
            <div className='main-text bg b'>
                {/* <img src='./../../assets/image-photography.jpg' alt='orange' /> */}
                <h2>Photograhy</h2>
                <p>Increase your credibility by getting the most
                    stunning, high-quality photos that improve
                    your business image.</p>
            </div>
        </div>
    )
}

export default Marketing