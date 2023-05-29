import React from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import NewHeader from '../../header/header';
import Footer from '../../footer/footer';
import MailingList from '../app/mailingList/mailingList'

 function Contacts() {
  
    const { pathname } = useLocation();

    return(
        <>
            <NewHeader/>
            <Breadcrumbs path={pathname} />
            <div className='card-container'>
                <h5>СВЯЗАТЬСЯ С НАМИ</h5>
                <div className='card-group__left'>
                    <p>
                        Телефон: +380123456789<br />
                        Viber или Whats App
                    </p>
                    <p>
                    Электронная почта - office@newstyle.com.ua<br />
                    Instagram - instagram.com/newstyle.official
                    </p>
                </div>
            </div>
            <MailingList />
            <Footer />
        </>
    )
        
}

export default Contacts;