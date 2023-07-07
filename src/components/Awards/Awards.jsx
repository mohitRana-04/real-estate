import React from "react"
import Heading from "../featured/Heading"
import { awards } from "./Data"
import "./Awards.css"

const Awards = () => {
  return (
    <>
      <div className='awards padding'>
        <div className='container-a'>
          <Heading title='Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services' subtitle='Our Awards' />

          <div className='content grid4 mtop'>
            {awards.map((val, index) => (
              <div className='box3' key={index}>
                <div className='icon'>
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Awards