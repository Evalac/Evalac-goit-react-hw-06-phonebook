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

export { addTask, deleteTask, toggleCompleted, setStatusFilter };
