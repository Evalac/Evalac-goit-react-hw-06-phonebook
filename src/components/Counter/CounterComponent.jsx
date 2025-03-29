import css from './CounterComponent.module.css';
import Step from 'components/Step/Step';

import { useSelector, useDispatch } from 'react-redux';

function CounterComponent(params) {
  const total = useSelector(state => state.total);
  console.log('total: ', total);
  const step = useSelector(state => state.step);
  console.log('step: ', step);

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
      <Step />
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
