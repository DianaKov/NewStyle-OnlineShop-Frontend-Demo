import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './components/main/app/app';
import CatalogPage from './components/main/catalogPage/catalogPage';
import AboutUs from './components/main/aboutUs/aboutUs';
import Contacts from './components/main/contacts/contacts';
import Newroducts from './components/main/new/new';
import PaymentAndDelivery from './components/main/paymentAndDelivery/paymentAndDelivery'
import Stock from './components/main/stock/stock';
import RerutnConditions from './components/main/returnConditions/returnConditions';

function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/catalog" element={<CatalogPage />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/contact" element={<Contacts />} />
        <Route exact path="/new" element={<Newroducts />} />
        <Route exact path="/payment" element={<PaymentAndDelivery />} />
        <Route exact path="/stock" element={<Stock />} />
        <Route exact path="/return-conditions" element={<RerutnConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
