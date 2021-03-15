import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playlist } from 'src/app/models/playlist';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
    selector: 'app-playlist-view',
    templateUrl: './playlist-view.component.html',
    styleUrls: ['./playlist-view.component.scss'],
})
export class PlaylistViewComponent implements OnInit {

    private _playlistId: number
    private _playlist: Playlist

    constructor(
        private playlistService: PlaylistService,
        private route: ActivatedRoute
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
}
