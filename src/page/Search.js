import React from 'react'
import '../style/list.css'
import '../style/search.css'
import { getMovieSearchListApi } from '../recoil/selectors'
import { useRecoilValueLoadable } from 'recoil'
import MoviesList from '../component/MoviesList'

const Search = () => {
    const movieSearchList = useRecoilValueLoadable(getMovieSearchListApi)
    let movieData = movieSearchList.contents.getMovieData;
    let listGenreList = movieSearchList.contents.genreMovies?.genres;
  return (
    <div className='listContainer w1400'>
        <MoviesList movies={movieData} genreList={listGenreList} moviesTotalPage={movieData?.total_pages} moviesTotalItems={movieData?.total_results}></MoviesList>
    </div>
  )
}

export default Search