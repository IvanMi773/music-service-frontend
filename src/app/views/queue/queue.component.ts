import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song';
import { QueueService } from 'src/app/services/queue.service';

@Component({
    selector: 'app-queue',
    templateUrl: './queue.component.html',
    styleUrls: ['./queue.component.scss'],
})
export class QueueComponent implements OnInit {

    constructor(
        private queueService: QueueService
    ) {}

    ngOnInit(): void {
        this.queueService.queue
    }

    get queue () {
        return this.queueService.queue
    }
}
