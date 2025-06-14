""
import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'A Plus Tutoring - Best Online Tutoring service.',
  description: 'A free Bootstrap learning center template by Colorlib',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900|Rubik:300,400,500,700,900"
          rel="stylesheet"
        />
        <link
          href="/css/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link
          href="/css/owl.theme.default.min.css"
          rel="stylesheet"
        />
        <link
          href="/css/animate.min.css"
          rel="stylesheet"
        />
        <link
          href="/css/style.css"
          rel="stylesheet"
        />
        <link
          href="/css/bootstrap.min.css"
          rel="stylesheet" defer
        />
      </head>
      <body>
        {children}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.waypoints.min.js" strategy="beforeInteractive" />
        <Script src="/js/popper.min.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
        <Script src="/js/jquery.animateNumber.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.fancybox.min.js" strategy="afterInteractive" />
        <Script src="/js/aos.js" strategy="afterInteractive" />
        <Script src="/js/jquery.sticky.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}