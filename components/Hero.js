"use client";
import { Modal, ModalBody } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

const YouTube = dynamic(() => import("react-youtube"), { ssr: false });

export default function Hero() {
const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const getYouTubeHeight = () => {
    const width = typeof window !== "undefined" ? window.innerWidth : 1200;
    if (width <= 576) return "200";
    if (width <= 768) return "300";
    if (width <= 992) return "400";
    return "480";
  };

  const [videoOpts, setVideoOpts] = useState({
    height: getYouTubeHeight(),
    width: "100%",
    playerVars: { autoplay: 1 },
  });

  const videoOptions = [
    { id: "dQw4w9WgXcQ", title: "Introduction Video" },
    { id: "3JZ_D3ELwOQ", title: "Tutorial Video" },
  ];

  const selectVideo = (videoId) => {
    console.log(`Selected video ID: ${videoId}`); // Debug log
    setSelectedVideo(videoId);
  };

  const closeModal=()=>{
    setShowModal(false);
    setSelectedVideo(null);
  }

 

  useEffect(() => {
    const updateHeight = () => {
      setVideoOpts((prev) => ({
        ...prev,
        height: getYouTubeHeight(),
      }));
    };
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <>
      <div
        className="untree_co-hero overlay"
        style={{ backgroundImage: `url('/images/hero_1.jpg')` }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <div className="row justify-content-left">
                <div className="col-lg-6 text-center align-self-center order-lg-2">
                  <a
                    onClick={() => setShowModal(true)}
                    className="video-play-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#videoModal"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="currentColor"
                        className="bi bi-play"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
                      </svg>
                    </span>
                  </a>
                </div>
                <div className="col-lg-6 text-center text-lg-left">
                  <h1
                    className="mb-4 heading text-white aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="100" style={{  textTransform: "uppercase" }}
                  >
                    Unlock your Child&apos;s full potential
                  </h1>
                  <div
                    className="mb-5 text-white desc mx- aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <p>
                      Find the right tutor for your child—someone who ensures ,
                      <span className="link-highlight">
                        homework is done, subjects are mastered
                      </span>
                      &nbsp; and sends weekly progress reports, through Online
                      sessions you can join anytime.
                    </p>
                  </div>
                  <p
                    className="mb-0 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <a
                      style={{
                        padding: "15px 30px",
                        borderRadius: "30px",
                        fontSize: "11px",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        letterSpacing: "0.05rem",
                      }}
                      href="#"
                      className="btn btn-primary"
                    >
                      Get a Free Trial
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

<div
className="show"
style={{
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1050,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(10px)',
  display: showModal?'flex':'none',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
}}
>
<div
  className="d-flex justify-content-center align-items-center flex-wrap"
  style={{ gap: '2rem' }}
>

    {selectedVideo ? (
              <>
                <div
                  style={{
                    height: "480px",
                    borderRadius: "8px",
                    overflow: "visible",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                >
                  <YouTube videoId={selectedVideo} opts={videoOpts} />
                </div>
              </>
            ) :( 
              <>
              {videoOptions.map((video) => (
                  <div
                    key={video.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      selectVideo(video.id);
                    }}
                    style={{
                      width: "520px", // You can adjust this value
                      aspectRatio: "16 / 9", // Perfect 16:9
                      backgroundImage: `url(https://img.youtube.com/vi/${video.id}/hqdefault.jpg)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "12px",
                      position: "relative",
                      cursor: "pointer",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "60px",
                        height: "60px",
                        background: "rgba(0,0,0,0.6)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="#fff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                ))}
            </>
            )}
  {/* <div
    className="card shadow"
    style={{
      backgroundColor: 'rgb(255, 255, 255)', // Fully opaque white
      borderRadius: '1rem',
      padding: '2rem',
      minWidth: '300px',
      maxWidth: '400px',
      opacity: 1, // Explicitly set to 1 (fully opaque)
      boxShadow: '0 4px 20px rgba(0, 0, 0, 1',
    }}
  >
    <h5>Card 1</h5>
    <p>This is the first white card.</p>
  </div> */}

</div>

{/* Close Button */}
<button
  onClick={() => closeModal()}
  style={{
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'transparent',
    border: 'none',
    fontSize: '2rem',
    color: '#fff',
    cursor: 'pointer',
  }}
  aria-label="Close modal"
>
  &times;
</button>
</div>


    </>
  );
}
