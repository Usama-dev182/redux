import { createSlice } from "@reduxjs/toolkit";


// Slices ? 
// Putting all reducers and action creators in one particular bundle. 
export const adoptedPetSlice = createSlice({
  name: "adoptedPet",
  initialState: {
    value: null,
  },
  // Bunch of reducers. reducer takes an old state. action mean chage about the old state. 
  // perform some actions on it (state) and return a new state. 
  reducers: {
    adopt: (state, action) => {
      state.value = action.payload;
    },
    unadopt: (state, action) => {
      state.value = null;
    }
  },
});

// 1) whehever you create a reducer, it automatically creates an action for you. its a little bit black 
// magic of redux toolkit. 
// 2) 

// I can use this  adopt() to send into the reducer
// basically adopt fun ka ya kaam ha behinde the scene.
// function adopt(pet) {
  // action or payload 
  // its just wrap into an action object for you. its formal object that you can give to the reducer. 
 // return { type: "adopt",  payload: pet} }

export const { adopt , unadopt} = adoptedPetSlice.actions;

export default adoptedPetSlice.reducer;
