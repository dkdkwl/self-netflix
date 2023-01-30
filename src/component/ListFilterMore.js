import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';
import { filterState } from '../recoil/atom';
import { useRecoilState } from 'recoil';

const ListFilterMore = ({genreList}) => {
  console.log(genreList)
  let [filterOption,setFilterOption] = useRecoilState(filterState);
  console.log(filterOption)

  const yearChange = (value)=>{
    console.log("체인지 성공")
    console.log("value",value)
    setFilterOption((value) => ({
      year: [1900,2000],
     }));
  }

  const setScore = (value)=>{
  setFilterOption((value) => ({
    year: value,
   }));
  }


  return (
    <div className="filterBox">
        <button className="filterBox--title">
            <h4 className='filterBox__name'>Sort <strong>필터모어</strong></h4>
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <div className="filterBox--Content">
          <div className="rageArea">
            <p className='rageTitle'>YEAR <b>Filter</b></p>
            <p className='rageFrom'>From: <strong>{filterOption.year[0]}</strong> - To: <strong>{filterOption.year[1]}</strong></p>
            <div className='rageSlideArea'>
              <Slider
                range
                className = "rageSlide"
                min={1940}
                max={2023}
                count={1}
                defaultValue = {filterOption.year}
                allowCross = {false}
                onChange={(value)=>{ yearChange(value) }}
              />
            </div>
          </div>
          <div className="rageArea">
            <p className='rageTitle'>IBM <b>Score Filter</b></p>
            <p className='rageFrom'>From: <strong>{filterOption.score[0]}</strong> - To: <strong>{filterOption.score[1]}</strong></p>
            <div className='rageSlideArea'>
              {/* <Slider
                range
                className = "rageSlide"
                min={0}
                max={8}
                count={1}
                defaultValue = {filterOption.score}
                allowCross = {false}
                onChange={(value)=>{ setScore(value) }}
              /> */}
            </div>
          </div>
          <div className="genresBox">
            <p className='rageTitle'>Genres <b>Filter</b></p>
            <ul className='genreList'>
            {
              genreList && genreList.map((item,i)=>{
                return(
                  <li key={i} className='genreList--items'><button>{item.name}</button></li>
                )
              })
            }
            </ul>
          </div>
        </div>
    </div>
  )
}

export default ListFilterMore