import {useSelector, useDispatch} from "react-redux";

import classes from "./Counter.module.css";
import { counterActions } from "../store/counterSlice";

const Counter = () => {


    const dispatchFunction = useDispatch();
    const counter = useSelector((state) => state.counter.value);
    const isCounterInvisible = useSelector((state) => state.counter.isCounterInvisible);

    const incrementHandler = () => {
        dispatchFunction(counterActions.increment())
    };

    const increase = () => {
        dispatchFunction(counterActions.increase(10))
    };

    const decrementHandler = () => {
        dispatchFunction(counterActions.decrement())
    };

    const toggleCounterHandler = () => {
        dispatchFunction(counterActions.setCounterVisibility());
    };

    return (
        <main className={classes.counter}>
            <h1>Счётчик</h1>
            {!isCounterInvisible && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>+</button>
                <button onClick={increase}>+10</button>
                <button onClick={decrementHandler}>-</button>
            </div>
            <button onClick={toggleCounterHandler}>Спрятать / Показать</button>
        </main>
    );
};

export default Counter;
