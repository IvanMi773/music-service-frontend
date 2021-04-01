import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song';
import { SongLikes } from 'src/app/models/SongLikes';
import { User } from 'src/app/models/User';
import { PlayerService } from 'src/app/services/player.service';
import { SongService } from 'src/app/services/song.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-music-track',
    templateUrl: './music-track.component.html',
    styleUrls: ['./music-track.component.scss'],
})
export class MusicTrackComponent implements OnInit {

    private _playing: boolean = false
    @Input() song: Song
    private _avatar: string

    constructor(
        private playerService: PlayerService,
        private songService: SongService,
        private tokenStorage: TokenStorageService,
        private userService: UserService
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

        this.userService.getProfileByUsername(this.tokenStorage.getUsername()).subscribe((data: User) => this._avatar = data.avatar)
    }

    get playing () {
        return this._playing
    }

    get avatar () {
        return this._avatar
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
