import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SearchService {

    private _searchQuery: string;

    constructor(
        private http: HttpClient
    ) {}

    public searchSongsByTitle (searchQuery: string): any {
        return this.http.get(environment.apiUrl + 'api/search/song-title/' + searchQuery)
    }

    public searchSongsByGenre (searchQuery: string): any {
        return this.http.get(environment.apiUrl + 'api/search/song-genre/' + searchQuery)
    }

    public searchUsersByUsername (searchQuery: string): any {
        return this.http.get(environment.apiUrl + 'api/search/user-username/' + searchQuery)
    }

    public get searchQuery (): string {
        return this._searchQuery;
    }

    public set searchQuery (value: string) {
        this._searchQuery = value;
    }
}
