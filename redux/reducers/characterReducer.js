import { actionCharacters } from '@/redux/actions/actionCharacters';

const characterReducer = (state = [], action) => {
  switch (action.type) {
    case actionCharacters.add:
      return state.filter((item) => item.id === action.item.id).length
        ? state
        : [...state, action.item];

    case actionCharacters.delete:
      return state.filter((item) => item.id !== action.item.id);

    default:
      return state;
  }
};

export default characterReducer;
