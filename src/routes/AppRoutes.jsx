import React from 'react';

import { Routes, Route } from "react-router-dom";

import UserLayout from '../layouts/UserLayout';

import Home from '../pages/public/Home';
import Trends from '../pages/public/Trends';
import Collections from '../pages/public/Collections';
import ContactUs from '../pages/public/ContactUs';
import FindAStore from '../pages/public/FindAStore';
import PageNotFound from "../pages/errors/PageNotFound";

const App = () => {

  return (
      <Routes>
        {/* Rutas Públicas */}
        <Route path="/" element={<UserLayout><Home /></UserLayout>} />
        <Route path="/home" element={<UserLayout><Home /></UserLayout>} />
        <Route path="/trends" element={<UserLayout><Trends /></UserLayout>} />
        <Route path="/collections" element={<UserLayout><Collections /></UserLayout>} />
        <Route path="/contact-us" element={<UserLayout><ContactUs /></UserLayout>} />
        <Route path="/find-a-store" element={<UserLayout><FindAStore /></UserLayout>} />

        {/* Rutas de Errores */}
        <Route path="*" element={<PageNotFound />} />   
      </Routes>
  );
};

export default App;