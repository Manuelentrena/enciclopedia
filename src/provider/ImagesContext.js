import React, { useState } from "react";

const ImagesContext = React.createContext({});

export function ImagesContextProvider({ children }) {
  const [images, setImages] = useState([]);

  return (
    <ImagesContext.Provider value={{ images, setImages }}>
      {children}
    </ImagesContext.Provider>
  );
}

export default ImagesContext;
