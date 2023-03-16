import './App.css';
import React from 'react';
import  {BrowserRouter,Routes,Route } from 'react-router-dom';
import store from './store'
import { Provider } from 'react-redux'
import Homepage from './components/homepage/Homepage';
import Products from './components/products/Products';
import Shop from './components/shop/shop';



function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Homepage/>} />
    <Route exact path="/FormationP" element={<Products/>} />
    <Route exact path="/Product" element={<Shop/>} />
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App;

