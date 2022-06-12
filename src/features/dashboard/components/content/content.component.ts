import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TableModel } from 'src/shared/table/models/table.model';
import { SimcardData } from '../../models/simcard-data.model';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
    isLoading: boolean = false;

    dataSource = new MatTableDataSource<SimcardData>();

    @ViewChild(MatPaginator) paginator?: MatPaginator;

    displayedColumns: string[] = [
        'ICCID',
        'IMEI',
        'subscribeDate',
        'suspendAt',
        'coverage',
        'office',
        'platform',
        'model',
        'action'
    ];

    public data?: SimcardData[];

    constructor() { }

    ngOnInit(): void {
        this.isLoading = true;

        this.data = [
            { ICCID: "31245435353453000", IMEI: "3245435353453000", subscribeDate: new Date(324234), suspendAt: new Date(), coverage: "UK", office: "UK", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32245435353453000", IMEI: "3245435353453000", subscribeDate: new Date(3434), suspendAt: new Date(), coverage: "UK", office: "UK", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "33245435353453000", IMEI: "3245435353453000", subscribeDate: new Date(324234), suspendAt: new Date(), coverage: "UK", office: "UK", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "34245435353453000", IMEI: "3245435353453000", subscribeDate: new Date(2342), suspendAt: new Date(), coverage: "UK", office: "UK", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "35245435353453000", IMEI: "3245435353453000", subscribeDate: new Date(44545454), suspendAt: new Date(), coverage: "UK", office: "UK", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "36245435353453000", IMEI: "3245435353453000", subscribeDate: new Date(new Date().getTime() + 654564564654564), suspendAt: new Date(), coverage: "UK", office: "UK", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "37245435353453000", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "TR", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "38245435353453000", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "TR", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "39245435353453000", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "TR", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "13245435353453000", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "TR", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "13245435353453000", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "TR", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "23245435353453000", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "TR", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "33245435353453000", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "TR", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "43245435353453000", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "TR", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "53245435353453000", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "TR", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "63245435353453000", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(new Date().getTime() + 654564564654564), coverage: "UK", office: "UK", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "73245435353453000", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "DE", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "83245435353453000", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "DE", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "93245435353453000", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "DE", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32454353534530001", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "DE", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32454353534530002", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "DE", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32454353534530003", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "DE", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32454353534530004", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "DE", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32454353534530005", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "DE", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32454353534530006", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "DE", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32454353534530007", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "DE", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32454353534530008", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "FR", office: "UK", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32454353534530009", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "FR", office: "UK", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32454353534530000", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "FR", office: "UK", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32454353534530010", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "FR", office: "UK", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32454353534530020", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "FR", office: "UK", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32454353534530030", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "FR", office: "UK", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32454353534530040", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "FR", office: "UK", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32454353534530050", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "FR", office: "UK", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32454353534530060", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "FR", office: "UK", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32454353534530070", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "FR", office: "UK", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32454353534530080", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "UK", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32454353534530090", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "UK", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32454353534530000", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "UK", platform: "GPSLive", model: "DB2 Advanced" },
            { ICCID: "32454353534530100", IMEI: "3245435353453000", subscribeDate: new Date(), suspendAt: new Date(), coverage: "UK", office: "UK", platform: "GPSLive", model: "DB2 Advanced" },
        ];

        this.isLoading = false;
    }

    ngAfterViewInit() {


        this.dataSource = new MatTableDataSource<SimcardData>(this.data);
        this.dataSource.paginator = this.paginator!;


    }


}
