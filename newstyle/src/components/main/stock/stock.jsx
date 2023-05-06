import React from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import NewHeader from '../../header/header';
import Footer from '../../footer/footer';

 function Stock() {

    const { pathname } = useLocation();
  
    return(
        <>
            <NewHeader/>
            <Breadcrumbs path={pathname} />
            <Footer />
        </>
    )
        
}

export default Stock;