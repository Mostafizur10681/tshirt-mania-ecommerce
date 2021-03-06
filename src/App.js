
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Review from './components/Review/Review';
import GrandPa from './components/GrandPa/GrandPa'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/grandpa' element={<GrandPa></GrandPa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
