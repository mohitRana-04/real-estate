import React from "react"
import Heading from "../featured/Heading"
import { team } from "./Data"
import "./team.css"

const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container-xx'>
          <Heading title='Our Featured Agents' subtitle='Discover our handpicked selection of highly experienced and dedicated property agents ready to assist you in finding your dream home. Our featured agents are trusted experts in the real estate industry, equipped with extensive knowledge and a proven track record of successful transactions.' />

          <div className='contentt mtop grid3'>
            {team.map((val, index) => (
              <div className='box2' key={index}>
                <button className='btn3'>{val.list} Listings</button>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className='button flex'>
                    <button>
                      <i className='fa fa-envelope'></i>
                      Message
                    </button>
                    <button className='btn4'>
                      <i className='fa fa-phone-alt'></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team