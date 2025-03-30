import { configureStore } from '@reduxjs/toolkit';
import {
  taskReducer,
  filterReducer,
  userReducer,
  counterReducer,
} from './reducer';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filterReducer,
    counter: counterReducer,
    users: userReducer,
  },
});
