import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICommonState {
  message: string;
}

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    message: 'Test message',
  } as ICommonState,
  reducers: {
    setMessage: (draft, { payload }: PayloadAction<string>) => {
      draft.message = payload;
    },
  },
});
