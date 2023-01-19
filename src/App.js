import './App.css';
import { Routes,Route } from 'react-router-dom';
import Main from './component/Main';
import Header from './component/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        {/* <Route path='/view' element={}></Route>
        <Route path='/vide:id' element={}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
