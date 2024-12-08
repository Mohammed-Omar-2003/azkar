import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchAfterPraye = createAsyncThunk(
  "users/fetchByIdStatus",
  async (_, thunkAPI) => {
    const { RejectWithValue } = thunkAPI;
    try {
      const res = await axios(
        "https://mohammed-omar-2003.github.io/azkar_api/Remembrances_after_praye.json"
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      return RejectWithValue(error);
    }
  }
);
const initialState = { element: [] };
const efterPrayeSlice = createSlice({
  name: "efterPraye",
  initialState,
  reducers: {},
  extraReducers: (e) => {
    e.addCase(fetchAfterPraye.fulfilled, (state, action) => {
      state.element = action.payload;
    });
  },
});

export default efterPrayeSlice.reducer;
