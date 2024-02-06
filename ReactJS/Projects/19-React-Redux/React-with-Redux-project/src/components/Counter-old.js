import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter)
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({type: "toggle"})
  };

  function handleIncrement() {
    dispatch({type: 'increment'})
  };

  function handleIncreaseByFive() {
    dispatch({type: 'increase', amount: 5})
  };

  function handleDecrement() {
    dispatch({type: 'decrement'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncreaseByFive}>Increase By 5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
