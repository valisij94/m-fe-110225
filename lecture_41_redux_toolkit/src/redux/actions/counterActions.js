export const COUNTER_ACTIONS = {
  increment: 'COUNTER/INCREMENT',
  decrement: 'COUNTER/DECREMENT',
}

export const incrementAction = () => {
  return { type: COUNTER_ACTIONS.increment }
}

export const decrementAction = () => {
  return { type: COUNTER_ACTIONS.decrement }
}