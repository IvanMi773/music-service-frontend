import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';
import { HomeService } from 'src/app/services/home.service';

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

    msaapPlaylist: Track[] = [];

    constructor(
        private homeService: HomeService
    ) {}

    ngOnInit(): void {
        this.homeService.currentTruck.subscribe(value => {
            if (value !== '') {
                this.msaapPlaylist = []
                this.msaapPlaylist[0] = {
                    title: 'test',
                    link: 'http://localhost:8080/api/song/' + value,
                    artist: '',
                    duration: 2
                }
            } else {
                this.msaapPlaylist = []
            }
        })
    }

    public onEnded (event: any) {
        console.log("ended")
    }
}
