import css from './Step.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setStep } from '../../redux/actions.ts';

function Step(params) {
  const step = useSelector(state => state.counter.step);
  const dispatch = useDispatch();
  return (
    <div>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          const value = e.target.elements.step.value;
          dispatch(setStep(Number(value)));
        }}
      >
        <input type="number" name="step" defaultValue={step} />
        <button type="submit">Step</button>
      </form>
    </div>
  );
}

export default Step;
