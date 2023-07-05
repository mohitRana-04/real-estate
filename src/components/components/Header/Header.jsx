import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const[menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened)=>{
    if(document.documentElement.clientWidth<=800)
    {
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <img src="./logo.png" alt="logo" width={100} />

<OutsideClickHandler onOutsideClick={()=> {
  setMenuOpened(false)
}}>
            <div className=" flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                <a href="">Residencies</a>
                <a href="">Our Value</a>
                <a href="">Explore</a>
                <a href="">Contact Us</a>
                <button className='button'>
                <a href="">Contact</a>
                </button>
                
            </div>
            </OutsideClickHandler>

      
        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>icon here</div>
        </div>
    </section>
  )
}

export default Header