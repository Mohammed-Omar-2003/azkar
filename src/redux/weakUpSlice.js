import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchAzkarWeakUp = createAsyncThunk(
  "users/fetchByIdStatus",
  async (_, thunkAPI) => {
    const { RejectWithValue } = thunkAPI;
    try {
      const res = await axios(
        "https://mohammed-omar-2003.github.io/azkar_api/WeakUp_Remembrances.json"
      );
      return res.data;
    } catch (error) {
      return RejectWithValue(error);
    }
  }
);
const initialState = { element: [] };
const weakUpSlice = createSlice({
  name: "weakup",
  initialState,
  reducers: {},
  extraReducers: (e) => {
    e.addCase(fetchAzkarWeakUp.fulfilled, (state, action) => {
      state.element = action.payload;
    });
  },
});

export default weakUpSlice.reducer;
