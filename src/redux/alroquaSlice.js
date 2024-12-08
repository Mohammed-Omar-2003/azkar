import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchAlroqua = createAsyncThunk(
  "users/fetchByIdStatus",
  async (_, thunkAPI) => {
    const { RejectWithValue } = thunkAPI;
    try {
      const res = await axios(
        "https://mohammed-omar-2003.github.io/azkar_api/Alroqua.json"
      );
      return res.data;
    } catch (error) {
      return RejectWithValue(error);
    }
  }
);
const initialState = { element: [] };
const alroquaSlice = createSlice({
  name: "evening",
  initialState,
  reducers: {},
  extraReducers: (e) => {
    e.addCase(fetchAlroqua.fulfilled, (state, action) => {
      state.element = action.payload;
    });
  },
});

export default alroquaSlice.reducer;
