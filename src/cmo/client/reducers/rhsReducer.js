const defaultState = {
  sections: {},
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_RHS':
      return {
        ...state,
        sections: action.payload.data.sections,
        aaa: null,
      };
    case 'CLEAR_RHS':
      return defaultState;

    default:
      return state;
  }
};
