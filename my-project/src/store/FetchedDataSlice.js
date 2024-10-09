import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//https://jsonplaceholder.typicode.com/posts

export const fetchData = createAsyncThunk("fetchData", async () => {
  const data = await fetch("https://freetestapi.com/api/v1/cars");
  return data.json();
});

const initialValue = {
  isLoading: false,
  data: [],
  Sold: true,
  error: null,
};

const FetchedDateSlice = createSlice({
  name: "test",
  initialState: initialValue,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export const dataActions = FetchedDateSlice.actions;
export default FetchedDateSlice.reducer;
