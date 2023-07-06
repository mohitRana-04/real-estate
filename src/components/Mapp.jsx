import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

const Mapp = () => {
  return (
    <div class="map">
        <div class="address_bx">
            <div class="location_bx">                
                <h4><FaMapMarkerAlt/>Uttarakhand</h4>
            </div>
            <i class="bi bi-fullscreen-exit"></i>
        </div>
        <iframe src="https://my.atlist.com/map/36a0bdf0-5325-44bb-923d-e6d489dd1a9f?share=true" allow="geolocation 'self' https://my.atlist.com" width="100%" height="400px" frameborder="0" scrolling="no" allowfullscreen></iframe>

       <span>For a complete view,  </span>
       
       <a href='https://my.atlist.com/map/36a0bdf0-5325-44bb-923d-e6d489dd1a9f?share=true' target='_blank'>
       <button className='but'>Click Here</button>
       </a>
    </div>
  )
}

export default Mapp