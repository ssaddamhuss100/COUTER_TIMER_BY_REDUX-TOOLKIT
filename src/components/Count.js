import { useSelector } from "react-redux";

export const Count = () => {
  // change as per the store implementation
  const {count}  = useSelector((state) => state.counter);
  
  // console.log("Counter is here on display count.js :", count);
  return <b>{count}</b>;
};
