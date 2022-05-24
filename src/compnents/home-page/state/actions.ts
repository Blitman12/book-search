import { createAction, props } from "@ngrx/store";
import { Book as Book } from "src/models";


export const bookSearchUpdate = createAction('[Home Page] Search Book Bar Value Changed', props<{searched: string}>());

export const updateBooksArray = createAction('[Home Page]', props<{books: Book[]}>())

export const resetBookSearch = createAction('[Home Page] Reset Searched Books');

export const isLoading = createAction('[Home Page] Is Loading', props<{isLoading: boolean}>());
