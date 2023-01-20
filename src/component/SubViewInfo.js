import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faFire,faFilm } from '@fortawesome/free-solid-svg-icons'


const SubViewInfo = ({moviesContent,genresList}) => {
  return (
    <div className='viewContent'>
        <div className="contentImgBox">
            <img src={`https://image.tmdb.org/t/p/original/${moviesContent?.backdrop_path}`} alt="" />
        </div>
        <div className="contentTextBox">
            <div className='contentInnerBox'>
                <h2 className='contentText__Title'>{moviesContent?.title}</h2>
                <div className="contentText__Txt">{moviesContent?.tagline}</div>
                <ul className='content--EtcBox'>
                    <li className='content__EtcItem'><FontAwesomeIcon icon={faUser} /> {moviesContent?.vote_average}</li>
                    <li className='content__EtcItem'><FontAwesomeIcon icon={faFire} /> {moviesContent?.popularity}</li>
                    {
                        moviesContent?.adult === false ? "" : <li className='content__underTxt'>Under 18</li>
                    }
                </ul>
                <ul className='content--GenresList'>
                    {moviesContent?.genres.map((id,i)=>{
                        return <div className='content--GenresItems' key={i}>{
                            genresList?.find((moviesContent) => moviesContent.id === id).name
                        }</div>
                    })}
                    <li className='content--GenresItems'>Animation</li>
                    <li className='content--GenresItems'>Action</li>
                    <li className='content--GenresItems'>Adventure</li>
                    <li className='content--GenresItems'>Comedy</li>
                    <li className='content--GenresItems'>Family</li>
                </ul>
            </div>
            <div className='contentInnerBox'>
                <p className='content__overViewTxt'>Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.</p>
            </div>
            <div className="contentInnerBox">
                <ul className='contentInfoList'>
                    <li className='contentInfo__item'><b>Budget</b><span>$90000000</span></li>
                    <li className='contentInfo__item'><b>Revenue</b><span>$254905780</span></li>
                    <li className='contentInfo__item'><b>Release Day</b><span>2022-12-07</span></li>
                    <li className='contentInfo__item'><b>Time</b><span>103</span></li>
                </ul>
            </div>
            <div className="contentInnerBox">
                <p className='content__watchMovie'><FontAwesomeIcon icon={faFilm} />Watch Trailer</p>
            </div>
        </div>
    </div>
  )
}

export default SubViewInfo