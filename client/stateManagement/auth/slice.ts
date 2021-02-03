import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthState = {
  isLoggedIn: boolean;
  userName: string;
};

export const initialState: AuthState = {
  isLoggedIn: false,
  userName: '',
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    toggleLoginState: (state) => ({
      ...state,
      isLoggedIn: !state.isLoggedIn,
    }),
  },
});

export default authSlice;
