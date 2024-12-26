import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementTimer } from "..//redux/reducers/timerReducer"; // Corrected import

export const Time = () => {
  const dispatch = useDispatch();
  const { isRunning, elapsedTime } = useSelector((state) => state.timer); // Access the state

console.log("  isRunning , elapsedTime Timer.js " , isRunning , elapsedTime);
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(incrementTimer(1)); // Dispatch incrementTimer with updated elapsed time
      }, 1000); // Run every second
    }

    return () => {
      clearInterval(interval); // Clean up interval on component unmount or when timer stops
    };
  }, [isRunning, elapsedTime, dispatch]); // Run the effect when isRunning or elapsedTime changes


  return <b>{elapsedTime}</b>; // Display the elapsed time
};
