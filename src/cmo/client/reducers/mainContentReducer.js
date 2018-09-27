const defaultState = {
  InitialSSR: false,
  loading: false,
  response: {},
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_HOME':
      return {
        ...state,
        loading: false,
        response: {
          ...action.payload.data,
        },
      };
    case 'FETCH_HOME/PENDING':
      return {
        ...state,
        loading: true,
      };
    case 'INITIALSSR':
      return {
        ...state,
        InitialSSR: true,
      };
    case 'FETCH_MAIN_CONTENT':
      // console.log(action.payload)
      return {
        ...state,
        response: {
          ...action.payload.data,
        },
      };

    case 'CLEAR_MAIN_CONTENT':
      return {
        ...defaultState,
        InitialSSR: true,
      };
    default:
      return state;
  }
};
