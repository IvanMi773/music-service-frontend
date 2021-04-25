import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { SearchService } from 'src/app/services/search.service';

@Component({
    selector: 'app-search-user-name',
    templateUrl: './search-user-name.component.html',
    styleUrls: ['./search-user-name.component.scss'],
})
export class SearchUserNameComponent implements OnInit {

    private _searchRes: Array<User>;
    private _searchQuery: string

    constructor(
        private searchService: SearchService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.searchQuery = params['searchQuery']
            this.searchService.searchUsersByUsername(this.searchQuery).subscribe((data: Array<User>) => this.searchRes = data)
        })
    }

    public get searchRes(): Array<User> {
        return this._searchRes;
    }
    public set searchRes(value: Array<User>) {
        this._searchRes = value;
    }
    get searchQuery () {
        return this._searchQuery
    }

    set searchQuery (search: string) {
        this._searchQuery = search
    }
}
