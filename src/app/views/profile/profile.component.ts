import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Playlist } from 'src/app/models/Playlist'
import { PlaylistService } from 'src/app/services/playlist.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

    private _openTab: number = 1
    private _songs: Array<Song>
    private _playlists: Array<Playlist>
    private _user: User
    public meSubscribed: boolean = false

    constructor(
        private tokenStorage: TokenStorageService,
        private songService: SongService,
        private playlistService: PlaylistService,
        private userService: UserService,
        private route: ActivatedRoute
    ) {}

    //TODO: don't show [username] post a track on profile pages
    //TODO: when user don't have uploaded songs or playlists, show offer to create it
    //TODO: перевірка на те, чи існує юзернейм
    //TODO: якщо користувач переходить з профіля іншого користувача на свій профіль, то дані не оновлюються

    ngOnInit(): void {
        this.userService.getProfileByUsername(this.username).subscribe((data: User) => {
            this.user = data
            this.checkForSubscribing()
        }, err => console.log(err))
        this.songService.getSongsByUsername(this.username).subscribe((data: Array<Song>) => this._songs = data, err => console.log(err))
    }

    toggleTabs($tabNumber: number){
        this.openTab = $tabNumber;
    }

    public loadSongs () {
    }

    public loadPlaylists () {
        this.playlistService.getPlaylistsByUsername(this.username).subscribe(
            (data: Array<Playlist>) => this._playlists = data,
            err => console.log(err)
        )
    }

    public subscribe () {
        this.userService.subscribe(this.username).subscribe((data: User) => {
            this.user = data
            this.checkForSubscribing()
        }, err => console.log(err))
    }

    private checkForSubscribing () {
        this.meSubscribed = false
        this.user.subscribers.forEach(item => {
            if (item.username === this.currentUsername) {
                this.meSubscribed = true
            }
        })
    }

    get username () {
        return this.route.snapshot.params['username']
    }

    get currentUsername () {
        return this.tokenStorage.getUsername()
    }

    get user () {
        return this._user
    }

    set user (user: User) {
        this._user = user
    }

    get openTab () {
        return this._openTab
    }

    set openTab (openTab: number) {
        this._openTab = openTab
    }

    get songs () {
        return this._songs
    }

    get playlists () {
        return this._playlists
    }
}
