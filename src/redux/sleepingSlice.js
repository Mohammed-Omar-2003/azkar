import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchAzkarSleeping = createAsyncThunk(
  "users/fetchByIdStatus",
  async (_, thunkAPI) => {
    const { RejectWithValue } = thunkAPI;
    try {
      const res = await axios(
        "https://mohammed-omar-2003.github.io/azkar_api/Sleeping_Remembrances.json"
      );
      return res.data;
    } catch (error) {
      return RejectWithValue(error);
    }
  }
);
const initialState = { element: [] };
const sleepingSlice = createSlice({
  name: "sleeping",
  initialState,
  reducers: {},
  extraReducers: (e) => {
    e.addCase(fetchAzkarSleeping.fulfilled, (state, action) => {
      state.element = action.payload;
    });
  },
});

export default sleepingSlice.reducer;
