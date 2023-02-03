import React from 'react'
import logo from '../img/img_logo.png'
import '../style/header.css';
import { Link, useNavigate } from 'react-router-dom'
import { searchQueryTxt } from '../recoil/atom'
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Mobile } from '../mediaQuery/mediaQuery';


const Header = () => {
  let [searchBarState,setSearchBarState] = useState(false);
  let [searchQuery,setSearchQuery] = useRecoilState(searchQueryTxt);
  let [searchInputTxt,setSearchInputTxt] = useState("");
  const navigate = useNavigate();
  const submit = (e)=>{
    e.preventDefault();
  }
   const onKeyUp = (e)=>{
      setSearchInputTxt(e.target.value)
      if(e.key === "Enter"){
        searchButton(searchInputTxt)
      }
    }

  const searchButton = ()=>{
    if(searchInputTxt === ""){
      alert("검색어를 입력해주세요");
      return false
    }else{
      navigate("/Search");
      setSearchQuery(document.querySelector('.searchInput').value)
    }
  }

  return (
    <div className='header'>
        <div className='headerInner w1400'>
            <Link to='/'><h1 className='logo' ><img src={logo} alt="" /></h1></Link>
            <div className="gnb">
                <Link className='d1' to='/'>Home</Link>
                <Link className='d1' to='/movies'>Movies</Link>
                <Link className='d1' to='/favorite'>My Favorite</Link>
            </div>
            <div className={searchBarState === true ? "searchBarArea active" : "searchBarArea"}>
            <Mobile>
              <button className='searchBarButton' onClick={()=>{setSearchBarState(!searchBarState)}}><FontAwesomeIcon icon={faBars} /></button>
            </Mobile>
              <form className='searchForm' onSubmit={submit} >
                <input className='searchInput' placeholder='검색어를 입력해주세요' type="text" onKeyUp={onKeyUp} />
                <button className='searchButton' onClick={searchButton}>검색</button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Header