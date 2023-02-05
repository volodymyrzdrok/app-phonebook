import { createSlice } from '@reduxjs/toolkit';
export const appSlice = createSlice({
  name: 'app',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
    auth: {
      userName: '',
      isLoggedIn: false,
    },
  },
  reducers: {
    addContact({ contacts }, action) {},
    removeContact({ contacts }, action) {},
    updateContact({ contacts }, action) {},
    changeFilterValue({ filter }, action) {},
    logIn({ auth }, action) {
      auth.userName = action.payload;
      auth.isLoggedIn = true;
    },
    logOut({ auth }, action) {
      auth.userName = '';
      auth.isLoggedIn = false;
    },
  },
});

export const getUserName = state => state.auth.userName;
export const getStatusAuth = state => state.auth.isLoggedIn;

export const {
  addContact,
  removeContact,
  updateContact,
  changeFilterValue,
  logIn,
  logOut,
} = appSlice.actions;
