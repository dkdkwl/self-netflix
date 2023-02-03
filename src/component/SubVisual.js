import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValueLoadable } from 'recoil';
import { moviesParms } from '../recoil/selectors';

const SubVisual = () => {
  const detailMovieContent = useRecoilValueLoadable(moviesParms);
  // console.log("detailMovieContent",detailMovieContent)
  return (
    <div className='subVisual' style={{backgroundImage : `url(https://images.hdqwalls.com/download/polygonal-abstract-red-dark-background-eo-1280x1024.jpg)`}}>
        <div className='subVisual--Inner'>
            <h1 className='subVisual__title'>NETFLIX</h1>
            <div className='subVisual--EtcBox'>
                <Link className='subVisual__EtcLink' to="/">HOME</Link>
                { detailMovieContent.state === 'loading' ? "Loading..." : <span className='subVisual__EtcTitle'>{detailMovieContent?.contents.subViewData.original_title}</span>}
            </div>
        </div>
    </div>
  )
}

export default SubVisual