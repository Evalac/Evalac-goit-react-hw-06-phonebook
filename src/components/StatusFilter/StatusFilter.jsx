import Button from 'components/Button/Button.tsx';
import css from './StatusFilter.module.css';

import { useSelector } from 'react-redux';
import { statusFilters } from '../../redux/constants';

export const StatusFilter = () => {
  const filter = useSelector(state => state.filters.status);
  console.log(filter);
  console.log(statusFilters);

  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
