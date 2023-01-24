import React from 'react'
import { useRecoilValueLoadable } from 'recoil';
import { getMovieListApi } from '../recoil/selectors';
import '../style/list.css'


const Movies = () => {
    const movieData = useRecoilValueLoadable(getMovieListApi).contents.movieListData;
    console.log(movieData)
  return (
    <div className='listContainer'>
        <div className='listFilterArea'></div>
        <div className='listBoxWrap'>
            <ul className='movieListArea'>
                <li className='movieListArea--items'>
                    <div className="movieItem--header">
                        <div className='movieItem--Inherader'>
                            <img className='movieItem__headerImg' src={`https://image.tmdb.org/t/p/original///kuf6dutpsT0vSVehic3EZIqkOBt.jpg`} alt="" />
                            <div className='movieItem--innerHeader'>
                                <p className='movieItem__title'>Puss in Boots: The Last Wish</p>
                                <p className='movieItem__year'>2022</p>
                            </div>
                        </div>
                        <ul className='movieItem--genreList'>
                            <li className='movieItem__genreItems'>애니메이션</li>
                            <li className='movieItem__genreItems'>애니메이션</li>
                            <li className='movieItem__genreItems'>애니메이션</li>
                            <li className='movieItem__genreItems'>애니메이션</li>
                            <li className='movieItem__genreItems'>애니메이션</li>
                        </ul>
                        <p className='movieItem__txt'>Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find ...</p>
                        <ul className='movieItem--EtcBox'>
                            <li>8.6</li>
                            <li>8118.687</li>
                            <li>Under18</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Movies