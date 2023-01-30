import React from 'react'
import ListFilterSort from './ListFilterSort'
import ListFilterMore from './ListFilterMore'

const ListFilter = ({genreList}) => {
  return (
    <div className='listFilterWrap'>
        <ListFilterSort/>
        <ListFilterMore genreList={genreList}/>
    </div>
  )
}

export default ListFilter