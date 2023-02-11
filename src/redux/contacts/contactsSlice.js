import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  addOneContact,
  removeOneContact,
  updateContact,
} from '../contacts/contactsOperations';

const defaultState = {
  items: [],
  filter: '',
  isContLoading: false,
  errorCont: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: defaultState,
  reducers: {
    changeFilterValue(state, action) {
      state.filter = action.payload;
    },
    resetContactState(state, action) {
      return (state = defaultState);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addOneContact.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
      })
      .addCase(removeOneContact.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(c => c.id === payload);
        state.items.splice(index, 1);
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(c => c.id === payload.id);
        state.items.splice(index, 1, payload);
      })
      .addMatcher(
        action => {
          return (
            action.type.endsWith('pending') &&
            action.type.startsWith('contacts')
          );
        },
        state => {
          state.isContLoading = true;
        }
      )
      .addMatcher(
        action => {
          return (
            action.type.endsWith('fulfilled') &&
            action.type.startsWith('contacts')
          );
        },
        state => {
          state.errorCont = null;
          state.isContLoading = false;
        }
      )
      .addMatcher(
        action => {
          return (
            action.type.endsWith('rejected') &&
            action.type.startsWith('contacts')
          );
        },
        (state, action) => {
          state.isContLoading = false;
          state.errorCont = action.payload;
        }
      );
  },
});

export const selectLoadingContacts = state => state.contacts.isContLoading;
export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.contacts.filter;

export const { changeFilterValue, resetContactState } = contactsSlice.actions;
export const contacts = contactsSlice.reducer;
