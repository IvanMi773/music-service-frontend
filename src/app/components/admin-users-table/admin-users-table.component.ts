import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import {
    AdminUsersTableDataSource
} from './admin-users-table-datasource';

@Component({
    selector: 'app-admin-users-table',
    templateUrl: './admin-users-table.component.html',
    styleUrls: ['./admin-users-table.component.scss'],
})
export class AdminUsersTableComponent implements AfterViewInit, OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<User>;
    dataSource: AdminUsersTableDataSource;

    displayedColumns = [
        'position',
        'username',
        'email',
        'firstName',
        'lastName',
        'subscribers',
        'subscriptions',
        'tracks',
        'avatar',
        'role'
    ];

    constructor (private userService: UserService) {}

    ngOnInit() {
        this.dataSource = new AdminUsersTableDataSource(this.userService);
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }

    // public deleteUser (user: User) {
    //     if (confirm('Do you realy want to delete user?')) {
    //         this.userService.delete(user.username).subscribe(data => {

    //             this.userService.getAllUsers().subscribe((data: Array<User>) => {
    //                 this.dataSource.data = data
    //                 this.table.renderRows()
    //                 window.location.reload()
    //             })
    //         })
    //     }
    // }
}
