"use client";
import React from "react";
import { useZoomModal } from "@/context/ZoomModalContext";

const testimonials = [
  {
    name: "Gebregwergs Kidanu",
    role: "Parent",
    text: "I highly recommend A plus tutoring as a tutor for any child.They are patient, knowledgeable, and able to explain concepts in a way that my children understands...",
    rating: 5,
  },
  {
    name: "Rahel Teklemariam",
    role: "Parent",
    text: "I really love this program. The tutors have helped my daughter so well, and she is progressing at a very fast pace...",
    rating: 5,
  },
  {
    name: "Tsega Tesfaye",
    role: "Parent",
    text: "Affordable & High-Quality! My daughter has been tutoring with A+ for over a year now. We love that they care for kids and their education...",
    rating: 4,
  },
  {
    name: "Delina Woldu",
    role: "Family",
    text: "My sister’s teacher noticed progress within two months of tutoring.Great variety of tutors, they’re patient and great with kids...",
    rating: 5,
  },
];

function getInitials(name) {
  const words = name.trim().split(" ");
  return words
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("");
}

export default function Testimonials() {
  const { openZoomModal } = useZoomModal();

  return (
    <div
      className="text-white"
      style={{
        backgroundImage: "url('/images/hero_1.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "60px 0",
      }}
    >
      <div className="container">

        {/* Mobile Swipeable View */}
      {/* Mobile Grid View (2 per row, truncated text) */}
<div className="d-md-none row  px-2">
  {testimonials.map(({ name, role, text, rating }, index) => (
    <div key={index} className="col-6  d-flex" style={{ margin: "0px" ,padding: "10px 10px"}}>
      <div
        style={{
          background: "linear-gradient(145deg, rgba(0, 123, 255, 0.3), rgba(255, 255, 255, 0.1))",
          borderRadius: "20px",
          padding: "18px",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
  
        }}
      >
        <p
          className="text-white"
          style={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            fontSize: "14px",
          }}
        >
          {text}
        </p>

        <p className="mb-1 mt-2" style={{ fontSize: "13px" }}>
          {"⭐".repeat(rating)}{" "}
          <span className="text-white-50">({rating}/5)</span>
        </p>

        <div className="d-flex align-items-center mt-2">
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              color: "#222",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "12px",
              margin: "5px"
            }}
          >
            {getInitials(name)}
          </div>
          <div>
            <p className="mb-0 text-white " style={{ fontSize: "10px", fontWeight: 600, }}>
              {name}
            </p>
            <p className="mb-0 text-white-50" style={{ fontSize: "8px" }}>
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
{/* Desktop Grid View */}
<div className="row d-none d-md-flex g-4">
  {testimonials.map(({ name, role, text, rating }, index) => (
    <div key={index} className="col-md-6 col-lg-4 d-flex">
      <div
        style={{
          background: "linear-gradient(145deg, rgba(0, 123, 255, 0.25), rgba(255, 255, 255, 0.05))",
          borderRadius: "20px",
          padding: "30px",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
        }}
      >
        {/* Text */}
        <p
          className="text-white"
          style={{
            whiteSpace: "pre-line",
            lineHeight: 1.6,
            fontSize: "15px",
            marginBottom: "1.2rem",
            fontWeight: 400,
          }}
        >
          {text}
        </p>

        {/* Stars */}
        <p className="mb-1" style={{ fontSize: "15px", color: "#ffd700" }}>
          {"⭐".repeat(rating)}
          <span className="text-white-50 ms-2" style={{ fontSize: "13px" }}>
            ({rating}/5)
          </span>
        </p>

        {/* Avatar + Info */}
        <div className="d-flex align-items-center gap-3 mt-3">
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              color: "#003366",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: 700,
              fontSize: "16px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              flexShrink: 0,
            }}
          >
            {getInitials(name)}
          </div>
          <div>
            <p className="mb-0 text-white" style={{ fontWeight: 600, fontSize: "15px" }}>
              {name}
            </p>
            <p className="mb-0 text-white-50" style={{ fontSize: "13px" }}>
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


        {/* CTA */}
        <div className="d-flex justify-content-center mt-5">
          <a
            onClick={openZoomModal}
            className="btn btn-primary"
            style={{
              padding: "14px 28px",
              borderRadius: "30px",
              fontSize: "12px",
              textTransform: "uppercase",
              fontWeight: 700,
              letterSpacing: "0.05rem",
              cursor: "pointer",
            }}
          >
            Try a Free Session
          </a>
        </div>
      </div>
    </div>
  );
}
