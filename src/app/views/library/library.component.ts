import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/models/Playlist';
import { Song } from 'src/app/models/song';
import { User } from 'src/app/models/User';
import { UserSubscriptions } from 'src/app/models/UserSubscriptions';
import { PlaylistService } from 'src/app/services/playlist.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {

    private _resentlyPlayedSongs: Array<Song>
    private _likedSongs: Array<Song>
    private _playlists: Array<Playlist>
    private _subscriptions: Array<User>

    constructor(
        private playlistService: PlaylistService,
        private tokenStorage: TokenStorageService,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        //TODO: move to components cycles
        let historyPlaylistId: number
        let likedPlaylistId: number

        this.playlistService.getPlaylistsByUsername(this.tokenStorage.getUsername()).subscribe((data: Array<Playlist>) => {
            this._playlists = data

            data.forEach(item => {
                if (item.title === 'History') {
                     historyPlaylistId = item.id;
                }
                if (item.title === 'Liked') {
                    likedPlaylistId = item.id
                }
            })

            this.playlistService.getPlaylistById(historyPlaylistId).subscribe((data: Playlist) => this._resentlyPlayedSongs = data.songs)
            this.playlistService.getPlaylistById(likedPlaylistId).subscribe((data: Playlist) => this._likedSongs = data.songs)
        })

        this.userService.getProfileByUsername(this.tokenStorage.getUsername()).subscribe((data: User) => {
            this._subscriptions = data.subscriptions
        })
    }

    get resentlyPlayedSongs () {
        return this._resentlyPlayedSongs
    }

    get likedSongs () {
        return this._likedSongs
    }

    get playlists () {
        return this._playlists
    }

    get subscriptions () {
        return this._subscriptions
    }
}
