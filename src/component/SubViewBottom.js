import React from 'react'
import { useEffect } from 'react'
import { useRecoilValueLoadable } from 'recoil'
import {getDetailReviewApi} from '../recoil/selectors'

const SubViewBottom = () => {
  const detailReview = useRecoilValueLoadable(getDetailReviewApi)

  return (
    <div className='reviewArea'>
      <button className="reviewButton btnReview">REVIEWS ({detailReview.state === 'loading' ? "Loading..." : detailReview?.contents.reviewData.total_results })</button>
      <button className="reviewButton btnRelated">RELATED MOVIES (20)</button>
    </div>
  )
}
export default SubViewBottom