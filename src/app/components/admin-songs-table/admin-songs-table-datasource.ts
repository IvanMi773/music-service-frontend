import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';

/**
 * Data source for the AdminSongsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class AdminSongsTableDataSource extends DataSource<Song> {
    data: Array<Song>;
    paginator: MatPaginator;
    sort: MatSort;

    constructor(
        private songService: SongService
    ) {
        super();
        this.songService.getAllSongs().subscribe((data: Array<Song>) => {
            this.data = data;
        });
    }

    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect(): Observable<Array<Song>> {
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
    private getPagedData(data: Song[]) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    }

    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    private getSortedData(data: Song[]) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'username':
                    return compare(a.username, b.username, isAsc);
                case 'name':
                    return compare(a.name, b.name, isAsc);
                case 'file':
                    return compare(a.file, b.file, isAsc);
                case 'likes':
                    return compare(a.likes.length, b.likes.length, isAsc);
                case 'genre':
                    return compare(a.genre, b.genre, isAsc);
                case 'duration':
                    return compare(a.duration, b.duration, isAsc);
                case 'position':
                    return compare(a.id, b.id, isAsc);
                default:
                    return 0;
            }
        });
    }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
