 /*
How to know if a component should be a containers
containers are aware of state
containers should be the most parent container that cares about the state

whenever application state changes, this container will rerender bc of redux connect
*/

import React, { Component } from 'react';
// Glue between react and redux
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
// take state as an argument, whatever is returned will show up as props inside book list
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// redux connect takes a function and a component and creates a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
