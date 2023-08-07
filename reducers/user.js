import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    username: null,
    email: null,
    photoURL: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
      state.value.email = action.payload.email;
    },

    logout: (state) => {
      state.value.token = null;
      state.value.username = null;
      state.value.email = null;
    },

    setPhoto: (state, action) => {
      state.value.photoURL = action.payload;
    },

    setUsername: (state, action) => {
      state.value.username = action.payload;
    },
  },
});

export const { login, logout, setPhoto, setUsername } = userSlice.actions;
export default userSlice.reducer;
