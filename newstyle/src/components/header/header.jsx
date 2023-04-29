import React, { useEffect, useState } from 'react';
import Header from './headerDesktop/header';
import HeaderMobile from './headerMobile/headerMobile';

export default function NewHeader() {
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
    return <Header />;
  } else if (isMobile) {
    return <HeaderMobile />;
  }

  return null; 
};