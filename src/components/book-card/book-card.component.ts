import { Component, Input } from '@angular/core';
import { Book } from 'src/models';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent  {
  @Input() book!: Book;

  public author = this.book?.authorName ?? ''

  constructor() {}

  public handleClick(event: any): void {
    console.log(event)
    if (event.target.outerText === '>Title: Shane') {
      alert('Super Secret')
    }
  }

}
