import React, { useEffect } from 'react'
import './Testimonial.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'

const testimonials = [
    {
        id: 1,
        img: '.././assets/image-emily.jpg',
        txt: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
        author: 'Emily R.',
        job: 'Marketing Director'
    },
    {
        id: 2,
        img: '.././assets/image-thomas.jpg',
        txt: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
        author: 'Thomas S.',
        job: 'Chief Operating Officer'
    },
    {
        id: 3,
        img: '.././assets/image-jennie.jpg',
        txt: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
        author: 'Jennie F.',
        job: 'Business Owner'
    }
]


function Testimonial() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    })
    return (
        <div data-aos="zoom-in-down" className='testimonial'>
            <h1> Client testimonials</h1>
            <div className='testimonial-container'>
                {testimonials.map(testimonial => {
                    return (
                        <div
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            key={testimonial.id} className='testimonial-card'>
                            <div className='testimonial-card-img'>
                                <img src={testimonial.img} alt='testimonial' />
                            </div>
                            <motion.div className='testimonial-card-text'>
                                <p className='testimonial-comment'> {testimonial.txt} </p>
                                <span className='testimonial-author'>{testimonial.author} </span>
                                <span className='testimonial-job'>{testimonial.job}</span>
                            </motion.div>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default Testimonial