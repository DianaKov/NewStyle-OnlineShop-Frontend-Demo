import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './components/main/app/app';
import CatalogPage from './components/main/catalogPage/catalogPage';
import AboutUs from './components/main/aboutUs/aboutUs';
import Contacts from './components/main/contacts/contacts';
import PaymentAndDelivery from './components/main/paymentAndDelivery/paymentAndDelivery'
import Stock from './components/main/stock/stock';
import RerutnConditions from './components/main/returnConditions/returnConditions';
import ProductPage from './components/main/productPage/productPage';
import CartPage from './components/shoppingCard/shoppingCard';
import PersonalAccount from './components/main/personalAccount/personalAccount';
import FavoritesPage from './components/main/favoritesPage/favoritesPage';
import PrivacyPolicyTerms from './components/main/app/mailingList/privacyPolicyTerms';

function Home() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/catalog" element={<CatalogPage />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/contact" element={<Contacts />} />
        <Route exact path="/payment" element={<PaymentAndDelivery />} />
        <Route exact path="/stock" element={<Stock />} />
        <Route exact path="/return-conditions" element={<RerutnConditions />} />
        <Route exact path="/catalog/:productName" element={<ProductPage />} />
        <Route exact path="/shoppingCart" element={<CartPage />} />
        <Route exact path="/personalAccount" element={<PersonalAccount />} />
        <Route exact path="/favorites" element={<FavoritesPage />} />
        <Route exact path="/contact/privacy-policy-terms" element={<PrivacyPolicyTerms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
