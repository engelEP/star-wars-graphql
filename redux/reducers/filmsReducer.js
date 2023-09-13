import { actionFilms } from '@/redux/actions/actionFilms';

const filmReducer = (state = [], action) => {
  switch (action.type) {
    case actionFilms.add:
      return state.filter((item) => item.id === action.item.id).length
        ? state
        : [...state, action.item];

    case actionFilms.delete:
      return state.filter((item) => item.id !== action.item.id);

    default:
      return state;
  }
};

export default filmReducer;
