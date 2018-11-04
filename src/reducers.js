import Immutable from 'immutable';
import { combineReducers } from 'redux';
import { ADD_GROCERY_ITEM, DELETE_GROCERY_ITEM, UPDATE_GROCERY_ITEM, CHECKED_ITEM } from './actions';

const initialState = new Immutable.List([
  { checked: false, name: 'Apples' },
  { checked: false, name: 'Bananas' },
]);

function groceries(state = initialState, action) {
  switch (action.type) {
    case ADD_GROCERY_ITEM:
      return state.push(action.item);
    case DELETE_GROCERY_ITEM:
      return state.splice(action.i, 1);
    case UPDATE_GROCERY_ITEM:
      return state.splice(action.i, 1, {
        checked: state.get(action.i).checked,
        name: action.newItem,
      });
    case CHECKED_ITEM:
      state.get(action.i).checked === false
        ? (state.get(action.i).checked = true)
        : (state.get(action.i).checked = false);
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  groceries,
});
