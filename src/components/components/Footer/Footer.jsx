import React from 'react'
import './Footer.css'


const footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerwidth flexCenter f-container">
            {/left side/}
            <div className="flexcolStart f-left">
                <img src="./logo2.png" alt="" width={120} />
                <span className="secondaryText">Our vision is to make all people
the best place to live for them</span>
            </div>
        </div>
        {/right side/}
        <div className="flexcolStart f-right">
            <span className='primaryText'>information</span>
            <span span className='secondaryText'>145 New york, fl,4571, USA</span>
            <div className="flexCenter f-menu">
                <span>property</span>
                <span>services</span>
                <span>product</span>
                <span>about us</span>
            </div>
        </div>
    </section>
  )
}

export default footer