"use client";
import React, { useEffect, useState } from "react";
import { useZoomModal } from "@/context/ZoomModalContext";

const testimonials = [
  {
    name: "Gebregwergs Kidanu",
    role: "Parent",
    text: "I highly recommend A plus tutoring as a tutor for any child.\nThey are patient, knowledgeable, and able to explain concepts in a way that my children understands...",
  },
  {
    name: "Rahel Teklemariam",
    role: "Parent",
    text: "I really love this program.\nThe tutors have helped my daughter so well, and she is progressing at a very fast pace...",
  },
  {
    name: "Tsega Tesfaye",
    role: "Parent",
    text: "Affordable & High-Quality ! \nMy daughter has been tutoring with A+ for over a year now. We love that they care for kids and their education...",
  },
  {
    name: "Delina Woldu",
    role: "Family",
    text: "My sister’s teacher noticed progress within two months of tutoring.\nGreat variety of tutors, they’re patient and great with kids...",
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
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const { openZoomModal } = useZoomModal();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 300);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const { name, role, text } = testimonials[current];

  return (
    <div
      className="untree_co-section pt-0 bg-img overlay text-white"
      style={{
        backgroundImage: "url('/images/hero_1.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container d-flex justify-content-center">
        <div className="col-lg-8 d-flex flex-column align-items-center text-center">
          <div
            className={`transition-opacity transform duration-500 ${
              fade ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={{
              transition: "opacity 0.5s ease, transform 0.5s ease",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              padding: "40px",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              maxWidth: "700px",
            }}
          >
            {/* Quote SVG */}
            <svg
              fill="white"
              width="50"
              height="50"
              style={{ marginBottom: "20px" }}
              viewBox="0 -3.5 31 31"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m16.948 6.27c-.003-.072-.005-.157-.005-.242 0-1.708.736-3.245 1.909-4.309l.005-.004c1.203-1.066 2.794-1.718 4.538-1.718.075 0 .15.001.224.004h-.011c.114-.006.247-.01.381-.01 2.091 0 3.975.888 5.295 2.308l.004.004c1.287 1.526 2.069 3.514 2.069 5.685 0 .154-.004.307-.012.458l.001-.021c.004.135.006.293.006.452 0 2.24-.453 4.374-1.271 6.317l.04-.107c-.761 1.754-1.749 3.26-2.95 4.567l.011-.012c-1.023 1.108-2.201 2.052-3.504 2.803l-.072.038c-.905.528-1.97 1.04-3.076 1.467l-.156.053-3.134-5.29c1.344-.549 2.466-1.404 3.317-2.482l.013-.017c.841-1.001 1.407-2.259 1.565-3.641l.003-.032c-1.434-.038-2.708-.693-3.571-1.708l-.006-.007c-1.006-1.121-1.622-2.611-1.622-4.245 0-.109.003-.217.008-.325l-.001.015zm-16.948 0c-.003-.072-.005-.155-.005-.24 0-1.709.737-3.246 1.91-4.311l.005-.004c1.202-1.066 2.793-1.718 4.536-1.718.076 0 .151.001.226.004h-.011c.114-.006.248-.01.382-.01 2.091 0 3.975.888 5.294 2.308l.004.005c1.287 1.525 2.069 3.513 2.069 5.684 0 .154-.004.308-.012.46l.001-.021c.004.135.006.293.006.452 0 2.24-.453 4.374-1.271 6.317l.04-.107c-.761 1.754-1.748 3.26-2.949 4.567l.011-.012c-1.023 1.108-2.202 2.052-3.505 2.803l-.072.038c-.905.529-1.97 1.04-3.076 1.467l-.156.053-3.133-5.29c1.344-.549 2.465-1.405 3.317-2.484l.013-.017c.841-1.001 1.407-2.259 1.565-3.641l.003-.032c-1.434-.038-2.707-.693-3.569-1.708l-.006-.007c-1.008-1.121-1.625-2.612-1.625-4.248 0-.108.003-.215.008-.321l-.001.015z" />
            </svg>

            <p
              className="fst-italic text-white"
              style={{
                fontSize: "20px",
                lineHeight: 1.8,
                whiteSpace: "pre-line",
                marginBottom: "20px",
                
               
              }}
            >
              {text}
            </p>

            {/* Avatar + Details */}
            <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  color: "#222",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginRight: "10px",
                }}
              >
                {getInitials(name)}
              </div>
              <div className="text-start">
                <p className="mb-0 text-white" style={{ fontWeight: 600 }}>
                  {name}
                </p>
                <p className="mb-0 text-white-50" style={{ fontSize: "14px" }}>
                  {role}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-4">
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
                  marginTop: "30px",
                }}
              >
                Try a Free Session
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
