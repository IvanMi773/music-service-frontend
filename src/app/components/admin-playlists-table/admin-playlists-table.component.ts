import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Playlist } from 'src/app/models/Playlist';
import { PlaylistService } from 'src/app/services/playlist.service';
import {
    AdminPlaylistsTableDataSource
} from './admin-playlists-table-datasource';

@Component({
    selector: 'app-admin-playlists-table',
    templateUrl: './admin-playlists-table.component.html',
    styleUrls: ['./admin-playlists-table.component.scss'],
})
export class AdminPlaylistsTableComponent implements AfterViewInit, OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<Playlist>;
    dataSource: AdminPlaylistsTableDataSource;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = [
        'position',
        'title',
        'photo',
        'duration',
        'songs',
        'user'
    ];

    constructor (private playlistService: PlaylistService) {}

    ngOnInit() {
        this.dataSource = new AdminPlaylistsTableDataSource(this.playlistService);
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }

    // public deletePlaylist (playlist: Playlist) {
    //     if (confirm('Do you realy want to delete playlist?')) {
    //         this.playlistService.deleteById(playlist.id).subscribe(data => {

    //             this.userService.getAllUsers().subscribe((data: Array<User>) => {
    //                 this.dataSource.data = data
    //                 this.table.renderRows()
    //                 window.location.reload()
    //             })
    //         })
    //     }
    // }
}
