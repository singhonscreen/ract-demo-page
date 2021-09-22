import React from 'react';
import { galeryData } from './galeryData';

const Gallery = () => {
    return (
        <div className="imageGallery">
            {
                galeryData.map((item)=>{
                    return(
                        <img className="imgWidth" src={item.image} alt="Image"  />
                    )
                })
            }
        </div>
    )
}

export default Gallery
