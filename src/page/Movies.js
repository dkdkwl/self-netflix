import React from 'react'
import { useRecoilValueLoadable } from 'recoil';
import { getMovieListApi} from '../recoil/selectors';
import MoviesList from '../component/MoviesList';
import ListFilter from '../component/ListFilter';
import '../style/list.css'

const Movies = () => {
    const movieData = useRecoilValueLoadable(getMovieListApi).contents.movieListData;
    const listGenreList = useRecoilValueLoadable(getMovieListApi).contents.genreMovies?.genres;
    
  return (
    <div className='listContainer w1400'>
        <ListFilter genreList={listGenreList}/>
        <MoviesList movies={movieData} genreList={listGenreList} moviesTotalItems={movieData?.total_results} moviesTotalPage={movieData?.total_pages}></MoviesList>
    </div>
  )
}

export default Movies