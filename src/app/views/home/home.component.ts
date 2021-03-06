import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    private _songs: Array<Song>
    private _isPlaying: boolean = false

    constructor(
        private songService: SongService,
    ) {}

    ngOnInit(): void {
        this.songService.getAllSongs().subscribe((data: Array<Song>) => this._songs = data, err => console.log(err))
    }

    get songs () {
        return this._songs
    }

    get isPlaying () {
        return this._isPlaying
    }

    set isPlaying (isPlaying: boolean) {
        this._isPlaying = isPlaying
    }
}
