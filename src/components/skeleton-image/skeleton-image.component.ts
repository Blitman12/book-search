import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/models';

@Component({
  selector: 'app-skeleton-image',
  templateUrl: './skeleton-image.component.html',
  styleUrls: ['./skeleton-image.component.scss'],
})
export class SkeletonImageComponent implements OnInit {
  @Input() book!: Book;

  public bookUrl = '';
  public isLoaded = false;

  constructor() {}

  ngOnInit(): void {
    this.bookUrl =
      this.book.isbn !== ''
        ? `https://covers.openlibrary.org/b/isbn/${this.book.isbn}-L.jpg?default=false`
        : 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg';
  }

  public onImgError(event: any): void {
    event.target.src =
      'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg';
  }

  public imageLoaded(): void {
    this.isLoaded = true;
  }
}
