//import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import  Home from'./pages/Home';
import Footer from './components/Footer';
import CategoryPage from './pages/CategoryPage';
import SubcategoryPage from './pages/SubcategoryPage';
import Cart from './pages/Cart';

function App() {
  

  return (
    <>
    <Header/>
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/subcategory/:id" element={<SubcategoryPage />} />
        <Route path="/cart" element={<Cart />} />
     </Routes>
     <Footer />
    </>
  );
}

export default App;
