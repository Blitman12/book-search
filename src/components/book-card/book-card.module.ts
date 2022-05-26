import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SkeletonImageModule } from '../skeleton-image/skeleton-image.module';



@NgModule({
  declarations: [
    BookCardComponent
  ],
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule,
    SkeletonImageModule
  ],
  exports: [BookCardComponent]
})
export class BookCardModule { }
