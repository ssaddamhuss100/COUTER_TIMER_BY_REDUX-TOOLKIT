
import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = { count: 0 };
// refactor to use the createSlice method
export const counterSlice = createSlice({
            name:"counter",
            initialState : INITIAL_STATE,
            reducers : {
              // Decrement the counter
              decrementCounter: (state, action) => {
                // console.log(" decrementCounter state.count : ",state.count);
                // console.log(" decrementCounter action.payload : ",action.payload)

                state.count -= action.payload; // Subtract the payload value
              },
              // Increment the counter
              incrementCounter: (state, action) => {
                // console.log(" incrementCounter state : ", state);
                // console.log(" incrementCounter action : ", action)
                state.count += action.payload; 
                
              },
              //reset the counter
              resetCounter: (state,action) => {
                // console.log("resetCounter state.count : ",state.count);
                // console.log("resetCounter action.count : ",action.payload)
                state.count = action.payload;
              }
  },
});
export const {decrementCounter,incrementCounter,resetCounter } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

