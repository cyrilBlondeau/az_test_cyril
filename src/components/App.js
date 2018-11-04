import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
    };
  }

  static propTypes = {
    groceries: PropTypes.instanceOf(Immutable.List),
  };

  onKeyPress = event => {
    if (event.key === 'Enter') {
      this.props.addGroceryItem({ checked: false, name: event.target.value });
      event.target.value = '';
    }
  };

  handleChange = event => {
    this.setState({ item: event.target.value });
  };

  render() {
    const { groceries } = this.props;
    const newItem = this.state.item;

    return (
      <div className="app">
        <h1>My groceries</h1>
        <input
          type="text"
          className="addInput"
          onKeyPress={this.onKeyPress}
          placeholder="Add an item..."
        />
        <ul>
          {groceries.map((item, i) => (
            <li key={i} className="item">
              <span className="title">
                <input
                  type="checkbox"
                  className="check"
                  onChange={() => this.props.checkedItem(item, i)}
                />
                <label>{item.name}</label>
              </span>
              <button className="btn-delete" onClick={() => this.props.deleteGroceryItem(i)}>
                Delete
              </button>
              <input
                type="text"
                className="updateInput"
                onChange={this.handleChange}
                placeholder="Change this item..."
              />
              <button className="btn-edit" onClick={() => this.props.updateGroceryItem(newItem, i)}>
                Update
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
