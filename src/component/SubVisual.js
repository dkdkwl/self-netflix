import React from 'react'
import { Link } from 'react-router-dom'

const SubVisual = () => {
  return (
    <div className='subVisual' style={{backgroundImage : `url(https://images.hdqwalls.com/download/polygonal-abstract-red-dark-background-eo-1280x1024.jpg)`}}>
        <div className='subVisual--Inner'>
            <h1 className='subVisual__title'>NETFLIX</h1>
            <div className='subVisual--EtcBox'>
                <Link className='subVisual__EtcLink' to="/">HOME</Link>
                <span className='subVisual__EtcTitle'>HIGH HEAT</span>
            </div>
        </div>
    </div>
  )
}

export default SubVisual