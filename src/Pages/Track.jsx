import React from 'react'
import './css/track.css'
import ProgressBar from '../components/ProgressBar/ProgressBar'

const Track = () => {
  return (
    <div className='trackBody'>
      <h2 className="pageName">Track</h2>
      <ProgressBar/>
    </div>
  )
}

export default Track