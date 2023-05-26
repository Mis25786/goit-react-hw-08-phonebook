import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//* Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

//* Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

//* POST /users/signup
//* body: {name, email, password}
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('users/signup', credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//* POST /users/login
//* body: {email, password}
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {}
);

//* POST /users/logut
//* headers: Authorization: Bearer token
export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {}
);

//* GET /users/me
//* headers: Authorization: Bearer token
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {}
);
