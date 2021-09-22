import React from 'react';
import Limit from './Limit'

const Quality = () => {
    return (
        <>
            <div className="main">
                <div className="container1">
                <div className="hdsdcontain">
                <p className="paraquality">Quality of results</p>
                    <button className="btn1">HD</button>
                    <button className="btn2">SD</button>
                </div>
            </div>
            <Limit />
            </div>
        </>
    )
}

export default Quality
