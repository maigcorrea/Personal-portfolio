import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";
import { useLocation } from "react-router-dom";
import { useCursor } from "../context/CursorContext";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const location = useLocation();

  // Usar el contexto en el que está almacenado el texto para mostrarlo dentro del cursor en cada momento
  // Usar el contexto en el que está almacenado el tamaño del cursor para reflejarlo en cada momento, ya que alterna tamaños
  const { cursorText, cursorVariant } = useCursor();


  
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
    //Personalizar la clase del cursor en función de la variante que almacene el contexto, de momento hay dos variantes: 'hover' y 'small', y 'default' que es la que se usa por defecto
    <div className={`custom-cursor ${cursorVariant === 'hover' ? 'hover' : cursorVariant === 'small' ? 'small' : null}`} ref={cursorRef}>
      <span className="custom-cursor-text">{cursorText}</span>
    </div>
  );
};

export default CustomCursor;
