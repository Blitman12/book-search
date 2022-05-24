import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { HomePageComponent } from './home-page.component';
import * as fromFeature from './state/reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './state/effect';
import { BookCardModule } from '../book-card/book-card.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BookCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    StoreModule.forFeature(fromFeature.featureName, fromFeature.reducer),
    EffectsModule.forFeature([BookEffects])
  ]
})
export class HomePageModule { }
