import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, take, tap } from 'rxjs';

import { Book } from 'src/models';
import { BookService } from 'src/services/book-search/book-service';
import { BookActions } from '.';

@Injectable({
  providedIn: 'root',
})
export class BookEffects {
  bookEffect$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(BookActions.bookSearchUpdate),
        tap((action) => this.handleSearch(action.searched))
      ),
    { dispatch: false }
  );

  public constructor(
    private _actions$: Actions,
    private _store: Store,
    private _bookService: BookService
  ) {}

  private handleSearch(action: string): void {
    this._store.dispatch(BookActions.isLoading({isLoading: true}))
    this._bookService
      .getBooks(action)
      .pipe(take(1))
      .subscribe((bookResponse) => {
        const books = new Array<Book>();
        bookResponse.docs.forEach((doc) => {
          books.push({
            authorName: doc.author_name,
            firstPublishYear: doc.first_publish_year,
            title: doc.title,
            isbn: doc?.isbn ? doc.isbn[0] : ''
          } as Book);
        });
        this._store.dispatch(BookActions.updateBooksArray({ books }))
        this._store.dispatch(BookActions.isLoading({ isLoading: false }))
      });
  }
}
