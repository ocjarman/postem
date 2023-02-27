import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  firstName: "",
  lastName: "",
  id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserId: (state) => {
      state.id = state.user.me.id;
    },
    setFirstName: (state) => {
      state.firstName = state.user.me.firstName;
    },
    setLastName: (state) => {
      state.lastName = state.user.me.lastName;
    },
    resetUser: (state) => {
      state.user = {};
    },
  },
});

export const { setUser, resetUser, setFirstName, setLastName, setUserId } =
  userSlice.actions;
export default userSlice.reducer;
