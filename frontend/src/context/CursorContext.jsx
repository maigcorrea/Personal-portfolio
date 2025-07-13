import { createContext, useContext, useState } from 'react';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
    //Estado para almacenar el texto que va a tener el cursor
  const [cursorText, setCursorText] = useState('scroll');

  //Estado para almacenar el tamaño del cursor por defecto
  const [cursorVariant, setCursorVariant] = useState('default');

  return (
    <CursorContext.Provider value={{ cursorText, setCursorText, cursorVariant, setCursorVariant }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
