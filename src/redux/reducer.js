import { initialState, tasksInitialState } from './initialState.js';
import { combineReducers } from 'redux';

const taskReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case 'tasks/addTask':
      return [...state, action.payload];
    case 'tasks/deleteTask':
      return state.filter(task => task.id !== action.payload);
    case 'tasks/toggleCompleted':
      return state.map(task => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });

    default:
      return state;
  }
};

const filterReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

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
  tasks: taskReducer,
  filter: filterReducer,
});
