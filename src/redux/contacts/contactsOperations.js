import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const idToken = thunkAPI.getState().auth.idToken;
    setAuthHeader(idToken);
    try {
      const response = await axios.get('/contacts');

      return response.data;
    } catch (err) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  },
  {
    condition: (_, { getState }) => {
      // const { idToken } = getState().auth;
      const { items } = getState().contacts;
      if (items.length) return false;
      return true;
    },
  }
);

export const addOneContact = createAsyncThunk(
  'contacts/addContact',
  async (newContactObj, thunkAPI) => {
    const idToken = thunkAPI.getState().auth.idToken;
    setAuthHeader(idToken);
    try {
      const response = await axios.post('/contacts', newContactObj);

      return response.data;
    } catch (err) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const removeOneContact = createAsyncThunk(
  'contacts/removeContact',
  async (idContact, thunkAPI) => {
    const idToken = thunkAPI.getState().auth.idToken;
    setAuthHeader(idToken);
    try {
      await axios.delete(`/contacts/${idContact}`);

      return idContact;
    } catch (err) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (newObj, thunkAPI) => {
    const idToken = thunkAPI.getState().auth.idToken;
    setAuthHeader(idToken);
    const { id, name, number } = newObj;
    try {
      const response = await axios.patch(`/contacts/${id}`, { name, number });
      console.log('updateContact = response.data =>', response.data);
      return response.data;
    } catch (err) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
