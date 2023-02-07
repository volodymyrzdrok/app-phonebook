import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63e0bf8c65b57fe606488be1.mockapi.io';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
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
      const { items } = getState().contacts;
      if (items.length) return false;
      return true;
    },
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (newObj, thunkAPI) => {
    try {
      const response = await axios.put(`/contacts/${newObj.id}`, newObj);
      return response.data;
    } catch (err) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addOneContact = createAsyncThunk(
  'contacts/addContact',
  async (newContactObj, thunkAPI) => {
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
    try {
      const response = await axios.delete(`/contacts/${idContact}`);
      return response.data;
    } catch (err) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
