// GalleryContext.js
<<<<<<< HEAD
import React, { createContext, useContext, useState } from "react";
=======
import React, { createContext, useContext, useState } from 'react';
>>>>>>> f516531e1e31bc7f42f1c894e5c1144a9b1bebc1

const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [capturedImages, setCapturedImages] = useState([]);

  const addCapturedImage = (image) => {
    setCapturedImages((prevImages) => [...prevImages, image]);
  };

  return (
    <GalleryContext.Provider value={{ capturedImages, addCapturedImage }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (!context) {
<<<<<<< HEAD
    throw new Error("useGallery must be used within a GalleryProvider");
=======
    throw new Error('useGallery must be used within a GalleryProvider');
>>>>>>> f516531e1e31bc7f42f1c894e5c1144a9b1bebc1
  }
  return context;
};
