 /*
How to know if a component should be a containers
containers are aware of state
containers should be the most parent container that cares about the state

whenever application state changes, this container will rerender bc of redux connect
*/

import React, { Component } from 'react';
// Glue between react and redux
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
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

// redux connect takes a function and a component and creates a container
export default connect(mapStateToProps)(BookList);
