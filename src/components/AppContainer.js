import { connect } from 'react-redux';

import { addGroceryItem, deleteGroceryItem, updateGroceryItem, checkedItem } from 'actions';
import App from 'components/App';

function mapStateToProps({ groceries }) {
  return { groceries };
}

function mapDispatchToProps(dispatch) {
  return {
    addGroceryItem: item => dispatch(addGroceryItem(item)),
    deleteGroceryItem: i => dispatch(deleteGroceryItem(i)),
    updateGroceryItem: (newItem, i) => dispatch(updateGroceryItem(newItem, i)),
    checkedItem: (item, i) => dispatch(checkedItem(item, i)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
