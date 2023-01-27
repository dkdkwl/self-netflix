import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const ListFilterMore = () => {
  return (
    <div className="filterBox">
        <button className="filterBox--title">
            <h4 className='filterBox__name'>Sort <strong>필터모어</strong></h4>
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <div className="filterBox--Content">
            <p className="sortResults"></p>
            <ul className='sortList'>
                <li className='sortList--Items'>popularity.asc</li>
                <li className='sortList--Items'>popularity.desc</li>
                <li className='sortList--Items'>release_date.asc</li>
                <li className='sortList--Items'>release_date.desc</li>
                <li className='sortList--Items'>revenue.asc</li>
                <li className='sortList--Items'>revenue.desc</li>
                <li className='sortList--Items'>primary_release_date.asc</li>
                <li className='sortList--Items'>primary_release_date.desc</li>
                <li className='sortList--Items'>original_title.asc</li>
                <li className='sortList--Items'>original_title.desc</li>
                <li className='sortList--Items'>vote_average.asc</li>
                <li className='sortList--Items'>vote_average.desc</li>
                <li className='sortList--Items'>vote_count.asc</li>
                <li className='sortList--Items'>vote_count.desc</li>
            </ul>
        </div>
    </div>
  )
}

export default ListFilterMore