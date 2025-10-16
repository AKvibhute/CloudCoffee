import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Cart from './pages/Cart';
import Loginsignup from './pages/Loginsignup';
import Contactus from './pages/Contactus';
import Product from './pages/Product';
import Orders from './pages/Orders';
import Shopcatagory from './pages/Shopcatagory';
import Payment from './pages/Payment';

function App() {
  return (
    <div style={{ backgroundColor: '#fcfbfa' }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Aboutus' element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/login' element={<Loginsignup />} />
          <Route path='/product' element={<Product />} >
            <Route path=':productID' element={<Product />} />
          </Route>
          <Route path="/shop/:id" element={<Shopcatagory />} />
          <Route path='/payment' element={<Payment />} /> {/* ✅ Moved here */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
