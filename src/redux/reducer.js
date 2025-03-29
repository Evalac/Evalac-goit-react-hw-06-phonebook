import { initialState } from './initialState.js';
import { combineReducers } from 'redux';

const userReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case 'addUser':
      return {
        ...state,
        users: [...state.users, { ...action.payload }],
      };

    default:
      return state;
  }
};

const counterReducer = (state = initialState.counter, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        total: state.total + action.payload,
      };
    case 'decrement': {
      return {
        ...state,
        total: state.total - action.payload,
      };
    }
    case 'setStep': {
      return {
        ...state,
        step: action.payload,
      };
    }

    default:
      return state;
  }
};

export const reducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
});
