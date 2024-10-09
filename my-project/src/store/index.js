import { configureStore } from "@reduxjs/toolkit";
import DealerDataSlice from "./dealerSlice";
import FetchedDataSlice from "./FetchedDataSlice";
import modalSlice from "./modalSlicer";

export const store = configureStore({
  reducer: {
    data: FetchedDataSlice,
    dealer: DealerDataSlice,
    modal: modalSlice
  },
});
