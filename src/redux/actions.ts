import { nanoid } from 'nanoid';

const addTask = (text: string) => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

const deleteTask = (taskId: number) => {
  return {
    type: 'tasks/deleteTask',
    payload: taskId,
  };
};

const toggleCompleted = (taskId: number) => {
  return {
    type: 'tasks/toggleCompleted',
    payload: taskId,
  };
};

const setStatusFilter = (value: any) => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};

const incrementValue = number => {
  return {
    type: 'increment',
    payload: +1,
  };
};

const decrementValue = number => {
  return {
    type: 'decrement',
    payload: -1,
  };
};

export {
  addTask,
  deleteTask,
  toggleCompleted,
  setStatusFilter,
  incrementValue,
  decrementValue,
};
