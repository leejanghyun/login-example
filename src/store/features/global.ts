import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
type StateType = {
  isShowSpinner: boolean;
};

const name = 'global';

const initialState: StateType = {
  isShowSpinner: false,
};

const reducers = {
  showSpinner: (state, action: PayloadAction<ShowSpinnerActionPayload>) => {
    const { isShowSpinner } = action.payload;
    state.isShowSpinner = isShowSpinner;
  },
};

// CreateSlice 정의
export const globalSlice = createSlice({
  name,
  initialState,
  reducers,
});

// Selector 정의
export const isShowSpinner = (state: RootState) => state.global.isShowSpinner;
export const { showSpinner } = globalSlice.actions;
export default globalSlice.reducer;
