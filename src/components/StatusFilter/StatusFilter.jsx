import Button from 'components/Button/Button.tsx';
import css from './StatusFilter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from '../../redux/constants';
import { setStatusFilter } from '../../redux/actions.ts';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.status);

  const handleChangeFilter = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleChangeFilter(setStatusFilter.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleChangeFilter(setStatusFilter.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleChangeFilter(setStatusFilter.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
