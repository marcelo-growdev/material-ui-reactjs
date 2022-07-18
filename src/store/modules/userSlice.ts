import { createSlice } from '@reduxjs/toolkit';

interface IUser {
  id: number;
  login: string;
  password: string;
}

const initialState: IUser = { id: 0, login: '', password: '' };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setState(state: IUser) {
      return state;
    },
    clear() {
      return initialState;
    },
  },
});

export const { setState, clear } = userSlice.actions;
export default userSlice.reducer;
