
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import HomePage from './Component/HomePage';
import CartPage from './Component/CartPage';



function App() {
  return (
    <div className="App">
      <Navbar />
      
      
      <Routes>
      
         <Route path='/' element = {<HomePage />} />

       
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
 
    </div>
  );
}

export default App;
