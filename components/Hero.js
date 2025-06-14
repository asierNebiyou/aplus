"use client";
import { Modal, ModalBody } from 'react-bootstrap';
import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

const YouTube = dynamic(() => import('react-youtube'), { ssr: false });

export default function Hero() {
  const [show, setShow] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const getYouTubeHeight = () => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
    if (width <= 576) return '200';
    if (width <= 768) return '300';
    if (width <= 992) return '400';
    return '480';
  };

  const [videoOpts, setVideoOpts] = useState({
    height: getYouTubeHeight(),
    width: '100%',
    playerVars: { autoplay: 1 },
  });

  const videoOptions = [
    { id: 'dQw4w9WgXcQ', title: 'Introduction Video' },
    { id: '3JZ_D3ELwOQ', title: 'Tutorial Video' },
  ];

  const selectVideo = (videoId) => {
    console.log(`Selected video ID: ${videoId}`); // Debug log
    setSelectedVideo(videoId);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedVideo(null);
  };

  useEffect(() => {
    const updateHeight = () => {
      setVideoOpts((prev) => ({
        ...prev,
        height: getYouTubeHeight(),
      }));
    };
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
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
                    onClick={() => setShow(true)}
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
                    data-aos-delay="100"
                  >
                    Unlock your Child’s full potential
                  </h1>
                  <div
                    className="mb-5 text-white desc mx- aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <p>
                      Find the right tutor for your child—someone who ensures
                      <a href="#" target="_blank" className="link-highlight">
                        , homework is done, subjects are mastered
                      </a>
                      and sends weekly progress reports, through Online sessions
                      you can join anytime.
                    </p>
                  </div>
                  <p
                    className="mb-0 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <a
                      style={{
                        padding: '15px 30px',
                        borderRadius: '30px',
                        fontSize: '11px',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        letterSpacing: '0.05rem',
                      }}
                      href="#"
                      className="btn btn-primary"
                    >
                      Explore now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop={true}
        keyboard={true}
        centered
        size="xl"
        contentClassName="border-0 bg-transparent"
        dialogClassName="m-0"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 1050,
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        <ModalBody
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            padding: '20px',
            backgroundColor: 'transparent',
            border: 'none',
          }}
        >
          <div
            className="bg-white position-relative"
            style={{
              width: '100%',
              maxWidth: '960px',
              borderRadius: '16px',
              overflow: 'visible',
            }}
          >
            <button
              onClick={handleClose}
              className="btn btn-close position-absolute"
              style={{
                top: '10px',
                right: '10px',
                zIndex: 3,
              }}
            ></button>
            <div className="p-4">
              {selectedVideo ? (
                <>
               
                  <div
                    style={{
                      height: '480px',
                      borderRadius: '8px',
                      overflow: 'visible',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }}
                  >
                    <YouTube videoId={selectedVideo} opts={videoOpts} />
                  </div>
                </>
              ) : (
                <div className="row g-4">
                  {videoOptions.map((video) => (
                    <div key={video.id} className="col-12 col-md-6">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          selectVideo(video.id);
                        }}
                        className="w-100 border-0 bg-white p-3 rounded text-start"
                        style={{ cursor: 'pointer' }}
                      >
                        <div
                          style={{
                            width: '100%',
                            height: '220px',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '8px',
                            backgroundImage: `url(https://img.youtube.com/vi/${video.id}/hqdefault.jpg)`,
                            position: 'relative',
                          }}
                        >
                          <div
                            style={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              width: '60px',
                              height: '60px',
                              background: 'rgba(0,0,0,0.6)',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              selectVideo(video.id);
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
                        <p className="mt-2 mb-0">{video.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}