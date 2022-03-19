import React from 'react'
import './Testimonial.scss'

function Testimonial() {
    return (
        <div className='testimonial'>
            <h1> Client testimonials</h1>
            <div className='testimonial-container'>
                <div className='testimonial-card'>
                    <div className='testimonial-card-img'>
                        <img src='.././assets/image-emily.jpg' alt='testimonial' />
                    </div>
                    <div className='testimonial-card-text'>
                        <p className='testimonial-comment'>
                            We put our trust in Sunnyside and they delivered,
                            making sure our needs were met and deadlines were always hit.
                        </p>
                        <span className='testimonial-author'>Emily R. </span>
                        <span className='testimonial-job'>Marketing Director</span>
                    </div>
                </div>
                <div className='testimonial-card'>
                    <div className='testimonial-card-img'>
                        <img src='.././assets/image-thomas.jpg' alt='testimonial' />
                    </div>
                    <div className='testimonial-card-text'>
                        <p className='testimonial-comment'>
                            Sunnyside's enthusiasm coupled with their keen
                            interest in our brand's success made it a
                            satisfying and enjoyable experience.
                        </p>
                        <span className='testimonial-author'>Thomas S. </span>
                        <span className='testimonial-job'>Chief Operating Officer</span>
                    </div>
                </div>
                <div className='testimonial-card'>
                    <div className='testimonial-card-img'>
                        <img src='.././assets/image-jennie.jpg' alt='testimonial' />
                    </div>
                    <div className='testimonial-card-text'>
                        <p className='testimonial-comment'>
                            Incredible end result! Our sales
                            increased over 400% when we worked with
                            Sunnyside. Highly recommended!
                        </p>
                        <span className='testimonial-author'>Jennie F.</span>
                        <span className='testimonial-job'>Business Owner</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial