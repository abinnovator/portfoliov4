"use client";

import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState(1920); // default width

  useEffect(() => {
    // Set initial width
    setWidth(window.innerWidth);

    // Update on resize
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};
