import Link from 'next/link';

export default function Navbar() {
  return (
        <nav className="site-nav mb-5">
         
          <div id="sticky-wrapper" className="sticky-wrapper" style={{height: '42.3984px'}}><div className="sticky-nav js-sticky-header" >
            <div className="container position-relative">
              <div className="site-navigation text-center">
                <a href="index.html" className="logo menu-absolute m-0">Aplus Tutoring<span className="text-primary">.</span></a>

                <a href="book-a-table.html" className="btn-book btn btn-primary btn-sm menu-absolute" style={{padding: '10px 15px',
  borderRadius: '30px',
  fontSize: '11px',
  textTransform: 'uppercase',
  fontWeight: 700,
  letterSpacing: '0.05rem',}} >Free assessment </a>

              

              </div>
            </div>
          </div></div>
        </nav>
  );
}