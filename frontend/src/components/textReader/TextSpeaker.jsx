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
        utteranceRef.current.onend = null; 
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance; 
    utterance.onend = () => {
      setSpeakingInProgress(false); 
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
