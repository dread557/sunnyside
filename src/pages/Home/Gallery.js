import React from 'react'
import './Gallery.scss'
import { motion } from 'framer-motion'

function Gallery() {
    return (
        <div className='gallery'>
            <motion.img
                drag
                dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
                dragElastic={0.7}
                src='.././assets/image-gallery-milkbottles.jpg' alt='milk bottles' />
            <motion.img
                drag
                dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
                dragElastic={0.7}
                src='.././assets/image-gallery-orange.jpg' alt='orange' />
            <motion.img
                drag
                dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
                dragElastic={0.7}
                src='.././assets/image-gallery-cone.jpg' alt='cone' />
            <motion.img
                drag
                dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
                dragElastic={0.7}
                src='.././assets/image-gallery-sugarcubes.jpg' alt='sugarcubes' />
        </div>
    )
}

export default Gallery