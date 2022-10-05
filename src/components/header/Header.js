import React from 'react'
import girlimg from "./girl-img.png";
import "./header.css"
const header = () => {
 
  return (
    <div className='container-fluid'>
      <div className='row highlight'>
          <div className='col-md-6 container-text'>
              <h5>SUMMER 2022</h5>
              <h1>NEW COLLECTION</h1>
              <h4>We know how large objects will act, 
              but things on a small scale.</h4>
              <div className='ctn'>
                <button><h3>SHOP NOW</h3></button>
              </div>
          </div>

          <div className='col-md-6'>
            <div className='hero-cover'>
               <img src={girlimg} alt="girlimage" className='hero-img'/>

            </div>
          </div>

      </div>
    
    </div>
  )
}

export default header
