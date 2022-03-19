import React from 'react'
import './Gallery.scss'

function Gallery() {
    return (
        <div className='gallery'>
            <img src='.././assets/image-gallery-milkbottles.jpg' alt='milk bottles' />
            <img src='.././assets/image-gallery-orange.jpg' alt='orange' />
            <img src='.././assets/image-gallery-cone.jpg' alt='cone' />
            <img src='.././assets/image-gallery-sugarcubes.jpg' alt='sugarcubes' />
        </div>
    )
}

export default Gallery