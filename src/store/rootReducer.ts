import { combineReducers } from '@reduxjs/toolkit';
import user from '@/store/features/user';
import global from '@/store/features/global';

const rootReducer = combineReducers({ user, global });
export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
