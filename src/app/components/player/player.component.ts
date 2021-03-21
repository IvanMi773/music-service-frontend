import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';
import { PlayerService } from 'src/app/services/player.service';
import { QueueService } from 'src/app/services/queue.service';

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
        private playerService: PlayerService,
        private queueService: QueueService
    ) {}

    ngOnInit(): void {
        this.playerService.queue.subscribe(queue => {
            queue.forEach((value) => {
                this.msaapPlaylist.push({
                    title: value.name,
                    link: 'http://localhost:8080/api/song/' + value.file,
                    artist: value.username,
                    duration: 3
                })
            })
        })

        this.queueService.subscribe()
    }

    public onEnded (event: any) {
        this.queueService.queue.shift()
    }
}
