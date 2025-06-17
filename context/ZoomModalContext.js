"use client";
import { createContext, useContext, useState } from "react";
import ZoomModal from "@/components/ZoomModal";

const ZoomModalContext = createContext();

export const useZoomModal = () => useContext(ZoomModalContext);

export function ZoomModalProvider({ children }) {
  const [show, setShow] = useState(false);

  const openZoomModal = () => setShow(true);
  const closeZoomModal = () => setShow(false);

  return (
    <ZoomModalContext.Provider value={{ openZoomModal }}>
      {children}
      <ZoomModal show={show} onClose={closeZoomModal} />
    </ZoomModalContext.Provider>
  );
}
