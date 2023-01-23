import React from 'react'
import { useRecoilValueLoadable } from 'recoil'
import {getDetailReviewApi} from '../recoil/selectors'

const SubViewBottom = () => {
  const detailReview = useRecoilValueLoadable(getDetailReviewApi)
  return (
    <div className='viewBottom'>
      <div className='bottomBtnArea'>
        <button className="reviewButton btnReview">REVIEWS ({detailReview.state === 'loading' ? "Loading..." : detailReview?.contents.reviewData.total_results })</button>
        <button className="reviewButton btnRelated">RELATED MOVIES (20)</button>
      </div>

      <div className="reviewArea">
        <ul className="reviewList">
        {
          detailReview.contents.reviewDataResults?.length === 0 ? <li className='review--items nodata'>리뷰 데이터가 없습니다</li> :
            detailReview.contents.reviewDataResults?.map((item,i)=>{
            return(
              <li key={i} className='review--items'>
                <p className="reviewitems__title">{item.author}</p>
                <p className="reviewitems__txt">{item.content}</p>
              </li>
            )
          })
        
        }

        </ul>
      </div>
    </div>

  )
}
export default SubViewBottom