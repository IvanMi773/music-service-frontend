import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Search } from 'src/app/models/Search';
import { SearchService } from 'src/app/services/search.service';

@Component({
    selector: 'app-search-view',
    templateUrl: './search-view.component.html',
    styleUrls: ['./search-view.component.scss'],
})
export class SearchViewComponent implements OnInit {

    private _openTab: number = 1
    private _searchRes: Search
    private _searchQuery: string

    constructor(
        private searchService: SearchService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.searchQuery = params['searchQuery']
            this.searchService.search(this.searchQuery).subscribe((data: Search) => this.searchRes = data)
        })
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

    get searchRes () {
        return this._searchRes
    }

    set searchRes (search: Search) {
        this._searchRes = search
    }

    get searchQuery () {
        return this._searchQuery
    }

    set searchQuery (search: string) {
        this._searchQuery = search
    }
}
