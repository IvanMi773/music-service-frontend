import { Injectable } from '@angular/core';
import { Song } from '../models/song';
import { PlayerService } from './player.service';

@Injectable({
    providedIn: 'root',
})
export class QueueService {

    private _queue: Array<Song> = new Array<Song>()

    constructor(
        private playerService: PlayerService
    ) { }

    public subscribe () {
        this.playerService.queue.subscribe((value: Array<Song>) => {
            value.forEach(song => {
                this._queue.push(song)
            })
        })
    }

    get queue () {
        return this._queue
    }
}
