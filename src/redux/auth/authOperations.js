import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

axios.defaults.baseURL='https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (dataUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        '/users/signup',
        dataUser
      );
      token.set(data.token);
      toast.success('Welcome to an application', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return data;
    } catch (error) {
      toast.error('Something went wrong. Try again later', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (dataUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        '/users/login',
        dataUser
      );
      token.set(data.token);
      toast.success('Welcome!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return data;
    } catch (error) {
      toast.error('Wrong email or password', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const tokenPersist = getState().auth.token;
    if (!tokenPersist) {
      return rejectWithValue();
    }
    token.set(tokenPersist);

    try {
      const { data } = await axios(
        '/users/current'
      );
      return data;
    } catch (error) {
      token.unset();
      return rejectWithValue(error.message);
    }
  }
);