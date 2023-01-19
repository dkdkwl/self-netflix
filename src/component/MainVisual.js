import { useRecoilValueLoadable } from 'recoil';
import { mainVisualTop } from '../recoil/selectors';

const MainVisual = () => {
  const mainVisualData = useRecoilValueLoadable(mainVisualTop);
  const mainVisualOnePick = mainVisualData.contents.mainVisualPick;
  console.log("mainVisualData",mainVisualOnePick);
  return (
    <div className='mainVisual' style={{backgroundImage : `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${mainVisualOnePick?.backdrop_path})`}}>
        <div className='mainVisual--textBox w1400'>
            <h2 className='mainVisual__title'>{mainVisualOnePick?.title}</h2>
            <p className='mainVisual__txt'>{mainVisualOnePick?.overview}</p>
        </div>
    </div>
  )
}

export default MainVisual