import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import useSelectorHook from "@/store/useSelectorHook";
import httpClient from "@/api/index";
import { loginConfig } from "@/api/user/loginConfig";
import { useDispatch } from "react-redux";

type StateType = {
  id: string;
  password: string;
};

const name = "user";

const initialState: StateType = {
  id: "",
  password: "",
};

const reducers = {
  setUserId: (state, action: PayloadAction<SetUserIdActionPayload>) => {
    const { id } = action.payload;
    state.id = id;
  },
};

// Thunck 정의
const asyncThunk = {
  requestLogin: createAsyncThunk(
    "requestLogin",
    async (
      data: { id: string; password: string },
      { rejectWithValue, dispatch }
    ) => {
      const response = await httpClient.request({
        ...loginConfig,
        data,
      });

      if (response instanceof Error) {
        return rejectWithValue(false);
      }

      dispatch(setUserId({ id: data.id }));
      return true;
    }
  ),
};

const extraReducer = {
  loginFulFilled: (state: StateType, { payload }) => {},
  loginRejected: (state: StateType, { payload }) => {},
};

// CreateSlice 정의
export const userSlice = createSlice({
  name,
  initialState,
  reducers,
  extraReducers: (builder) => {
    const requestLogin = asyncThunk.requestLogin;
    builder
      .addCase(requestLogin.fulfilled, extraReducer.loginFulFilled)
      .addCase(requestLogin.rejected, extraReducer.loginRejected);
  },
});

// Selector 정의
export const getUserId = (state: RootState) => state.user.id;

// 내보낼 Action 정의
export const { setUserId } = userSlice.actions;
export const { requestLogin } = asyncThunk;
export default userSlice.reducer;
