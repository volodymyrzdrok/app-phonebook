import { createSlice, nanoid } from '@reduxjs/toolkit';
import defaultContact from '../db/defaultData.json';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    contacts: {
      items: defaultContact,
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
    addContact: {
      reducer({ contacts }, action) {
        contacts.items = [action.payload, ...contacts.items];
      },
      prepare({ name, number }) {
        return {
          payload: { id: nanoid(), name, number },
        };
      },
    },

    removeContact({ contacts }, action) {
      contacts.items = contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },
    updateContact({ contacts }, action) {
      contacts.items = [
        action.payload,
        ...contacts.items.filter(contact => contact.id !== action.payload.id),
      ];
    },

    changeFilterValue(state, action) {
      state.filter = action.payload;
    },
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

const persistConfig = {
  key: 'appPhonebook',
  storage,
  whitelist: ['auth'],
};
export const appReducer = persistReducer(persistConfig, appSlice.reducer);

export const getUserName = state => state.auth.userName;
export const getStatusAuth = state => state.auth.isLoggedIn;
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;

export const {
  addContact,
  removeContact,
  updateContact,
  changeFilterValue,
  logIn,
  logOut,
} = appSlice.actions;
