import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//https://jsonplaceholder.typicode.com/posts

export const fetchDealer = createAsyncThunk("fetchDealer", async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  return data.json();
});

const initialValue = {
  isLoading: false,
  dealerData: [],
  error: null,
};

const DealerDataSlice = createSlice({
  name: "test",
  initialState: initialValue,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDealer.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDealer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dealerData = action.payload;
    });
    builder.addCase(fetchDealer.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export const dealerActions = DealerDataSlice.actions;
export default DealerDataSlice.reducer;
