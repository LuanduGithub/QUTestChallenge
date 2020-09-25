import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { FilmRoutingModule } from './film-routing.module';

import { FilmComponent } from './film.component';
import { ComponentsModule } from '../../components/components.module';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatDividerModule } from '@angular/material/divider';

import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FilmRoutingModule,
    ComponentsModule,
    MatGridListModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule
  ],
  declarations: [FilmComponent],
  bootstrap: [FilmComponent]
})
export class FilmModule { }
