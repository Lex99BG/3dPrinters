import { Routes , Route, Navigate } from 'react-router-dom';

import HomeScreen from '../pages/HomeScreen';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import ProductDetails from '../pages/ProductDetails';
import Shop from '../pages/Shop';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home'/>}/>
      <Route path='home' element={<HomeScreen/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='shop/:id' element={<ProductDetails/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='checkout' element={<Checkout/>}/>
    </Routes>
  ) 
}

export default Routers