import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/Genre';
import { Playlist } from 'src/app/models/Playlist';
import { Song } from 'src/app/models/song';
import { User } from 'src/app/models/User';
import { GenreService } from 'src/app/services/genre.service';
import { PlaylistService } from 'src/app/services/playlist.service';
import { SongService } from 'src/app/services/song.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

    private _openTab: number = 1
    private _users: Array<User>;
    private _songs: Array<Song>;
    private _genres: Array<Genre>;
    private _playlists: Array<Playlist>;

    constructor(
        private userService: UserService,
        private songService: SongService,
        private genreService: GenreService,
        private playlistService: PlaylistService
    ) {}

    ngOnInit(): void {
        this.userService.getAllUsers().subscribe((data: Array<User>) => {
            this.users = data
        })
    }

    public loadSongs () {
        this.songService.getAllSongs().subscribe((data: Array<Song>) => {
            this.songs = data
        })
    }

    public loadGenres () {
        this.genreService.getAllGenres().subscribe((data: Array<Genre>) => {
            this.genres = data
        })
    }

    public loadPlaylists () {
        this.playlistService.getAllPlaylists().subscribe((data: Array<Playlist>) => {
            this.playlists = data
        })
    }

    public toggleTabs ($tabNumber: number){
        this.openTab = $tabNumber;
    }

    get openTab () {
        return this._openTab
    }

    set openTab (openTab: number) {
        this._openTab = openTab
    }

    public get users(): Array<User> {
        return this._users;
    }
    public set users(value: Array<User>) {
        this._users = value;
    }
    public get songs(): Array<Song> {
        return this._songs;
    }
    public set songs(value: Array<Song>) {
        this._songs = value;
    }
    public get genres(): Array<Genre> {
        return this._genres;
    }
    public set genres(value: Array<Genre>) {
        this._genres = value;
    }
    public get playlists(): Array<Playlist> {
        return this._playlists;
    }
    public set playlists(value: Array<Playlist>) {
        this._playlists = value;
    }
}
