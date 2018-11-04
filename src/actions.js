export const ADD_GROCERY_ITEM = 'ADD_GROCERY_ITEM';
export const DELETE_GROCERY_ITEM = 'DELETE_GROCERY_ITEM';
export const UPDATE_GROCERY_ITEM = 'UPDATE_GROCERY_ITEM';
export const CHECKED_ITEM = 'CHECKED_ITEM';

export function addGroceryItem(item) {
  return { type: ADD_GROCERY_ITEM, item };
}

export function deleteGroceryItem(i) {
  return { type: DELETE_GROCERY_ITEM, i };
}

export function updateGroceryItem(newItem, i) {
  return { type: UPDATE_GROCERY_ITEM, newItem, i };
}

export function checkedItem(item, i) {
  return { type: CHECKED_ITEM, item, i };
}
