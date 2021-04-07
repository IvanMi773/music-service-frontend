import {
    Component,
    OnInit,
} from '@angular/core';
import { Track } from 'ngx-audio-player';
import { PlayerService } from 'src/app/services/player.service';
import { QueueService } from 'src/app/services/queue.service';
import { SongService } from 'src/app/services/song.service';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {

    msaapDisplayTitle = false;
    msaapDisplayPlayList = false;
    msaapPageSizeOptions = [2, 4, 6];
    msaapDisplayVolumeControls = true;
    msaapDisplayRepeatControls = true;
    msaapDisplayArtist = false;
    msaapDisplayDuration = true;
    msaapDisablePositionSlider = false;

    msaapPlaylist: Track[] = [];

    constructor(
        private playerService: PlayerService,
        private queueService: QueueService,
        private songService: SongService
    ) {}

    ngOnInit(): void {
        if (this.queueService.queue !== null) {
            this.queueService?.queue.forEach((value) => {
                this.msaapPlaylist.push({
                    title: value.name,
                    link: 'http://localhost:8080/api/song/' + value.file,
                    artist: value.username,
                    duration: value.duration,
                });
            });
        } else {
            this.queueService.clearLocalstorage();
        }

        this.playerService.clearQueue.subscribe((clearQueue) => {
            if (clearQueue) {
                this.msaapPlaylist = [];
                clearQueue = !clearQueue;
                this.queueService.clearLocalstorage()
            }
        });
        this.queueService.subscribe();

        this.playerService.queue.subscribe((queue) => {
            queue.forEach((value) => {
                this.msaapPlaylist.push({
                    title: value.name,
                    link: 'http://localhost:8080/api/song/' + value.file,
                    artist: value.username,
                    duration: value.duration,
                });
            });
        });

    }

    public onEnded(event: any) {
        this.songService
            .saveSongToHistory(this.queueService.queue[0].id)
            .subscribe((data) => console.log(data));
        this.queueService.removeFirstElementFromQueue();
    }
}
