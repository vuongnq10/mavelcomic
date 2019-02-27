const initialState = {
  limit: 10,
  offset: 0,
  characters: [],
  hero: {},
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONTENT':
      return {
        ...state,
        offset: action.offset,
        characters: action.data,
      };
    case 'GET_HERO':
      return {
        ...state,
        hero: action.hero,
      };
    default:
      return state;
  }
};

export default contentReducer;
