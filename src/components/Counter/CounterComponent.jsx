import css from './CounterComponent.module.css';
import Step from 'components/Step/Step';

import { useSelector, useDispatch } from 'react-redux';
import { counterDecrement, counterIncrement } from '../../redux/actions.ts';

function CounterComponent(params) {
  const total = useSelector(state => state.counter.total);
  const step = useSelector(state => state.counter.step);
  const stateUseSelector = useSelector(state => state.counter);
  // console.log(stateUseSelector); // хук useSelector звертається до почткового обʼєкту стану

  const dispatch = useDispatch();

  const clickOnButton = e => {
    if (e.target.id === 'incr') {
      dispatch(counterIncrement(step));
    } else {
      dispatch(counterDecrement(step));
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
