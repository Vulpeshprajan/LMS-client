import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

const { reducer, actions } = userSlice;
// reducers refer to state which is initital state

export const { setUser } = actions;

export default reducer;
