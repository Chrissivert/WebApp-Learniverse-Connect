// SpeakingComponent.jsx
import React from 'react';
import { useSpeaking } from './speakingContext';

const SpeakingComponent = ({ text }) => {
  const { speakingEnabled } = useSpeaking();

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  if (speakingEnabled) {
    speak(text);
  }

  return null;
};

export default SpeakingComponent;
