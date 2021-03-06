import React, { useState } from 'react';
import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.PNG'
import pic3 from '../../assets/pic3.PNG'
import './style.css'


function Portfolio() {
  // const [isShown, setIsShown] = useState(false)

  return (
    <div>
      <div onClick={() => window.open('https://mighty-depths-48025.herokuapp.com/')}>
        <h2 >Alewery</h2>
        <img className='Image' src={pic1} alt='Alewery' />
        <div className='Hover1'>
          <h3>Description: </h3>
          <p>  A site that contains all beers from your local breweries! To all breweries have your beers accessible to all!</p>
        </div>


      </div>
      <div onClick={() => window.open('https://mnevarez01.github.io/tmtg/')} >
        <h2 >COVID Quarantainment</h2>
        <img className='Image' src={pic2} alt='Covid' />
        <div className='Hover2'>
          <h3>Description: </h3>
          <p> While facing hard times building a website that is interactive and distracting to the mind.</p>
        </div>
      </div>
      <div onClick={() => window.open('https://mnevarez01.github.io/APIWeatherInterface/')}>
        <h2 >Api Weather Interface</h2>
        <img className='Image' src={pic3} alt='Weather' />
        <div className='Hover3'>
          <h3>Description: </h3>
          <p>Using the weather API you are able to look for weather for any city and have your searches saved.</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;