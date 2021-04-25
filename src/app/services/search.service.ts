import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../configuration';

@Injectable({
    providedIn: 'root',
})
export class SearchService {

    private _searchQuery: string;

    constructor(
        private http: HttpClient
    ) {}

    public searchSongsByTitle (searchQuery: string) {
        return this.http.get(config.hostName + 'api/search/song-title/' + searchQuery)
    }

    public searchSongsByGenre (searchQuery: string) {
        return this.http.get(config.hostName + 'api/search/song-genre/' + searchQuery)
    }

    public searchUsersByUsername (searchQuery: string) {
        return this.http.get(config.hostName + 'api/search/user-username/' + searchQuery)
    }
    
    public get searchQuery(): string {
        return this._searchQuery;
    }
    public set searchQuery(value: string) {
        this._searchQuery = value;
    }
}
