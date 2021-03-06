import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    private _songs

    constructor(
        private tokenStorage: TokenStorageService,
        private songService: SongService
    ) {}

    ngOnInit(): void {
        this.songService.getAllSongs().subscribe(data => this._songs = data, err => console.log(err))
    }

    get songs () {
        return this._songs
    }

}
