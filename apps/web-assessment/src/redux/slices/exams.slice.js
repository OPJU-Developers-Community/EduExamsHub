import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllExamsApi } from "../apis/getAllExams.api";

// thunk
export const getAllExams = createAsyncThunk(
  "getAllExams",
  async (payload, thunkAPI) => {
    try {
      const response = await getAllExamsApi(payload);
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

const exams = createSlice({
  name: "exams",
  initialState,
  reducers: {
    resetState: (state) => {
      state.data = null;
      state.status = "idle"; // loading | success | failed
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllExams.pending, (state, _) => {
      state.status = "loading";
    });

    builder.addCase(getAllExams.fulfilled, (state, action) => {
      state.data = action.payload?.data;
      state.status = "success";
      state.message = action.payload?.message;
    });

    builder.addCase(getAllExams.rejected, (state, action) => {
      state.status = "failed";
      state.data = null;
      state.message = action.payload?.message;
    });
  },
});

export default exams.reducer;
