import React from 'react'
import { useRecoilValueLoadable } from 'recoil';
import { getMoviesAPi } from '../recoil/selectors';
import MainSlide from './MainSlide';

const MovieSlide = () => {
    const movieData = useRecoilValueLoadable(getMoviesAPi);
    console.log("영화 api넘어옴?",movieData.contents)
  return (
    <div className='w1400'>
      <div className='mainMovieList'>
        <h4 className='mainMovieTitle'>Top Popular Movies</h4>
        { movieData.state === 'loading' ? "Loading..." : <MainSlide movies={movieData.contents.popularMovies} genresType={movieData.contents.genreMovies.genres}/> }
      </div>
      <div className='mainMovieList'>
        <h4 className='mainMovieTitle'>Top Rated Movies</h4>
        { movieData.state === 'loading' ? "Loading..." : <MainSlide movies={movieData.contents.topRatedMovies} genresType={movieData.contents.genreMovies.genres}/> }
      </div>
      <div className='mainMovieList'>
        <h4 className='mainMovieTitle'>Upcoming Movies</h4>
        { movieData.state === 'loading' ? "Loading..." : <MainSlide movies={movieData.contents.upComingMovies} genresType={movieData.contents.genreMovies.genres}/> }
      </div>
    </div>
  )
}

export default MovieSlide