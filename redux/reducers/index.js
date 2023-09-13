import { combineReducers } from 'redux';
import filmReducer from '@/redux/reducers/filmsReducer';
import starshipReducer from '@/redux/reducers/starshipReducer';
import characterReducer from '@/redux/reducers/characterReducer';

const rootReducer = combineReducers({
  films: filmReducer,
  starships: starshipReducer,
  characters: characterReducer,
});

export default rootReducer;
