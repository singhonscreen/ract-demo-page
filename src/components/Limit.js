import React from 'react';
import Slider from '@mui/material/Slider'

const Limit = () => {
    return (
        <>
             <div className="main">
                <div className="container1">
                <div className="hdsdcontain">
                <p className="paraquality">Limit results</p>
            <Slider className="slider" defaultValue={25} aria-label="Default" valueLabelDisplay="auto" />
            <div className="detailpara">
                <span className="span1">1</span>
                <span className="span2">25</span>
                <span className="span3">100</span>
            </div>
                </div>
            </div>
           
            </div>
        </>
    )
}

export default Limit
