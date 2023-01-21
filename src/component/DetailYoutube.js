import React, { useEffect } from 'react'
import { useRecoilValueLoadable } from 'recoil';
import {getYoutubeApi} from '../recoil/selectors'

const DetailYoutube = () => {
    let youtubeApi = useRecoilValueLoadable(getYoutubeApi);
    let getYoutubeData = youtubeApi.contents.youtubeData;
    console.log("getYoutubeData",getYoutubeData);

  return (
    <div>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${getYoutubeData?.results[0].key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    
  )
}

export default DetailYoutube