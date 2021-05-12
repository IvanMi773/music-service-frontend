import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Playlist } from 'src/app/models/Playlist';
import { Song } from 'src/app/models/song';
import { SongLikes } from 'src/app/models/SongLikes';
import { User } from 'src/app/models/User';
import { PlayerService } from 'src/app/services/player.service';
import { PlaylistService } from 'src/app/services/playlist.service';
import { QueueService } from 'src/app/services/queue.service';
import { SongService } from 'src/app/services/song.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import config from '../../configuration'

@Component({
    selector: 'app-music-track',
    templateUrl: './music-track.component.html',
    styleUrls: ['./music-track.component.scss'],
})
export class MusicTrackComponent implements OnInit {

    @Input() song: Song
    @Output() onDeletedSong = new EventEmitter<boolean>()
    private _avatar: string = 'default_user.png'
    private _meLiked: boolean = false
    private _playlists: Array<Playlist> = new Array<Playlist>();
    public playlistForm
    private _lengthInMinutes: number;
    private _lengthInSeconds: number | string;

    //TODO: change color of search tabs
    //TODO: songs duration in playlist in admin page

    constructor(
        private playerService: PlayerService,
        private songService: SongService,
        private tokenStorage: TokenStorageService,
        private userService: UserService,
        private queueService: QueueService,
        private playlistService: PlaylistService,
    ) {}

    ngOnInit(): void {
        this.userService.getProfileByUsername(this.song.username).subscribe((data: User) => this._avatar = data.avatar)
        this.updateMeLiked()

        this.playlistService.getPlaylistsByUsername(this.currentUsername).subscribe((data: Array<Playlist>) => {
            data.forEach(item => {
                if (item.state !== "TECHNICAL") {
                    this.playlists.push(item)
                }
            })
        })

        this.lengthInMinutes = (this.song.duration - (this.song.duration % 60)) / 60
        this.lengthInSeconds = this.song.duration % 60
        this.lengthInSeconds = this.lengthInSeconds < 10 ? '0' + this.lengthInSeconds : this.lengthInSeconds
    }

    public check (): boolean {
        return !this.queueService?.queue?.some(item => item.file === this.song.file)
    }

    public get lengthInMinutes(): number {
        return this._lengthInMinutes;
    }
    public set lengthInMinutes(value: number) {
        this._lengthInMinutes = value;
    }
    public get lengthInSeconds(): number | string {
        return this._lengthInSeconds;
    }
    public set lengthInSeconds(value: number | string) {
        this._lengthInSeconds = value;
    }
    get avatar () {
        return this._avatar
    }

    get meLiked () {
        return this._meLiked
    }

    get hostName () {
        return config.hostName
    }

    get currentUsername () {
        return this.tokenStorage.getUsername()
    }
    public get playlists(): Array<Playlist> {
        return this._playlists;
    }
    public set playlists(value: Array<Playlist>) {
        this._playlists = value;
    }

    public deleteSong () {
        if (confirm('Are you shure you want to delete song?')) {
            this.songService.deleteSong(this.song.id).subscribe(data => this.onDeletedSong.emit(true))
        }
    }

    public play () {
        this.playerService.clearQueue.next(true)
        this.playerService.queue.next(new Array(this.song))
    }

    public like () {
        this._meLiked = !this._meLiked

        this.songService.updateLikes(this.song.id, this.tokenStorage.getUsername()).subscribe(
            (data: SongLikes) => {
                this.song.likes = data.likes
                this.updateMeLiked()
            }
        )
    }

    public addToPlaylist (playlistId: any) {
        this.songService.saveSongToPlaylist(this.song.id, playlistId).subscribe(data => {
            console.log(data)
        })
    }

    public addToQueue () {
        this.playerService.queue.next(new Array(this.song))
    }

    private updateMeLiked () {
        this._meLiked = this.song.likes.filter(u => u.username === this.tokenStorage.getUsername()).length > 0
    }
}
