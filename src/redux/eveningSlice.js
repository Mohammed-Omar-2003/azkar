import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchAzkarEvening = createAsyncThunk(
  "users/fetchByIdStatus",
  async (_, thunkAPI) => {
    const { RejectWithValue } = thunkAPI;
    try {
      const res = await axios(
        "https://mohammed-omar-2003.github.io/azkar_api/Evening_Remembrances.json"
      );
      return res.data;
    } catch (error) {
      return RejectWithValue(error);
    }
  }
);
const initialState = { element: [] };
const eveningSlice = createSlice({
  name: "evening",
  initialState,
  reducers: {},
  extraReducers: (e) => {
    e.addCase(fetchAzkarEvening.fulfilled, (state, action) => {
      state.element = action.payload;
    });
  },
});


export default eveningSlice.reducer;
