"use client";

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust this value based on when you want the sticky effect to trigger
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`site-nav mb-5 ${isSticky ? 'sticky-active' : ''}`}>
      <div className="container position-relative">
        <div className="site-navigation text-center">
          <a  href="index.html" className={`menu-absolute m-0 ${isSticky ? 'logo-blue' : 'logo'}`}>
            Aplus Tutoring<span className="text-primary">.</span>
          </a>

          <a 
            href="#" 
            className="btn-book btn btn-primary btn-sm menu-absolute"
            style={{
              padding: '10px 15px',
              borderRadius: '30px',
              fontSize: '11px',
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '0.05rem',
            }}
          >
            Free assessment
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;