import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookSelectors } from './state/selectors';
import { BookActions } from './state';
import { Book } from 'src/models';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public searchForm!: FormGroup;
  public cp = 0;
  public books: Book[] = [];
  public isLoading = false;

  public get searchedBook(): AbstractControl | null {
    return this.searchForm.get('searchBook')
  }

  public constructor(
    private _formBuilder: FormBuilder,
    private _store: Store,
    private _bookSelectors: BookSelectors
  ) {}

  public ngOnInit(): void {
    this.searchForm = this._formBuilder.group({
      searchBook: ['', Validators.required]
    })
    this.searchForm.valueChanges.pipe(debounceTime(300)).subscribe(() => this.handleChange());
    this._bookSelectors.bookInfo$.subscribe(book => this.books = book);
    this._bookSelectors.isLoading$.subscribe(loading => this.isLoading = loading)
  }

  private handleChange(): void {
    if (this.searchedBook?.value.length === 0) {
      this._store.dispatch(BookActions.resetBookSearch())
    } else {
      this._store.dispatch(BookActions.bookSearchUpdate({searched: this.searchedBook?.value}))
    }
  }
}
