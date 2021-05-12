import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from 'src/app/models/song';
import { SearchService } from 'src/app/services/search.service';

@Component({
    selector: 'app-search-song-genre',
    templateUrl: './search-song-genre.component.html',
    styleUrls: ['./search-song-genre.component.scss'],
})
export class SearchSongGenreComponent implements OnInit {

    private _searchRes: Array<Song>;
    private _searchQuery: string

    constructor(
        private searchService: SearchService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.searchRes = new Array<Song>()
        this.route.params.subscribe(params => {
            this.searchQuery = params['searchQuery']
            this.searchService.searchSongsByGenre(this.searchQuery).subscribe((data: Array<Song>) => this.searchRes = data)
        })
    }

    public get searchRes(): Array<Song> {
        return this._searchRes;
    }
    public set searchRes(value: Array<Song>) {
        this._searchRes = value;
    }
    get searchQuery () {
        return this._searchQuery
    }

    set searchQuery (search: string) {
        this._searchQuery = search
    }
}
