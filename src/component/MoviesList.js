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

        // 한 페이지당 보여줄 리스트 아이템의 개수
        itemsCountPerPage={1}

        // 총 아이템의 개수
        totalItemsCount={moviesTotalPage > 100 ? 100 : moviesTotalPage}

        // 내에서 보여줄 페이지의 범위
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