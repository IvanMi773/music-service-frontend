import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../configuration';

@Injectable({
    providedIn: 'root',
})
export class SearchService {

    constructor(
        private http: HttpClient
    ) {}

    public search (searchQuery: string) {
        return this.http.get(config.hostName + 'api/search/' + searchQuery)
    }
}
