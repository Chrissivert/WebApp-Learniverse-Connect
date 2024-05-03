// SpeakingContext.js
import React, { createContext, useContext, useState } from 'react';

const SpeakingContext = createContext();

export const SpeakingProvider = ({ children }) => {
  const [speakingEnabled, setSpeakingEnabled] = useState(false);

  const toggleSpeaking = () => {
    setSpeakingEnabled((prevEnabled) => !prevEnabled);
  };

  return (
    <SpeakingContext.Provider value={{ speakingEnabled, toggleSpeaking }}>
      {children}
    </SpeakingContext.Provider>
  );
};

export const useSpeaking = () => useContext(SpeakingContext);
