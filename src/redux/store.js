import { configureStore } from "@reduxjs/toolkit";
import morningSlice from "./morningSlice";
import eveningSlice from "./eveningSlice";
import efterPrayeSlice from "./efterPrayeSlice";
import sleepingSlice from "./sleepingSlice";
import weakUpSlice from "./weakUpSlice";
import alroquaSlice from "./alroquaSlice";
export const store = configureStore({
  reducer: {
    morning: morningSlice,
    evening: eveningSlice,
    efterPraye: efterPrayeSlice,
    sleeping: sleepingSlice,
    weakup: weakUpSlice,
    alroqua: alroquaSlice,
  },
});
