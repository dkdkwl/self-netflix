import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faFire } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const MainSlide = ({movies,genresType}) => {
    let url = `https://image.tmdb.org/t/p/w1280`;
    let popularList = movies;
    let genresList = genresType;
    // console.log("popularList",popularList)

  return (
    <Swiper className='mainSlideArea'
        modules={[Navigation, Scrollbar, A11y]}
        slidesPerView={4}
        navigation
        scrollbar={{ draggable: true }}>
        {popularList.map((item,i) => {
            return (
                <SwiperSlide style={ item?.backdrop_path ? {backgroundImage : `url(`+url + item.backdrop_path+`)`} : null } key={i}>
                    <div className='mainSlideInner'>
                        <Link to={'/detail/' + item.id }>
                            <div className='mainSLideView'>
                                <strong className='mainSlide__title'>{item.title}</strong>
                                <div className='mainSlide--genresBox'>
                                    {item.genre_ids.map((id,i)=>{
                                        return <div className='mainSlide__genres' key={i}>{genresList.find((item) => item.id === id).name}</div>
                                    })}
                                </div>
                                <ul className='mainSlide--EtcBox'>
                                   <li className='mainSlide__EtcItem'><FontAwesomeIcon icon={faUser} /> {item.vote_average}</li> 
                                   <li className='mainSlide__EtcItem'><FontAwesomeIcon icon={faFire} /> {item.popularity}</li>
                                   {
                                    item.adult === false ? <li className='mainSlide__underTxt'>Under 18</li> : "" 
                                    }
                                </ul>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
            )
        })}
    </Swiper>
  )
}

export default MainSlide