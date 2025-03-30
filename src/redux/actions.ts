import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addTask = createAction('tasks/addTask', (text: string) => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
});
export const deleteTask = createAction('tasks/deleteTask', (taskId: number) => {
  return {
    type: 'tasks/deleteTask',
    payload: taskId,
  };
});
export const toggleCompleted = createAction(
  'tasks/toggleCompleted',
  (taskId: number) => {
    return {
      type: 'tasks/toggleCompleted',
      payload: taskId,
    };
  }
);
export const setStatusFilter = createAction(
  'filters/setStatusFilter',
  (value: any) => {
    return {
      type: 'filters/setStatusFilter',
      payload: value,
    };
  }
);

// const addTask = (text: string) => {
//   return {
//     type: 'tasks/addTask',
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text,
//     },
//   };
// };

// const deleteTask = (taskId: number) => {
//   return {
//     type: 'tasks/deleteTask',
//     payload: taskId,
//   };
// };

// const toggleCompleted = (taskId: number) => {
//   return {
//     type: 'tasks/toggleCompleted',
//     payload: taskId,
//   };
// };

// const setStatusFilter = (value: any) => {
//   return {
//     type: 'filters/setStatusFilter',
//     payload: value,
//   };
// };

const counterIncrement = (step: number) => {
  return {
    type: 'increment',
    payload: step,
  };
};

const counterDecrement = (step: number) => {
  return {
    type: 'decrement',
    payload: step,
  };
};

const setStep = (value: number) => {
  return {
    type: 'setStep',
    payload: value,
  };
};

export { setStep, counterDecrement, counterIncrement };
