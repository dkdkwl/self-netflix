import React from 'react'
import MainVisual from '../component/MainVisual'
import MainMovieList from '../component/MainMovieList';
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