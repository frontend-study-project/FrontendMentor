import { createSlice } from "@reduxjs/toolkit";

interface dataState {
  data: Object;
}

const initialState: dataState = {
  data: {
    ip: "",
    location: "",
    timezone: "",
    isp: "",
    latitude: 0,
    longitude: 0,
  },
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
