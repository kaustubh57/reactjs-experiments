const initialState = {
  technologyVote: {
    angular: 0,
    react: 0,
    vuejs: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE_ANGULAR':
      console.log('Your choice is Angular!');
      return Object.assign({}, state, {
        technologyVote: {
          angular: state.technologyVote.angular + 1,
          react: state.technologyVote.react,
          vuejs: state.technologyVote.vuejs
        }
      });
    case 'VOTE_REACT':
      console.log('Your choice is React!');
      return Object.assign({}, state, {
        technologyVote: {
          react: state.technologyVote.react + 1,
          angular: state.technologyVote.angular,
          vuejs: state.technologyVote.vuejs
        }
      });
    case 'VOTE_VUEJS':
      console.log('Your choice is Vue.js');
      return Object.assign({}, state, {
        technologyVote: {
          vuejs: state.technologyVote.vuejs + 1,
          angular: state.technologyVote.angular,
          react: state.technologyVote.react
        }
      });
    default:
      return state;
  }
}