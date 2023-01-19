import React from 'react'
import MainVisual from './MainVisual'
import MainMovieList from './MainMovieList';
import '../style/main.css';

const Main = () => {
  return (
    <>
        <MainVisual></MainVisual>
        <MainMovieList></MainMovieList>
    </>
  )
}

export default Main