import { useRecoilValueLoadable } from 'recoil';
import {getYoutubeApi} from '../recoil/selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import '../style/detail.css';
import { useEffect } from 'react';

const DetailYoutube = ({popUpState,setPopUpState}) => {
    let youtubeApi = useRecoilValueLoadable(getYoutubeApi);
    let getYoutubeData = youtubeApi.contents.youtubeData;
  return (
    <div className='popupArea'>
        <div className='popupInner'>
          <div className="popupContent">
            <div className="popupClose" onClick={()=>{
              setPopUpState(!popUpState)
            }}><FontAwesomeIcon icon={faXmark} /></div>
            <iframe src={`https://www.youtube.com/embed/${getYoutubeData?.results[0].key}`} title="YouTube video player"></iframe>
          </div>
        </div>
    </div>
  )
}

export default DetailYoutube