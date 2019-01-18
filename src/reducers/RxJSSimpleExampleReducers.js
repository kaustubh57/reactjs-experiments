const initialState = {
  observable1: 0,
  observable2: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_OBSERVABLE_1': {
      console.log('UPDATE_OBSERVABLE_1 called...');
      return state;
    }
    case 'UPDATE_OBSERVABLE_2': {
      console.log('UPDATE_OBSERVABLE_2 called...');
      return state;
    }
    default: {
      return state;
    }
  }
}