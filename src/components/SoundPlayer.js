import React, { useRef, useState } from "react";
import useTimer from "./useTimer";
import Timer from "./Timer";

function SoundPlayer() {
  const [soundPlaying, setSoundPlaying] = useState(false);
  const [activeAudioIndex, setActiveAudioIndex] = useState(-1);
  const audioRefs = useRef([]);
  const timers = useRef([]);

  const handlePlaySound = (index) => {
    if (!soundPlaying) {
      audioRefs.current[index].play();
      timers.current[index].handleStart();
      setActiveAudioIndex(index);
      setSoundPlaying(true);
    }
  };

  const handleStopSound = (index) => {
    if (soundPlaying && activeAudioIndex === index) {
      audioRefs.current[index].pause();
      audioRefs.current[index].currentTime = 0;
      timers.current[index].handleReset();
      setActiveAudioIndex(-1);
      setSoundPlaying(false);
    }
  };

  const handleTimerExpired = (index) => {
    if (soundPlaying && activeAudioIndex === index) {
      handleStopSound(index);
    }
  };

  const addAudioRef = (ref) => {
    audioRefs.current.push(ref);
  };

  const addTimer = () => {
    timers.current.push(useTimer(0, () => handleTimerExpired(timers.current.length)));
  };

  return (
    <div>
      <button onClick={() => addAudioRef(audioRefs.current.length)}>Add Sound</button>
      {audioRefs.current.map((_, index) => (
        <div key={index}>
          <button onClick={() => handlePlaySound(index)}>Play Sound {index + 1}</button>
          <button onClick={() => handleStopSound(index)}>Stop Sound {index + 1}</button>
          <Timer isActive={timers.current[index].isActive} />
          <audio ref={(ref) => addAudioRef(ref)}>
            <source src={`your-audio-file-${index}.mp3`} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </div>
  );
}

export default SoundPlayer;
