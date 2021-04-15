import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Genre } from 'src/app/models/Genre';
import { GenreService } from 'src/app/services/genre.service';
import {
    AdminGenresTableDataSource
} from './admin-genres-table-datasource';

@Component({
    selector: 'app-admin-genres-table',
    templateUrl: './admin-genres-table.component.html',
    styleUrls: ['./admin-genres-table.component.scss'],
})
export class AdminGenresTableComponent implements AfterViewInit, OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<Genre>;
    dataSource: AdminGenresTableDataSource;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'name'];

    constructor (private genreService: GenreService) {}

    ngOnInit() {
        this.dataSource = new AdminGenresTableDataSource(this.genreService);
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }

    // public deleteGenre (genre: Genre) {
    //     if (confirm('Do you realy want to delete this genre?')) {
    //         this.genreService.delete().subscribe(data => {

    //             this.userService.getAllUsers().subscribe((data: Array<User>) => {
    //                 this.dataSource.data = data
    //                 this.table.renderRows()
    //                 window.location.reload()
    //             })
    //         })
    //     }
    // }
}
