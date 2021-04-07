import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song';
import { PlayerService } from 'src/app/services/player.service';
import { PlaylistService } from 'src/app/services/playlist.service';
import { QueueService } from 'src/app/services/queue.service';

@Component({
    selector: 'app-queue',
    templateUrl: './queue.component.html',
    styleUrls: ['./queue.component.scss'],
})
export class QueueComponent implements OnInit {

    constructor(
        private queueService: QueueService,
        private playerService: PlayerService
    ) {}

    ngOnInit(): void {
        this.queueService.queue
    }

    get queue () {
        return this.queueService.queue
    }

    public clearQueue () {
        this.playerService.clearQueue.next(true)
    }
}
