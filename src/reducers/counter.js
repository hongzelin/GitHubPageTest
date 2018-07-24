const counter = (state = 1, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      // throw new Error('error in INCREMENT')
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default: return state;
  }
}

export default counter;