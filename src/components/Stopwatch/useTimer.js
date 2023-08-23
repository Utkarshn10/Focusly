import { useState, useRef, useContext } from 'react';
import { MyContext } from "../../context";

const useTimer = (initialState = 0, onTimerExpired) => {
  const { timer, setTimer } = useContext(MyContext);
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const countRef = useRef(null)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    // console.log("start")
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handlePause = () => {
    clearInterval(countRef.current)
    setIsPaused(false)
  }

  const handleResume = () => {
    setIsPaused(true)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handleReset = () => {
    clearInterval(countRef.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  // Call the callback function when the timer expires
  useEffect(() => {
    if (timer === initialState) {
      onTimerExpired();
    }
  }, [timer, initialState, onTimerExpired]);

  return { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset }
}

export default useTimer;
