import { combineReducers } from '@reduxjs/toolkit';
import books from './modules/booksSlice';
import user from './modules/userSlice';

export default combineReducers({ books, user });
