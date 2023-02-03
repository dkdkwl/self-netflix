import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { filterYearState,filterScoreState,filterIdState,pageState } from '../recoil/atom';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { useEffect } from 'react';

const ListFilterMore = ({genreList}) => {
  const [sortOpen,setSortOpen] = useState(false);
  let [filterYear,setFilterYear] = useRecoilState(filterYearState);
  let [filterScore,setFilterScore] = useRecoilState(filterScoreState);
  let [filterId,setFilterId] = useRecoilState(filterIdState);
  let [pageNumber,setPageNumber] = useRecoilState(pageState);
  
  useEffect(()=>{
    setPageNumber(1);
  },[filterYear,filterScore,filterId])

  return (
    <div className={`filterBox ${sortOpen === true ? "open" : ""}`}>
        <button className='filterBox--title'  onClick={()=>{setSortOpen(!sortOpen);}}>
            <h4 className='filterBox__name'><strong>Filter</strong></h4>
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <div className="filterBox--Content">
          <div className="rageArea">
            <p className='rageTitle'>YEAR <b>Filter</b></p>
            <p className='rageFrom'>From: <strong>{filterYear[0]}</strong> - To: <strong>{filterYear[1]}</strong></p>
            <div className='rageSlideArea'>
              <Slider
                range
                className = "rageSlide"
                min={1940}
                max={2023}
                count={1}
                defaultValue = {filterYear}
                allowCross = {false}
                onAfterChange={(value)=>{ setFilterYear(value);console.log(filterYear) }}
              />
            </div>
          </div>
          <div className="rageArea">
            <p className='rageTitle'>IBM <b>Score Filter</b></p>
            <p className='rageFrom'>From: <strong>{filterScore[0]}</strong> - To: <strong>{filterScore[1]}</strong></p>
            <div className='rageSlideArea'>
              { <Slider
                range
                className = "rageSlide"
                min={0}
                max={10}
                count={1}
                defaultValue = {filterScore}
                allowCross = {false}
                onAfterChange={(value)=>{ setFilterScore(value) }}
              /> }
            </div>
          </div>
          <div className="genresBox">
            <p className='rageTitle'>Genres <b>Filter</b></p>
            <ul className='genreList'>
            {
              genreList && genreList.map((item,i)=>{
                return(
                  <li key={i} className='genreList--items' onClick={()=>{setFilterId(item.id);console.log(filterId)}}><button>{item.name}</button></li>
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