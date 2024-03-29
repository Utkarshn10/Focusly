import { useState, useRef, useEffect } from "react";

const useTimer = (initialState = 0, onTimerExpired) => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timer, setTimer] = useState(initialState);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  useEffect(() => {
    if (isActive && !isPaused) {
      onTimerExpired();
    }
  }, [timer, isActive, isPaused, onTimerExpired]);

  return { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset };
};

export default useTimer;
