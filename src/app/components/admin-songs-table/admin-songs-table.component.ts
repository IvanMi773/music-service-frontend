import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';
import {
    AdminSongsTableDataSource,
} from './admin-songs-table-datasource';

@Component({
    selector: 'app-admin-songs-table',
    templateUrl: './admin-songs-table.component.html',
    styleUrls: ['./admin-songs-table.component.scss'],
})
export class AdminSongsTableComponent implements AfterViewInit, OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<Song>;
    dataSource: AdminSongsTableDataSource;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = [
        'position',
        'username',
        'name',
        'file',
        'likes',
        'genre',
        'duration'
    ];

    constructor(
        private songService: SongService,
    ) {}

    ngOnInit() {
        this.dataSource = new AdminSongsTableDataSource(this.songService);
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }
}
