import React, { useState } from "react";
import useTimer from "./useTimer";
import Timer from "./Timer";

function SoundPlayer() {
  const [soundPlaying, setSoundPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlaySound = () => {
    // Check if the audio is already playing
    if (!soundPlaying) {
      // Start playing the sound
      audioRef.current.play();

      // Start the timer
      timer.handleStart();

      // Set soundPlaying to true
      setSoundPlaying(true);
    }
  };

  const handleStopSound = () => {
    // Check if the audio is playing
    if (soundPlaying) {
      // Stop playing the sound
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset the audio to the beginning

      // Reset the timer
      timer.handleReset();

      // Set soundPlaying to false
      setSoundPlaying(false);
    }
  };

  const handleTimerExpired = () => {
    // Stop the sound when the timer expires
    if (soundPlaying) {
      handleStopSound();
    }
  };

  const timer = useTimer(0, handleTimerExpired);

  return (
    <div>
      <button onClick={handlePlaySound}>Play Sound</button>
      <button onClick={handleStopSound}>Stop Sound</button>
      <Timer isActive={timer.isActive} />
      <audio ref={audioRef}>
        <source src="your-audio-file.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default SoundPlayer;
