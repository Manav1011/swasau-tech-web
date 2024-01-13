'use client'
import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [globalGrad,setGlobalGrad] = useState()

  const updateGlobalGrad = (newState) => {
    setGlobalGrad(newState);
  };

  return (
    <GlobalStateContext.Provider value={{ globalGrad, updateGlobalGrad }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
