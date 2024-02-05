import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createNewExamApi } from "../apis/createNewExam.api";

// thunk
export const createNewExam = createAsyncThunk(
  "createNewExam",
  async (payload, thunkAPI) => {
    try {
      const response = await createNewExamApi(payload);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  data: null,
  status: "idle", // loading | success | failed
  message: "",
};

const examManagerSlice = createSlice({
  name: "examManager",
  initialState,
  reducers: {
    resetState: (state) => {
      state.data = null;
      state.status = "idle"; // loading | success | failed
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewExam.pending, (state, _) => {
      state.status = "loading";
    });

    builder.addCase(createNewExam.fulfilled, (state, action) => {
      state.data = action.payload?.data;
      state.status = "success";
      state.message = action.payload?.message;
    });

    builder.addCase(createNewExam.rejected, (state, action) => {
      state.status = "failed";
      state.data = null;
      state.message = action.payload?.message;
    });
  },
});

export const { resetState } = examManagerSlice.actions;
export default examManagerSlice.reducer;
