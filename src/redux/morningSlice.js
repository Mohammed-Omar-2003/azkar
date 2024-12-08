import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchAzkarMorning = createAsyncThunk(
  "users/fetchByIdStatus",
  async (_, thunkAPI) => {
    const { RejectWithValue } = thunkAPI;
    try {
      const res = await axios(
        "https://mohammed-omar-2003.github.io/azkar_api/Morning_Remembrances.json"
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      return RejectWithValue(error);
    }
  }
);
const initialState = { element: [] };
const morningSlice = createSlice({
  name: "morning",
  initialState,
  reducers: {},
  extraReducers: (e) => {
    e.addCase(fetchAzkarMorning.fulfilled, (state, action) => {
      state.element = action.payload;
    });
  },
});

export default morningSlice.reducer;
