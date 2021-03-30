import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song';
import { SongLikes } from 'src/app/models/SongLikes';
import { PlayerService } from 'src/app/services/player.service';
import { SongService } from 'src/app/services/song.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
    selector: 'app-music-track',
    templateUrl: './music-track.component.html',
    styleUrls: ['./music-track.component.scss'],
})
export class MusicTrackComponent implements OnInit {

    private _playing: boolean = false
    @Input() song: Song

    constructor(
        private playerService: PlayerService,
        private songService: SongService,
        private tokenStorage: TokenStorageService
    ) {}

    ngOnInit(): void {
        //TODO: display duration like this 3:03 (now 3:3)
        this.playerService.queue.subscribe(value => {
            if (this.song.file === value[0].file) {
                this.playing = true
            } else {
                this.playing = false
            }
        })

        this.songService.getLikes(this.song.id, this.tokenStorage.getUsername()).subscribe(
            (data: SongLikes) => {
                this.song.likes = data.countOfLikes,
                this.song.meLiked = data.meLiked
            }
        )
    }

    get playing () {
        return this._playing
    }

    set playing (playing: boolean) {
        this._playing = playing
    }

    public play () {
        this.playerService.queue.next(new Array(this.song))
    }

    public like () {
        this.songService.updateLikes(this.song.id, this.tokenStorage.getUsername()).subscribe(
            (data: SongLikes) => {
                this.song.likes = data.countOfLikes
                this.song.meLiked = data.meLiked
            }
        )
    }
}
