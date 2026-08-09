//  Challenge: Double Counter
//  **Scenario**

// We have **two counters** in a single component (`CounterA` and `CounterB`). We want to manage them **with one reducer**—allowing increment, decrement, and reset actions for each counter.

import { useReducer } from "react";

const initialState = {
    counterA: 0,
    counterB: 0
};
const reducer = (state, action)=> {

    switch(action.type) {
        case 'increment A':
            return {...state, counterA: state.counterA + 1};

        case 'decrement A':
            return  state.counterA > 0 ?{...state, counterA: state.counterA - 1 } : state;

        case 'increment B':
            return {...state, counterB: state.counterB + 1};

        case 'decrement B':
            return state.counterB > 0 ? {...state, counterB: state.counterB - 1}: state;

        case 'reset both':
            return initialState;
            default:
                return state;             
                 
    }
};

const DoubleCounter = () => {

    const [state, dispatch] = useReducer(reducer,initialState);

    return (
        <div>
            <h1>Double Counter</h1>

                {/* Counter A */}
            <div>
                <h2>Counter A: {state.counterA}</h2>

                <button disabled={state.counterA===0} onClick={()=> dispatch({type: 'decrement A'})}>-A</button>

                <button onClick={()=> dispatch({type: 'increment A'})}>+A</button>
            </div>
            
                {/* CounterB */}
            <div>
                <h2>Counter B: {state.counterB}</h2>

                <button disabled={state.counterB===0} onClick={()=> dispatch({type: 'decrement B'})}>-B</button>

                <button onClick={()=> dispatch({type: 'increment B'})}>+B</button>
            </div>

                {/* Reset Both Counters */}
            <button onClick={()=> dispatch({type: 'reset both'})}>Reset Both</button>

            
        </div>
    )
}
export default DoubleCounter;