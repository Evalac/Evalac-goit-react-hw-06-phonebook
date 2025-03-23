import css from './CounterComponent.module.css';

import { useSelector, useDispatch } from 'react-redux';

function CounterComponent(params) {
  const total = useSelector(state => state.total);
  console.log(total);

  const dispatch = useDispatch();

  const clickOnButton = e => {
    if (e.target.id === 'incr') {
      dispatch({ type: 'increment', payload: 1 });
    } else {
      dispatch({ type: 'decrement', payload: 1 });
    }
  };

  return (
    <div className={css.container}>
      <h1>Counter</h1>
      <p>{total}</p>
      <button onClick={clickOnButton} type="button" id="incr">
        +
      </button>
      <button onClick={clickOnButton} type="button" id="decre">
        -
      </button>
    </div>
  );
}

export default CounterComponent;
