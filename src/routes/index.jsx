import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from '../core/components';
import { HomePage, NotfoundPage } from '../pages';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="*" element={ <NotfoundPage /> } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
