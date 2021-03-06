import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TableComponent } from './table/table.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SplitPipe } from './../core/pipes/split.pipe';
import { CharactersComponent } from './characters/characters.component';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatRadioModule,
        MatSnackBarModule,
        MatTableModule,
        MatButtonModule,
        MatTooltipModule,
        MatSortModule
    ],
    declarations: [
        SplitPipe,
        FooterComponent,
        HeaderComponent,
        SpinnerComponent,
        TableComponent,
        CharactersComponent
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        SpinnerComponent,
        TableComponent,
        CharactersComponent
    ],
    providers: []
})
export class ComponentsModule {
}
