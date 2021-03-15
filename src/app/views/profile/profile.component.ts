import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Playlist } from 'src/app/models/playlist'
import { PlaylistService } from 'src/app/services/playlist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

    private _username: string
    private _openTab: number = 1
    private _songs: Array<Song>
    private _playlists: Array<Playlist>

    constructor(
        private tokenStorage: TokenStorageService,
        private songService: SongService,
        private playlistService: PlaylistService,
        private route: ActivatedRoute
    ) {}

    //TODO: don't show [username] post a track on profile pages
    //TODO: when user don't have uploaded songs or playlists, show offer to create it

    ngOnInit(): void {
        this.username = this.route.snapshot.params['username']
    }

    toggleTabs($tabNumber: number){
        this.openTab = $tabNumber;
    }

    public loadSongs () {
        this.songService.getSongsByUsername(this.username).subscribe((data: Array<Song>) => this._songs = data, err => console.log(err))
    }

    public loadPlaylists () {
        this.playlistService.getPlaylistsByUsername(this.username).subscribe(
            (data: Array<Playlist>) => this._playlists = data,
            err => console.log(err)
        )
    }

    get username () {
        return this._username
    }

    set username (username: string) {
        this._username = username
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
