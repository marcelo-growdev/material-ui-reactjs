import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

interface Book {
  bookId: number;
  title: string;
}

const booksAdapter = createEntityAdapter<Book>({
  selectId: (book) => book.bookId,
});

export const { selectAll, selectById } = booksAdapter.getSelectors(
  (state: any) => state.books
);

const booksSlice = createSlice({
  name: 'books',
  initialState: booksAdapter.getInitialState(),
  reducers: {
    bookAdded: booksAdapter.addOne,
    booksReceived(state, action) {
      booksAdapter.setAll(state, action.payload.books);
    },
  },
});

export const { bookAdded, booksReceived } = booksSlice.actions;

export default booksSlice.reducer;
