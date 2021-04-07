import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Song } from 'src/app/models/song';
import { SongLikes } from 'src/app/models/SongLikes';
import { User } from 'src/app/models/User';
import { PlayerService } from 'src/app/services/player.service';
import { QueueService } from 'src/app/services/queue.service';
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
    private _avatar: string = 'default_user.png'
    private _meLiked: boolean = false

    constructor(
        private playerService: PlayerService,
        private songService: SongService,
        private tokenStorage: TokenStorageService,
        private userService: UserService,
        public queueService: QueueService
    ) {}

    ngOnInit(): void {
        //TODO: display duration like this 3:03 (now 3:3)
        // this.playerService.queue.subscribe(value => {
        //     if (this.song.file === value[0].file) {
        //         this.playing = true
        //     } else {
        //         this.playing = false
        //     }
        // })

        // this.playing = false
        // if (this.song.file === this.queueService.queue[0].file) {
        //     this.playing = true
        //     this.song.file
        // }
        // queueService.queue.some(item => item.file === song.file)
        this.userService.getProfileByUsername(this.song.username).subscribe((data: User) => this._avatar = data.avatar)
        this.updateMeLiked()
    }

    public check (): boolean {
        return !this.queueService.queue.some(item => item.file === this.song.file)
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

    get meLiked () {
        return this._meLiked
    }

    get currentUsername () {
        return this.tokenStorage.getUsername()
    }

    public deleteSong () {
        this.songService.deleteSong(this.song.id).subscribe(data => console.log(data))
    }

    public play () {
        this.playerService.clearQueue.next(true)
        this.playerService.queue.next(new Array(this.song))
    }

    public like () {
        this.songService.updateLikes(this.song.id, this.tokenStorage.getUsername()).subscribe(
            (data: SongLikes) => {
                this.song.likes = data.likes
                this.updateMeLiked()
            }
        )
    }

    public addToQueue () {
        this.playerService.queue.next(new Array(this.song))
    }

    private updateMeLiked () {
        this._meLiked = this.song.likes.filter(u => u.username === this.tokenStorage.getUsername()).length > 0
    }
}
