import { createReducer, on, Action } from "@ngrx/store";
import { Book } from "src/models";
import { BookActions } from ".";


export const featureName = 'BookSlice';

export interface BookState {
    books: Book[],
    searched: string,
    isLoading: boolean
};

export const initialState: BookState = {
    books: [],
    searched: '',
    isLoading: false
};

const bookReducer = createReducer(
    initialState,
    on(BookActions.resetBookSearch, state => ({
        ...initialState
    })),
    on(BookActions.bookSearchUpdate, (state, {searched: _searched}) => ({
        ...state,
        searched: _searched
    })),
    on(BookActions.updateBooksArray, (state, {books: _books}) => ({
        ...state,
        books: _books
    })),
    on(BookActions.isLoading, (state, {isLoading: _isLoading}) => ({
        ...state,
        isLoading: _isLoading
    }))
)

export function reducer(state: BookState, action: Action): BookState {
    return bookReducer(state, action)
}
