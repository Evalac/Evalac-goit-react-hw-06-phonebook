import { MdClose } from 'react-icons/md';
import css from './Task.module.css';

import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../../redux/actions.ts';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log('handle delete button');

    return dispatch(deleteTask(task.id));
  };

  const handleToggle = () => dispatch(toggleCompleted(task.id));
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
