import { createSlice, nanoid } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
// import defaultContact from '../db/defaultData.json';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { updateContact,fetchAllContacts,fetchOneContact ,addOneContact,removeOneContact} from './operations';

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

  extraReducers: {
    [fetchAllContacts.pending](state, action) {
      state.contacts.isLoading = true;
    },
    [fetchAllContacts.fulfilled](state, action) {
      state.contacts.items = action.payload;
      state.contacts.error = null;
      state.contacts.isLoading = false;
    },
    [fetchAllContacts.rejected](state, action) {
       state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
     [updateContact.pending](state, action) {
      state.contacts.isLoading = true;
    },
    [updateContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
         const index = state.contacts.items.findIndex(
        c => c.id === action.payload.id
      );
      state.contacts.items.splice(index, 1,action.payload);
    },
    [updateContact.rejected](state, action) {
       state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },

    [addOneContact.pending](state, action) {
     state.contacts.isLoading = true;},
    [addOneContact.fulfilled](state, action) {
      state.contacts.items = [action.payload, ...state.contacts.items]
      state.contacts.error = null;
      state.contacts.isLoading = false;
    },
    [addOneContact.rejected](state, action) {
       state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [removeOneContact.pending](state, action) {
     state.contacts.isLoading = true;},
    [removeOneContact.fulfilled](state, action) {
      console.log(action.payload.id)
      // state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload);
         const index = state.contacts.items.findIndex(
        c => c.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);

      state.contacts.error = null;
      state.contacts.isLoading = false;
    },
    [removeOneContact.rejected](state, action) {
       state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  
  },
  reducers: {
    changeFilterValue(state, action) {
    state.filter= action.payload
    }}

  // reducers: {
  //   // Виконається в момент старту HTTP-запиту
  //   fetchingInProgress(state) {},
  //   // Виконається якщо HTTP-запит завершився успішно
  //   fetchingSuccess() {},
  //   // Виконається якщо HTTP-запит завершився з помилкою
  //   fetchingError() {},

  //   addContact: {
  //     reducer({ contacts }, action) {
  //       contacts.items = [action.payload, ...contacts.items];
  //     },
  //     prepare({ name, number }) {
  //       return {
  //         payload: { id: nanoid(), name, number },
  //       };
  //     },
  //   },

  //   removeContact({ contacts }, action) {
  //     contacts.items = contacts.items.filter(
  //       contact => contact.id !== action.payload
  //     );
  //   },
  //   updateContact({ contacts }, action) {
  //     contacts.items = [
  //       action.payload,
  //       ...contacts.items.filter(contact => contact.id !== action.payload.id),
  //     ];
  //   },

  //   changeFilterValue(state, action) {
  //     state.filter = action.payload;
  //   },
  //   logIn({ auth }, action) {
  //     auth.userName = action.payload;
  //     auth.isLoggedIn = true;
  //   },
  //   logOut({ auth }, action) {
  //     auth.userName = '';
  //     auth.isLoggedIn = false;
  //   },
  // },
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

export const {
  // addContact,
  // removeContact,
  // updateContact,
  changeFilterValue,
  logIn,
  logOut,
  // fetchingInProgress,
  // fetchingSuccess,
  // fetchingError,
} = appSlice.actions;
