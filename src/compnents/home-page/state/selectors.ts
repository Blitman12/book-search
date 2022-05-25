
import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import * as fromReducer from './reducer';

const getBookState = createFeatureSelector<fromReducer.BookState>(fromReducer.featureName);

export const getBookInfo = createSelector(getBookState, state => state.books);

export const getSearchedInfo = createSelector(getBookState, state => state.searched);

export const getLoadingInfo = createSelector(getBookState, state => state.isLoading);


@Injectable({
    providedIn: 'root'
})
export class BookSelectors {
    public bookInfo$ = this._store.select(getBookInfo);
    public searchedInfo$ = this._store.select(getSearchedInfo);
    public isLoading$ = this._store.select(getLoadingInfo);
    public constructor(private _store: Store) {}
}
