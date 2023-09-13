import { actionStarahips } from '@/redux/actions/actionStarships';

const starshipReducer = (state = [], action) => {
  switch (action.type) {
    case actionStarahips.add:
      return state.filter((item) => item.id === action.item.id).length
        ? state
        : [...state, action.item];

    case actionStarahips.delete:
      return state.filter((item) => item.id !== action.item.id);

    default:
      return state;
  }
};

export default starshipReducer;
