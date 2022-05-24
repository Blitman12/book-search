import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, tap } from 'rxjs';
import { Book, BookResponse } from 'src/models';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private bookURL = 'https://openlibrary.org/search.json?q='

    constructor(private _http: HttpClient) {}

    public getBooks(searched: string): Observable<BookResponse> {
        return this._http.get<BookResponse>(this.bookURL + searched)
    }
}
