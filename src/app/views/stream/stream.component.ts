import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';

@Component({
    selector: 'app-stream',
    templateUrl: './stream.component.html',
    styleUrls: ['./stream.component.scss'],
})
export class StreamComponent implements OnInit {

    private _songs = Array<Song>()

    constructor(
        private songService: SongService
    ) {}

    ngOnInit(): void {
        this.songService.getSubscriptionsSongs().subscribe((data: Array<Song>) => this.songs = data)
    }

    get songs () {
        return this._songs
    }

    set songs (songs: Array<Song>) {
        this._songs = songs
    }
}
