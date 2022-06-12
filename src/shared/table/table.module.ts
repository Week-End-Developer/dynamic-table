import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { StoreModule } from '@ngrx/store';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
    declarations: [
        TableComponent,
    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatIconModule,
        MatSortModule,
        MatButtonModule
    ],
    exports: [
        TableComponent
    ],
    providers: [],
})
export class TableModule { }