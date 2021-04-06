import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

/**
 * Data source for the AdminTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class AdminUsersTableDataSource extends DataSource<User> {
    data: Array<User>;
    paginator: MatPaginator;
    sort: MatSort;

    constructor(private songService: UserService) {
        super();
        this.songService.getAllUsers().subscribe((data: Array<User>) => {
            this.data = data;
        });
    }

    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect(): Observable<Array<User>> {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            observableOf(this.data),
            this.paginator.page,
            this.sort.sortChange,
        ];

        return merge(...dataMutations).pipe(
            map(() => {
                return this.getPagedData(this.getSortedData([...this.data]));
            })
        );
    }

    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() {}

    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    private getPagedData(data: User[]) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    }

    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    private getSortedData(data: User[]) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'username':
                    return compare(a.username, b.username, isAsc);
                case 'email':
                    return compare(a.email, b.email, isAsc);
                case 'firstName':
                    return compare(a.firstName, b.firstName, isAsc);
                case 'lastName':
                    return compare(a.lastName.length, b.lastName.length, isAsc);
                case 'tracks':
                    return compare(a.tracks, b.tracks, isAsc);
                case 'avatar':
                    return compare(a.avatar.length, b.avatar.length, isAsc);
                case 'role':
                    return compare(a.role, b.role, isAsc);
                case 'subscribers':
                    return compare(
                        a.subscribers.length,
                        b.subscribers.length,
                        isAsc
                    );
                case 'subscriptions':
                    return compare(
                        a.subscriptions.length,
                        b.subscriptions.length,
                        isAsc
                    );
                case 'position':
                    return compare(a.id, b.id, isAsc);
                default:
                    return 0;
            }
        });
    }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
