import React from "react";

export default function ZoomModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="zoom-overlay">
      <div className="zoom-modal">
        <button className="zoom-close" style={{zIndex:2000}} onClick={onClose}>
          &times;
        </button>
        <iframe
          src="https://scheduler.zoom.us/a-help-sitra/aplustutoringfreetrial?embed=true"
          title="Zoom Free Trial Scheduler"
          allowFullScreen
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
}
