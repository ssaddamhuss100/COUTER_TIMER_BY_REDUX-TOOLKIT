import { useDispatch, useSelector } from "react-redux";
import { startTimer, pauseTimer, resetTimer } from "../redux/reducers/timerReducer"; // Corrected import

export const TimerActions = () => {
  const dispatch = useDispatch();
  const { isRunning } = useSelector((state) => state.timer); // Accessing the timer state

  return (
    <div className="actions">
      {/* Start Timer Button */}
      <button disabled={isRunning} onClick={() => dispatch(startTimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7709/7709039.png"
          alt="start"
        />
      </button>
      {/* Pause Timer Button */}
      <button disabled={!isRunning} onClick={() => dispatch(pauseTimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2404/2404385.png"
          alt="pause"
        />
      </button>
      {/* Reset Timer Button */}
      <button onClick={() => dispatch(resetTimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};
