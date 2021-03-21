import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playlist } from 'src/app/models/playlist';
import { Song } from 'src/app/models/song';
import { PlayerService } from 'src/app/services/player.service';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
    selector: 'app-playlist-view',
    templateUrl: './playlist-view.component.html',
    styleUrls: ['./playlist-view.component.scss'],
})
export class PlaylistViewComponent implements OnInit {

    private _playlistId: number
    private _playlist: Playlist
    private _isPlaying: boolean = false
    public currentSong: Song

    constructor(
        private playlistService: PlaylistService,
        private route: ActivatedRoute,
        private playerService: PlayerService
    ) {}

    ngOnInit(): void {
        //TODO: get from backend user and year of playlist
        this.playlistId = this.route.snapshot.params['id']

        this.playlistService.getPlaylistById(this.playlistId).subscribe(
            (data: Playlist) => {
                this.playlist = data
                this.playlist.songs.forEach(song => {
                    song.duration = 5.43
                });
            },
            err => console.log(err)
        )
    }

    public play () {
        this.isPlaying = !this.isPlaying
        this.playerService.queue.next(this.playlist.songs)
    }

    get playlistId () {
        return this._playlistId
    }

    set playlistId (playlistId: number) {
        this._playlistId = playlistId
    }

    get playlist () {
        return this._playlist
    }

    set playlist (playlist: Playlist) {
        this._playlist = playlist
    }

    get isPlaying () {
        return this._isPlaying
    }

    set isPlaying (isPlaying: boolean) {
        this._isPlaying = isPlaying
    }
}
