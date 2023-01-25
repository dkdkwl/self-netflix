import React from 'react'
import { useRecoilValueLoadable } from 'recoil';
import { getMovieListApi} from '../recoil/selectors';
import MoviesList from '../component/MoviesList';
import '../style/list.css'

const Movies = () => {
    const movieData = useRecoilValueLoadable(getMovieListApi).contents.movieListData;
    const listGenreList = useRecoilValueLoadable(getMovieListApi).contents.genreMovies?.genres;
    console.log("listGenreList",listGenreList);    
    
  return (
    <div className='listContainer w1400'>
        <div className='listFilterArea'></div>
        <MoviesList movies={movieData} genreList={listGenreList} moviesTotalPage={movieData?.total_pages}></MoviesList>
    </div>
  )
}

export default Movies