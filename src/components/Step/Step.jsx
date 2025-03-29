import css from './Step.module.css';
import { useDispatch } from 'react-redux';

function Step(params) {
  const dispatch = useDispatch();
  return (
    <div>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          const value = e.target.elements.step.value;
          console.log(value);
          dispatch({ type: 'setStep', payload: value });
        }}
      >
        <input type="number" name="step" />
        <button type="submit">Step</button>
      </form>
    </div>
  );
}

export default Step;
