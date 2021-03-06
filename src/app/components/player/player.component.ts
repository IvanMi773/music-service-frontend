import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {

    msaapDisplayTitle = false;
    msaapDisplayPlayList = false;
    msaapPageSizeOptions = [2,4,6];
    msaapDisplayVolumeControls = true;
    msaapDisplayRepeatControls = true;
    msaapDisplayArtist = false;
    msaapDisplayDuration = true;
    msaapDisablePositionSlider = false;


    // Material Style Advance Audio Player Playlist
    msaapPlaylist: Track[] = [
        {
            title: 'Audio One Title',
            link: 'http://localhost:8080/api/song/cf21bb2b-42cc-4da1-bd5e-f4da655626b5.mpeg',
            artist: 'Artist',
            duration: 2
        },
        {
            title: 'Audio Two Title',
            link: 'http://localhost:8080/api/song/cf21bb2b-42cc-4da1-bd5e-f4da655626b5.mpeg',
            artist: 'Artist',
            duration: 4
        },
        {
            title: 'Audio Three Title',
            link: 'http://localhost:8080/api/song/cf21bb2b-42cc-4da1-bd5e-f4da655626b5.mpeg',
            artist: 'Artist',
            duration: 6
        },
    ];

    public onEnded (event: any) {
        console.log("ended")
    }

    constructor() {}

    ngOnInit(): void {}
}
