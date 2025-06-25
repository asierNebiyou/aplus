
import './globals.css';
import Script from 'next/script';
import { Providers } from "./providers";

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
        {/* <link
          href="/css/bootstrap.min.css"
          rel="stylesheet" defer
        /> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossOrigin="anonymous"/>

      </head>
      <body>
        <Providers>{children}</Providers>
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" async/>
        <Script src="/js/jquery.waypoints.min.js" strategy="beforeInteractive" async/>
        <Script src="/js/popper.min.js" strategy="afterInteractive" async/>
        {/* <Script src="/js/bootstrap.min.js" strategy="afterInteractive" /> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossOrigin="anonymous" defer></script>
        <Script src="/js/owl.carousel.min.js" strategy="afterInteractive" defer/>
        <Script src="/js/main.js" strategy="afterInteractive" defer />
        <Script src="/js/jquery.animateNumber.min.js" strategy="afterInteractive" defer/>
        <Script src="/js/jquery.fancybox.min.js" strategy="afterInteractive" defer/>
        <Script src="/js/aos.js" strategy="afterInteractive" async/>
        <Script src="/js/jquery.sticky.js" strategy="afterInteractive" async/>
      </body>
    </html>
  );
}