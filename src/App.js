import './App.css';
import { Routes,Route } from 'react-router-dom';
import Main from './page/Main';
import Header from './component/Header';
import Movies from './page/Movies';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/movies' element={<Movies/>}></Route>
        {/* <Route path='/vide:id' element={}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
