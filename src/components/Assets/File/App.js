import React from 'react'
import '../Styles/App.css';
import About from './About.js'
import Awesome3 from './Awesome3.js'
import Landing from './Landing.js'
import Navbar from './Navbar.js'
import WeHandle from './WeHandle';

const App = () => {
  return (
    <div className='AppLayout'>
      {/* <Navbar/> */}
     <Landing/>
        <About/>
      <Awesome3/>
      <WeHandle/>

    </div>
  )
}

export default App