import React from 'react'
import logo from '../img/img_logo.png'
import '../style/header.css';
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='header'>
        <div className='headerInner w1400'>
            <Link to='/'><h1 className='logo' ><img src={logo} alt="" /></h1></Link>
            <div className="gnb">
                <Link className='d1' to='/'>Home</Link>
                <Link className='d1' to='/movies'>Movies</Link>
                <Link className='d1' to='/favorite'>My Favorite</Link>
            </div>
        </div>
    </div>
  )
}

export default Header