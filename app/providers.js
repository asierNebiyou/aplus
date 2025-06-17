"use client";
import { ZoomModalProvider } from "@/context/ZoomModalContext";

export function Providers({ children }) {
  return <ZoomModalProvider>{children}</ZoomModalProvider>;
}
