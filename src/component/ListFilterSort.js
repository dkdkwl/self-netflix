import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import {filterState} from '../recoil/atom'
import { useRecoilState, useRecoilValue } from 'recoil'

const ListFilter = () => {
    let [filterSort,setFilterSort] = useRecoilState(filterState);
    const sortClick = (sortValue)=>{
        console.log(sortValue)
        setFilterSort(() => ({
            sort: sortValue,
         }));
    }
  return (
    <div className="filterBox">
        <button className="filterBox--title">
            <h4 className='filterBox__name'>Sort <strong>{filterSort.sort}</strong></h4>
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <div className="filterBox--Content">
            <p className="sortResults"></p>
            <ul className='sortList'>
                <li className='sortList--Items' onClick={()=>{sortClick("popularity.asc")}}>popularity.asc</li>
                <li className='sortList--Items' onClick={()=>{sortClick("popularity.desc")}}>popularity.desc</li>
                <li className='sortList--Items' onClick={()=>{sortClick("release_date.asc")}}>release_date.asc</li>
                <li className='sortList--Items' onClick={()=>{sortClick("release_date.desc")}}>release_date.desc</li>
                <li className='sortList--Items' onClick={()=>{sortClick("revenue.asc")}}>revenue.asc</li>
                <li className='sortList--Items' onClick={()=>{sortClick("revenue.desc")}}>revenue.desc</li>
                <li className='sortList--Items' onClick={()=>{sortClick("primary_release_date.asc")}}>primary_release_date.asc</li>
                <li className='sortList--Items' onClick={()=>{sortClick("primary_release_date.desc")}}>primary_release_date.desc</li>
                <li className='sortList--Items' onClick={()=>{sortClick("original_title.asc")}}>original_title.asc</li>
                <li className='sortList--Items' onClick={()=>{sortClick("original_title.desc")}}>original_title.desc</li>
                <li className='sortList--Items' onClick={()=>{sortClick("vote_average.asc")}}>vote_average.asc</li>
                <li className='sortList--Items' onClick={()=>{sortClick("vote_average.desc")}}>vote_average.desc</li>
                <li className='sortList--Items' onClick={()=>{sortClick("vote_count.asc")}}>vote_count.asc</li>
                <li className='sortList--Items' onClick={()=>{sortClick("vote_count.desc")}}>vote_count.desc</li>
            </ul>
        </div>
    </div>
  )
}

export default ListFilter