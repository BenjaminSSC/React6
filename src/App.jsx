import React from 'react';
import CartProvider from "./context/CartContext"
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './views/HomePage';
import RegisterPage from './views/RegisterPage';
import LoginPage from './views/LoginPage';
import CartPage from './views/CartPage';
import PizzaPage from './views/PizzaPage';
import ProfilePage from './views/ProfilePage';
import NotFound from './views/NotFound';

function App() {
  
  return (
    <div className="App">
      <CartProvider>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='/pizza/p001' element={<PizzaPage />}></Route>
          <Route path='/profile' element={<ProfilePage />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;