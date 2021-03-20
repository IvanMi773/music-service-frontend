import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song';
import { PlayerService } from 'src/app/services/player.service';
import { QueueService } from 'src/app/services/queue.service';

@Component({
    selector: 'app-queue',
    templateUrl: './queue.component.html',
    styleUrls: ['./queue.component.scss'],
})
export class QueueComponent implements OnInit {

    private _queue: Array<Song>

    constructor(
        private playerService: PlayerService,
        private queueService: QueueService
    ) {}

    ngOnInit(): void {
        this._queue = this.queueService.queue
    }

    get queue () {
        return this._queue
    }
}
