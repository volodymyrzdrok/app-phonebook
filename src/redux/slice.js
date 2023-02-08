import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  updateContact,
  fetchAllContacts,
  addOneContact,
  removeOneContact,
} from './operations';

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

  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.contacts.items.findIndex(
          c => c.id === action.payload.id
        );
        state.contacts.items.splice(index, 1, action.payload);
      })
      .addCase(addOneContact.fulfilled, (state, action) => {
        state.contacts.items = [action.payload, ...state.contacts.items];
      })
      .addCase(removeOneContact.fulfilled, (state, action) => {
        const index = state.contacts.items.findIndex(
          c => c.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      .addMatcher(
        action => {
          action.type.endsWith('pending') && action.type.startsWith('contacts');
        },
        state => {
          state.contacts.isLoading = true;
        }
      )
      .addMatcher(
        action => {
          action.type.endsWith('fulfilled') &&
            action.type.startsWith('contacts');
        },
        state => {
          state.contacts.error = null;
          state.contacts.isLoading = false;
        }
      )
      .addMatcher(
        action => {
          action.type.endsWith('rejected') &&
            action.type.startsWith('contacts');
        },
        (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.error = action.payload;
        }
      );
  },
  reducers: {
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
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filter;

export const { changeFilterValue, logIn, logOut } = appSlice.actions;
