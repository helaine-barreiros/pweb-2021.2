import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import { HomePage } from '../pages';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ HomePage } />
      </Routes>
    </BrowserRouter>
  );
}
