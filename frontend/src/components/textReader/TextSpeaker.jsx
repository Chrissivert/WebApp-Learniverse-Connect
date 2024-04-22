// SpeakingComponent.jsx
import React, { useRef, useEffect, useState } from 'react';
import { useSpeaking } from './speakingContext';

const SpeakingComponent = ({ text, onEvent }) => {
  const { speakingEnabled } = useSpeaking();
  const [speakingInProgress, setSpeakingInProgress] = useState(false);
  const utteranceRef = useRef(null); // Reference for the current utterance

  useEffect(() => {
    return () => {
      if (utteranceRef.current) {
        // If there is a current utterance, stop it when unmounting
        utteranceRef.current.onend = null; // Remove onend event listener to prevent memory leak
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  
  // Set language to German
  utterance.lang = 'no-NO';

  utterance.onend = () => {
    setSpeakingInProgress(false); // Speaking has finished
  };

  window.speechSynthesis.speak(utterance);

  setSpeakingInProgress(true);
};

  const handleHover = () => {
    if (speakingEnabled) {
      if (speakingInProgress) {
        window.speechSynthesis.cancel();
        setSpeakingInProgress(false);
      }
      speak(text); // Speak the new text
    }
  };

  return (
    <span onMouseEnter={onEvent ? () => onEvent(speak, text) : handleHover}>
      {text}
    </span>
  );
};

export default SpeakingComponent;
