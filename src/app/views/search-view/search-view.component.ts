import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
    selector: 'app-search-view',
    templateUrl: './search-view.component.html',
    styleUrls: ['./search-view.component.scss'],
})
export class SearchViewComponent implements OnInit {

    private _openTab: number = 1
    private _searchQuery: string

    constructor(
        public router: Router,
        public searchService: SearchService
    ) {}

    ngOnInit(): void {
    }

    toggleTabs($tabNumber: number){
        this.openTab = $tabNumber;
    }

    get openTab () {
        return this._openTab
    }

    set openTab (openTab: number) {
        this._openTab = openTab
    }
    get searchQuery () {
        return this._searchQuery
    }

    set searchQuery (search: string) {
        this._searchQuery = search
    }
}
