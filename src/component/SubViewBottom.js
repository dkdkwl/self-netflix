import React from 'react'
import { useRecoilValueLoadable } from 'recoil'
import {getDetailReviewApi,getMovieSimilarApi} from '../recoil/selectors'
import MainSlide from './MainSlide'

const SubViewBottom = () => {
  const detailReview = useRecoilValueLoadable(getDetailReviewApi);
  const detailSimilar = useRecoilValueLoadable(getMovieSimilarApi);
  console.log("detailSimilar genres",detailSimilar.contents.genreMovies?.genres);
  console.log("detailSimilar SimilarData",detailSimilar.contents.SimilarData?.results)
  return (
    <div className='viewBottom'>
      <div className='bottomBtnArea'>
        <button className="reviewButton btnReview">REVIEWS ({detailReview.state === 'loading' ? "Loading..." : detailReview?.contents.reviewData.total_results })</button>
        <button className="reviewButton btnRelated">RELATED MOVIES</button>
      </div>
      <div className="reviewArea">
        <ul className="reviewList">
        {
          detailReview.contents.reviewDataResults?.length === 0 ? <li className='review--items nodata'>리뷰 데이터가 없습니다</li> :
            detailReview.contents.reviewDataResults?.map((item,i)=>{
            return(
              <li key={i} className='review--items'>
                <p className="reviewitems__title">{item?.author}</p>
                <p className="reviewitems__txt">{item?.content}</p>
              </li>
            )
          })
        }
        </ul>
      </div>
      <div>
      {detailSimilar.state === 'loading' ? "Loading..." : <MainSlide genresType={detailSimilar.contents.genreMovies?.genres} movies={detailSimilar.contents.SimilarData?.results} ></MainSlide> }
      </div>
    </div>

  )
}
export default SubViewBottom