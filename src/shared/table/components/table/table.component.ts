import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SimcardData } from 'src/features/dashboard/models/simcard-data.model';


@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    //
    @ViewChild(MatPaginator) paginator?: MatPaginator;

    text$: Observable<string>;

    //
    private _filter !: any;
    public get filter(): any {
        return this._filter;
    }
    public set filter(v: any) {
        console.log(v, "SET");
        this._filter = v;
    }

    //
    @Input() data?: Array<SimcardData>;
    @Input() displayedColumns?: string[];
    @Input() dateFormat?: string;
    @Input() pageSizeOptions?: number[];
    @Input() pageSize?: number;
    @Input() isStickyHeader?: boolean;

    //
    isLoading: boolean = false;
    dataSource = new MatTableDataSource<SimcardData>();

    constructor(
        private readonly _store: Store<{ text: string }>,
        private cd: ChangeDetectorRef
    ) {
        this.text$ = _store.pipe(select('text'));
    }

    //
    async ngOnInit(): Promise<void> {
        this.cd.detectChanges();
    }

    //
    ngAfterViewInit(): void {
        this.dataSource = new MatTableDataSource<SimcardData>(this.data);
        this.dataSource.paginator = this.paginator!;

        this.text$.pipe().subscribe(x =>
            this.dataSource.filter = x.trim().toLowerCase())
    }

    //
    public checkData(element: Element) {
        this.initFilterText();
        if (element instanceof Date)
            return true;
        else
            return false;
    }

    //
    public onSortData(event: Sort) {
        let data = this.dataSource.data.slice();
        if (event.active && event.direction !== '') {
            data = data.sort((a?: SimcardData, b?: SimcardData) => {
                const isAsc = event.direction === 'asc';
                switch (event.active) {
                    case 'ICCID': return this.compare(a!.ICCID!, b!.ICCID, isAsc);
                    case 'IMEI': return this.compare(a!.IMEI, b!.IMEI, isAsc);
                    case 'coverage': return this.compare(a!.coverage, b!.coverage, isAsc);
                    case 'model': return this.compare(a!.model, b!.model, isAsc);
                    case 'office': return this.compare(a!.office, b!.office, isAsc);
                    case 'platform': return this.compare(a!.platform, b!.platform, isAsc);
                    case 'subscribeDate': return this.compare(a!.subscribeDate, b!.subscribeDate, isAsc);
                    case 'suspendAt': return this.compare(a!.suspendAt, b!.suspendAt, isAsc);
                    default: return 0;
                }
            });
        }

        this.dataSource = new MatTableDataSource<SimcardData>(data);
        this.dataSource.paginator = this.paginator!;
    }

    //
    private compare(a?: string | Date | number, b?: string | Date | number, isAsc?: boolean) {
        return (a! < b! ? -1 : 1) * (isAsc ? 1 : -1);
    }

    private initFilterText() {
    }

}
