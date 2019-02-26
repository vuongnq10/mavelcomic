const initialState = {};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONTENT':
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default contentReducer;
