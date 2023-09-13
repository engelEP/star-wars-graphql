import { createStore } from 'redux';
import rootReducer from './reducers';

const loadState = () => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites'))
      : {};
  }
  return {};
};

const store = createStore(rootReducer, loadState());

store.subscribe(() =>
  localStorage.setItem('favorites', JSON.stringify(store.getState())),
);

export default store;
