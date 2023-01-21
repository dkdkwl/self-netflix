import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faFire,faFilm } from '@fortawesome/free-solid-svg-icons'

const SubViewInfo = ({moviesContent,genresList}) => {
    console.log("넘어온 moviesContent",moviesContent)
    console.log("넘어온 genresList",genresList?.genres)
  return (
    <div className='viewContent'>
        <div className="contentImgBox">
            <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${moviesContent?.poster_path}`} alt="" />
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
                    {/* {
                        genresList? <div>{genresList.genres[1].name }123123</div> : ""
                    } */}
                    {moviesContent?.genres.map((item,i)=>{
                        return <div className='content--GenresItems' key={i}>{
                            genresList.genres.find((movieGenres) => movieGenres.id == item.id).name
                        }</div>
                    })}
                </ul>
            </div>
            <div className='contentInnerBox'>
                <p className='content__overViewTxt'>{moviesContent?.overview}</p>
            </div>
            <div className="contentInnerBox">
                <ul className='contentInfoList'>
                    {moviesContent?.budget === 0 ? "" : <li className='contentInfo__item'><b>Budget</b><span>${moviesContent?.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></li>}
                    {moviesContent?.revenue === 0 ? "" : <li className='contentInfo__item'><b>Revenue</b><span>${moviesContent?.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></li>}
                    <li className='contentInfo__item'><b>Release Day</b><span>{moviesContent?.release_date}</span></li>
                    <li className='contentInfo__item'><b>Time</b><span>{moviesContent?.runtime}</span></li>
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