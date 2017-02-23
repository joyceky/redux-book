export function selectBook(book) {
// this is an ActionCreator. It needs to return an action,
// an object with a type property
// actions always return a type, and sometimes a payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
