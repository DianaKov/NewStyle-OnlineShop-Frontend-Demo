import React from 'react';
import NewHeader from '../../header/header';
import Slider from './slider/slider'
import Footer from '../../footer/footer';
import ProductCategory from './category/category';
import MailingList from './mailingList/mailingList';
import SaleCategory from './sale/sale'

 function App() {
  
    return(
        <>
        <NewHeader/>
        <Slider />
        <SaleCategory />
        <ProductCategory />
        <MailingList />
        <Footer />
        </>
    )
        
}

export default App;