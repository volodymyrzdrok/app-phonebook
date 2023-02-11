import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getUserCurrent, logoutUser } from './authOperations';

const defaultState = {
  isAuthStatus: false,
  email: '',
  userName: '',
  idToken: null,
  isAuthLoading: false,
  errorAuth: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: defaultState,

  extraReducers: builder => {
    builder
      .addCase(getUserCurrent.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isAuthStatus: true,
          userName: payload.name,
          email: payload.email,
        };
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        return (state = defaultState);
      })
      .addMatcher(
        action => {
          return (
            action.type === 'users/register/fulfilled' ||
            action.type === 'users/login/fulfilled'
          );
        },
        (state, { payload }) => {
          return {
            ...state,
            isAuthStatus: true,
            idToken: payload.token,
            userName: payload.user.name,
            email: payload.user.email,
          };
        }
      )
      .addMatcher(
        action => {
          return (
            action.type.endsWith('pending') && action.type.startsWith('users')
          );
        },
        state => {
          state.isAuthLoading = true;
        }
      )
      .addMatcher(
        action => {
          return (
            action.type.endsWith('fulfilled') && action.type.startsWith('users')
          );
        },
        state => {
          state.errorAuth = null;
          state.isAuthLoading = false;
        }
      )
      .addMatcher(
        action => {
          return (
            action.type.endsWith('rejected') && action.type.startsWith('users')
          );
        },
        (state, action) => {
          state.isAuthLoading = false;
          state.errorAuth = action.payload;
        }
      );
  },
});

const persistConfig = {
  key: 'appPhonebook',
  storage,
  whitelist: ['idToken'],
};

export const selectIdToken = state => state.auth.idToken;
export const selectUserName = state => state.auth.userName;
export const selectAuthStatus = state => state.auth.isAuthStatus;

export const auth = persistReducer(persistConfig, authSlice.reducer);
