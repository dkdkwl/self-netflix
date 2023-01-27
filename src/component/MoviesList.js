import React from 'react'
import Pagination from 'react-js-pagination';
import { pageState } from '../recoil/atom'
import { useRecoilState } from 'recoil';
import MovieListCard from './MovieListCard';
import { useEffect } from 'react';


const MoviesList = ({movies,genreList,moviesTotalPage,moviesTotalItems}) => {
    const [page,setPage] = useRecoilState(pageState);
    // console.log("page",page)
    // console.log("movies",movies)
    // console.log(moviesTotalPage)
    // console.log("moviesTotalItems",moviesTotalItems && moviesTotalItems)
    const handlePageChange = (page) => {
        setPage(page);
    };

    useEffect(()=>{
        if(!page){
            handlePageChange(1);
        }
    },[])
  return (
    <div className='listBoxWrap'>

        <div className='movieListArea'>
            <MovieListCard movies={movies} genreList={genreList}/>
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