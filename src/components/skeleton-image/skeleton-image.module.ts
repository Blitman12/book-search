import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonImageComponent } from './skeleton-image.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [
    SkeletonImageComponent,
  ],
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
    SkeletonImageComponent
  ]
})
export class SkeletonImageModule { }
