import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/models';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() book!: Book
  public bookUrl = '';

  constructor() { }

  ngOnInit(): void {
    this.bookUrl = this.book.isbn !== '' ? `https://covers.openlibrary.org/b/isbn/${this.book.isbn}-M.jpg` : 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg'
  }
}
