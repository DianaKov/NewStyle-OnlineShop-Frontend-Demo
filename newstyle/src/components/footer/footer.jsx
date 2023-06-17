import React, { useEffect, useState } from 'react';
import FooterDesctop from './footerDesctop';
import FooterMobile from './footerMobile';

import './footer.css'

export default function Footer() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992);
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isDesktop) {
    return <FooterDesctop/>;
  } else if (isMobile) {
    return <FooterMobile />;
  }

  return null; 
};