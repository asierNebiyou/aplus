"use client";
'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  "This product changed my life!",
  "Absolutely fantastic service.",
  "Highly recommended for professionals.",
  "Customer support is top-notch.",
];

export default function Testimonials() {

   const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="untree_co-section pt-0 bg-img overlay"
      style={{ backgroundImage: "url('/images/hero_1.avif')" }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-lg-7">
               <Slider {...settings}>
                    {testimonials.map((text, index) => (
                      <div key={index} className="slide">
                        <p style={{marginBottom:"5px",fontStyle: "italic"}}>“{text}”</p>
                        <p className="text-white " style={{ fontSize: "14px", fontWeight: 500 }}>
                          <strong>— Happy Customer</strong>
                        </p>
                      </div>
                    ))}
                  </Slider>
            
            <p>
              <a
                href="#"
                className="btn btn-primary aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{
                  padding: "15px 30px",
                  borderRadius: "30px",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  letterSpacing: "0.05rem",
                }}
              >
             TRY A FREE SESSION
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
