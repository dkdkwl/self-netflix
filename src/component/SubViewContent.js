import React, { useEffect } from 'react'
import SubViewInfo from './SubViewInfo'
import SubViewBottom from './SubViewBottom'
import {moviesParms} from '../recoil/selectors'
import { currentId } from '../recoil/atom';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { useParams } from 'react-router-dom';

const SubViewContent = () => {
  const {id} = useParams();
  const [renderView,setRenderView] = useRecoilState(currentId);
  useEffect(()=>{
    const obj = Object.values({id})
    setRenderView(obj)
  },[]);

  const detailContent = useRecoilValueLoadable(moviesParms);
  const detailData = detailContent.contents.subViewData;
  const detailGenreList = detailContent.contents.viewGenreData;

  return (
    <div className='w1400'>
        <SubViewInfo moviesContent = {detailData} genresList = {detailGenreList}></SubViewInfo>
        <SubViewBottom></SubViewBottom>
    </div>
  )
}

export default SubViewContent