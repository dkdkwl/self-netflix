import './App.css';
import { Routes,Route } from 'react-router-dom';
import Main from './page/Main';
import Header from './component/Header';
import Detail from './page/Detail';
import Movies from './page/Movies';
import Search from './page/Search';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/Movies' element={<Movies/>}></Route>
        <Route path='/Search' element={<Search/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
