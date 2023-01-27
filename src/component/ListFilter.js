import React from 'react'
import ListFilterSort from './ListFilterSort'
import ListFilterMore from './ListFilterMore'

const ListFilter = () => {
  return (
    <div className='listFilterWrap'>
        <ListFilterSort/>
        <ListFilterMore/>
    </div>
  )
}

export default ListFilter