import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Track } from 'ngx-audio-player';
import { Playlist } from 'src/app/models/playlist';
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
    private _isPlaying: boolean = true

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

    msaapDisplayTitle = false;
    msaapDisplayPlayList = false;
    msaapPageSizeOptions = [2,4,6];
    msaapDisplayVolumeControls = true;
    msaapDisplayRepeatControls = true;
    msaapDisplayArtist = false;
    msaapDisplayDuration = true;
    msaapDisablePositionSlider = false;

    msaapPlaylist: Track[] = [];

    public onEnded (event: any) {
        console.log("ended")
    }

    public play () {
        this.playerService.queue.next(this.playlist.songs)
        // this.isPlaying = !this.isPlaying
        // this.msaapPlaylist = []

        // this.playlist.songs.forEach((value, index) => {
        //     this.msaapPlaylist[index] = {
        //         title: value.name,
        //         link: 'http://localhost:8080/api/song/' + value.file,
        //         artist: value.username,
        //         duration: 3
        //     }
        // })
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
