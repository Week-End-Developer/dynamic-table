import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { filterAction } from 'src/root/state/actions';

interface AppState {
    message: string;
}

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

    //
    @Input() displayedColumns?: string[];

    columnNameList?: string = "";


    //
    constructor(
        private _store: Store
    ) {
    }

    //
    public ngOnInit(): void {

        for (let i = 0; i < this.displayedColumns!.length; i++) {
            const element = this.displayedColumns![i];
            if (this.displayedColumns?.length != i + 1) {
                this.columnNameList += element + ',' + ' ';
            } else {
                this.columnNameList += element
            }
        }

    }

    //
    filterChange(text: string) {
        this._store.dispatch(filterAction({ text: text }))
    }

    //
    onChipEditClick(e: Event) {
        e.stopPropagation();
        e.preventDefault();
        console.log('click inside chip');
    }
}
