import { CounterState, CounterAction, COUNTER_ACTION_TYPE, PayloadCounterAction } from '../types';

const countReducer = (state: CounterState, action: CounterAction) => {
  switch(action.type) {
    case COUNTER_ACTION_TYPE.INCREASE:
      return {count: state.count + (action as PayloadCounterAction).payload} 
    case COUNTER_ACTION_TYPE.DECREASE:
      return {count: state.count - (action as PayloadCounterAction).payload} 
    case COUNTER_ACTION_TYPE.DOUBLE:
      return {count: state.count * 2} 
    default:
      return state;          
  }
}

export default countReducer;


