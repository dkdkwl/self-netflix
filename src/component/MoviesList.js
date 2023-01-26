import React from 'react'
import Pagination from 'react-js-pagination';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faFire } from '@fortawesome/free-solid-svg-icons'
import { pageState } from '../recoil/atom'
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';


const MoviesList = ({movies,genreList,moviesTotalPage,moviesTotalItems}) => {
    const [page,setPage] = useRecoilState(pageState);
    console.log("movies",movies)
    console.log(moviesTotalPage)
    console.log("moviesTotalItems",moviesTotalItems && moviesTotalItems)
    const handlePageChange = (page) => { setPage(page); };
    
    useEffect(()=>{

    },[page])

  return (
    <div className='listBoxWrap'>

        <div className='movieListArea'>
            {
                movies && movies.results.map((item,i)=>{
                    return(
                        <Link to={`/detail/${item.id}`} key={i} className='movieListArea--items'style={{backgroundImage : `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${item?.backdrop_path})`}}>
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
        <Pagination
        // 현제 보고있는 페이지 
        activePage={page}
        // 한페이지에 출력할 아이템수
        itemsCountPerPage={10}
        // 총 아이템수
        totalItemsCount={1000}
        // 표시할 페이지수
        pageRangeDisplayed={10}
        //클래스 이름
        itemClass="pagination--items"
        itemClassFirst="firstItem"
        itemClassLast="lastItem"

        // 함수
        onChange={handlePageChange}
        >
        </Pagination>
    </div>
  )
}

export default MoviesList