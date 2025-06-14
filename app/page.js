"use client";
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Offer from '../components/Offer';
import About from '../components/About';
import News from '../components/News';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      {/* <TopBar /> */}
      <Navbar />
      <Hero />
      <Offer /> 
      <Testimonials />
      <Services /> 
      <About />
      {/*
     
      <CallToAction />
     
      <News />
      <Pricing /> */}
      <Footer />
     
    </>
  );
}