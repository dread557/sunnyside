import React from 'react';
import './HeroSection.scss'
import Typewriter from 'typewriter-effect'

function HeroSection() {
    return (
        <div class="hero-section">
            {/* <h2>We are creatives</h2> */}
            <Typewriter
                class="hero-text"
                onInit={(typewriter) => {
                    typewriter.typeString("We are creatives")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Let's make your dreams come alive!")
                        .start()
                }}
            />
            <svg class="arrow-down" width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15" /></g></svg>
        </div>
    )
}

export default HeroSection