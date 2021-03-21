import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song';
import { QueueService } from 'src/app/services/queue.service';

@Component({
    selector: 'app-playlist-song',
    templateUrl: './playlist-song.component.html',
    styleUrls: ['./playlist-song.component.scss'],
})
export class PlaylistSongComponent implements OnInit {

    private _playlist: Array<Song>
    private _currentSong: Song

    constructor(
        public queueService: QueueService
    ) {}

    // TODO: paint in blue active song (song name already, need number and duration)
    ngOnInit(): void {}

    get playlist () {
        return this._playlist
    }

    @Input() set playlist (playlist: Array<Song>) {
        this._playlist = playlist
    }

    get currentSong () {
        return this._currentSong
    }

    set currentSong (song: Song) {
        this._currentSong = song
    }
}
