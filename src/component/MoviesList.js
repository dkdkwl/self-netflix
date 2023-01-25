import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faFire } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil';
import {pageState} from '../recoil/atom'
import { useEffect } from 'react';

const MoviesList = ({movies,genreList,moviesTotalPage}) => {
    console.log("movies",movies)
    console.log(moviesTotalPage)
    let [currentPage,setCurrentPage] = useRecoilState(pageState);
    const pageClick = (num)=>{
        setCurrentPage(num)
    }

    // useEffect(()=>{
    //     pagiNationRender();
    // },[])
    const pagiNationRender = ()=>{
        let totalPageNum = moviesTotalPage;
        let pageCount = 10;
        let pageGroup = Math.ceil(currentPage / pageCount) // 보여줄 페이지 그룹
        let lastNumber = pageGroup * pageCount // 5
        if (lastNumber > totalPageNum) {
          lastNumber = totalPageNum
        }
        let firstNumber = lastNumber - (pageCount - 1) // 1

        // 1~5만큼 페이지네이션 그려줌
        for (let i = firstNumber; i <= lastNumber; i++) {
            return(`<button class="pageNumber" id="page_${i}">${i}</button>`)
        }
        
    }

  return (
    <div className='listBoxWrap'>
        <div className="Pagination">
            <div className="square-fill pagination">
                <ul>
                    {pagiNationRender()}
                    <li>2</li>
                    <li>3</li>
                    <li>...</li>
                    <li>70</li>
                    <li>&gt;</li>
                </ul>
            </div>
        </div>     
        <div className='movieListArea'>
            {
                movies && movies.results.map((item,i)=>{
                    return(
                        <Link /*to={`/detail/${item.id}`}*/ key={i} className='movieListArea--items'style={{backgroundImage : `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${item?.backdrop_path})`}}>
                            <div className='movieList--InnerBox'>
                                <div className="movieItem--header">
                                    <div className='movieItem--InHeader'>
                                        <img className='movieItem__headerImg' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item?.poster_path}`} alt="" />
                                        <div className='movieItem--innerHeader'>
                                            <p className='movieItem__title'>{item.title}</p>
                                            <p className='movieItem__year'>{item.release_date}</p>
                                        </div>
                                    </div>
                                </div>
                                <ul className='movieItem--genreList'>
                                    {
                                        item.genre_ids.map((item,i)=>{
                                            return (
                                                <li key={i} className='movieItem__genreItems'>{genreList.find((genre) => genre.id === item).name}</li>
                                            )
                                        })
                                    }
                                </ul>
                                <p className='movieItem__txt'>{item.overview}</p>
                                <ul className='movieItem--EtcBox'>
                                    <li className='movieItem__EtcItem'><FontAwesomeIcon icon={faUser} /> {item.vote_average}</li> 
                                    <li className='movieItem__EtcItem'><FontAwesomeIcon icon={faFire} /> {item.popularity}</li>
                                    {/* {
                                    item.adult === false ? <li className='mainSlide__underTxt'>Under 18</li> : "" 
                                    } */}
                                </ul>
                            </div>
                        </Link>
                    )   
                })
            }
        </div>
   
    </div>
  )
}

export default MoviesList