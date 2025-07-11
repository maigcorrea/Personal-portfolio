import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";
import { useLocation } from "react-router-dom";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const location = useLocation();


  
  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    document.addEventListener("mousemove", moveCursor);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="custom-cursor" ref={cursorRef}>
      <span className="custom-cursor-text">scroll</span>
    </div>
  );
};

export default CustomCursor;
