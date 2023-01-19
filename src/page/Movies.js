import React, { useEffect } from 'react'
import SubVisual from '../component/SubVisual';
import SubViewContent from '../component/SubViewContent';
import {moviesParms} from '../recoil/selectors'
import { currentId } from '../recoil/atom';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { useParams } from 'react-router-dom';

const Movies = () => {
  const {id} = useParams();
  const [renderView,setRenderView] = useRecoilState(currentId)
  useEffect(()=>{
    const obj = Object.values(id)
    setRenderView(obj)
  },[]);
  const testItem = useRecoilValueLoadable(moviesParms);
  return (
    <section className='viewDetail'>
        <SubVisual/>
        <SubViewContent/>
    </section>
  )
}

export default Movies